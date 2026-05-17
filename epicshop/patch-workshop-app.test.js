import assert from 'node:assert/strict'
import test from 'node:test'
import {
	patchWorkshopApp,
	patchWorkshopAppServerBuild,
	patchWorkshopAppServerRuntime,
} from './patch-workshop-app.js'

const unpatchedServerBuildFixture = `async function loader$L({
  params
}) {
  const splat = params["*"];
  const segments = splat?.split("/") ?? [];
  if (segments.length > 0 && !isNaN(Number(segments[0]))) {
    const newPath = \`/exercise/\${splat}\`;
    return new Response(null, {
      status: 302,
      headers: {
        Location: newPath
      }
    });
  }
  throw new Response("Not found", {
    status: 404
  });
}
const $ = UNSAFE_withComponentProps(function NotFound() {
  return /* @__PURE__ */ jsx(ErrorBoundary$7, {});
});
const ErrorBoundary$7 = UNSAFE_withErrorBoundaryProps(function ErrorBoundary2() {
  return null;
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary: ErrorBoundary$7,
  default: $,
  loader: loader$L
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "routes": { "routes/$": { "id": "routes/$", "parentId": "root", "path": "*", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true } } };
`

const unpatchedServerRuntimeFixture = `app.use((_req, _res, next) => requestContext.run({}, next));
app.options("*splat", (_req, res) => {
  res.set("Allow", "GET, HEAD, POST, OPTIONS");
  res.sendStatus(204);
});
`

test('adds a 404 action to the workshop-app splat route module', () => {
	const result = patchWorkshopAppServerBuild(unpatchedServerBuildFixture)

	assert.equal(result.patched, true)
	assert.match(result.source, /async function action\$splatNotFound\(\)/)
	assert.match(result.source, /action: action\$splatNotFound/)
	assert.match(result.source, /"routes\/\$": .*"hasAction": true/)
})

test('does not modify an already patched server build', () => {
	const firstResult = patchWorkshopAppServerBuild(unpatchedServerBuildFixture)
	const secondResult = patchWorkshopAppServerBuild(firstResult.source)

	assert.equal(secondResult.patched, false)
	assert.equal(secondResult.source, firstResult.source)
})

test('fails loudly when the expected route shape changes', () => {
	assert.throws(
		() => patchWorkshopAppServerBuild('const route1 = {}'),
		/Could not find the workshop-app splat route loader/,
	)
})

test('adds a narrow repeated-slash POST guard before React Router', () => {
	const result = patchWorkshopAppServerRuntime(unpatchedServerRuntimeFixture)

	assert.equal(result.patched, true)
	assert.match(result.source, /requestPath = req\.originalUrl\.split/)
	assert.match(result.source, /\^\\\/\{2,\}\$/)
})

test('does not modify an already patched server runtime', () => {
	const firstResult = patchWorkshopAppServerRuntime(unpatchedServerRuntimeFixture)
	const secondResult = patchWorkshopAppServerRuntime(firstResult.source)

	assert.equal(secondResult.patched, false)
	assert.equal(secondResult.source, firstResult.source)
})

test('patches the installed workshop-app build', async () => {
	const result = await patchWorkshopApp()

	assert.equal(typeof result.patched, 'boolean')
	assert.match(result.serverBuild.source, /action: action\$splatNotFound/)
	assert.match(result.serverBuild.source, /"routes\/\$": .*"hasAction": true/)
	assert.match(result.serverRuntime.source, /\^\\\/\{2,\}\$/)
})
