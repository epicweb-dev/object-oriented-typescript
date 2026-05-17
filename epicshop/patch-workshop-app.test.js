import assert from 'node:assert/strict'
import test from 'node:test'
import {
	patchWorkshopApp,
	patchWorkshopAppServerBuild,
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
`

test('adds a 404 action to the workshop-app splat route module', () => {
	const result = patchWorkshopAppServerBuild(unpatchedServerBuildFixture)

	assert.equal(result.patched, true)
	assert.match(result.source, /async function action\$splatNotFound\(\)/)
	assert.match(result.source, /action: action\$splatNotFound/)
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

test('patches the installed workshop-app build', async () => {
	const result = await patchWorkshopApp()

	assert.equal(typeof result.patched, 'boolean')
	assert.match(result.source, /action: action\$splatNotFound/)
})
