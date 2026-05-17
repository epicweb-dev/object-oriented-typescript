import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const here = path.dirname(fileURLToPath(import.meta.url))
const defaultServerBuildPath = path.join(
	here,
	'node_modules',
	'@epic-web',
	'workshop-app',
	'build',
	'server',
	'index.js',
)
const defaultServerRuntimePath = path.join(
	here,
	'node_modules',
	'@epic-web',
	'workshop-app',
	'dist',
	'server',
	'index.js',
)

const notFoundActionFunctionName = 'action$splatNotFound'
const notFoundActionFunction = `async function ${notFoundActionFunctionName}() {
  throw new Response("Not found", {
    status: 404
  });
}
`

const loaderEndNeedle = `  throw new Response("Not found", {
    status: 404
  });
}
const $ = UNSAFE_withComponentProps`

const patchedLoaderEndNeedle = `  throw new Response("Not found", {
    status: 404
  });
}
${notFoundActionFunction}const $ = UNSAFE_withComponentProps`

const routeModuleNeedle = `  ErrorBoundary: ErrorBoundary$7,
  default: $,
  loader: loader$L
}, Symbol.toStringTag`

const patchedRouteModuleNeedle = `  ErrorBoundary: ErrorBoundary$7,
  action: ${notFoundActionFunctionName},
  default: $,
  loader: loader$L
}, Symbol.toStringTag`

const routeManifestNeedle =
	'"routes/$": { "id": "routes/$", "parentId": "root", "path": "*", "index": void 0, "caseSensitive": void 0, "hasAction": false,'

const patchedRouteManifestNeedle =
	'"routes/$": { "id": "routes/$", "parentId": "root", "path": "*", "index": void 0, "caseSensitive": void 0, "hasAction": true,'

const repeatedSlashMiddleware = `app.use((req, res, next) => {
  const requestPath = req.originalUrl.split("?")[0];
  if (req.method !== "GET" && req.method !== "HEAD" && req.method !== "OPTIONS" && /^\\/{2,}$/.test(requestPath)) {
    res.status(404).send("Not found");
    return;
  }
  next();
});
`

const requestContextMiddlewareNeedle =
	'app.use((_req, _res, next) => requestContext.run({}, next));\n'

const patchedRequestContextMiddlewareNeedle = `${requestContextMiddlewareNeedle}${repeatedSlashMiddleware}`

export function patchWorkshopAppServerBuild(source) {
	const hasActionFunction = source.includes(
		`async function ${notFoundActionFunctionName}()`,
	)
	const hasActionExport = source.includes(
		`action: ${notFoundActionFunctionName}`,
	)
	const hasActionManifest = source.includes(patchedRouteManifestNeedle)

	if (hasActionFunction && hasActionExport && hasActionManifest) {
		return { patched: false, source }
	}

	if (hasActionFunction !== hasActionExport) {
		throw new Error(
			'Found a partial workshop-app splat action patch. Reinstall dependencies and rerun the patch.',
		)
	}

	let patchedSource = source
	let patched = false

	if (!hasActionFunction) {
		if (!patchedSource.includes(loaderEndNeedle)) {
			throw new Error(
				'Could not find the workshop-app splat route loader to patch.',
			)
		}

		if (!patchedSource.includes(routeModuleNeedle)) {
			throw new Error(
				'Could not find the workshop-app splat route module to patch.',
			)
		}

		patchedSource = patchedSource
			.replace(loaderEndNeedle, patchedLoaderEndNeedle)
			.replace(routeModuleNeedle, patchedRouteModuleNeedle)
		patched = true
	}

	if (!hasActionManifest) {
		if (!patchedSource.includes(routeManifestNeedle)) {
			throw new Error(
				'Could not find the workshop-app splat route manifest entry to patch.',
			)
		}

		patchedSource = patchedSource.replace(
			routeManifestNeedle,
			patchedRouteManifestNeedle,
		)
		patched = true
	}

	return {
		patched,
		source: patchedSource,
	}
}

export function patchWorkshopAppServerRuntime(source) {
	if (source.includes(repeatedSlashMiddleware)) {
		return { patched: false, source }
	}

	if (!source.includes(requestContextMiddlewareNeedle)) {
		throw new Error(
			'Could not find the workshop-app request context middleware to patch.',
		)
	}

	return {
		patched: true,
		source: source.replace(
			requestContextMiddlewareNeedle,
			patchedRequestContextMiddlewareNeedle,
		),
	}
}

export async function patchWorkshopApp({
	serverBuildPath = defaultServerBuildPath,
	serverRuntimePath = defaultServerRuntimePath,
} = {}) {
	const [serverBuildSource, serverRuntimeSource] = await Promise.all([
		fs.readFile(serverBuildPath, 'utf8'),
		fs.readFile(serverRuntimePath, 'utf8'),
	])
	const serverBuildResult = patchWorkshopAppServerBuild(serverBuildSource)
	const serverRuntimeResult = patchWorkshopAppServerRuntime(serverRuntimeSource)

	await Promise.all([
		serverBuildResult.patched
			? fs.writeFile(serverBuildPath, serverBuildResult.source)
			: null,
		serverRuntimeResult.patched
			? fs.writeFile(serverRuntimePath, serverRuntimeResult.source)
			: null,
	])

	if (serverBuildResult.patched || serverRuntimeResult.patched) {
		console.log(
			'Patched @epic-web/workshop-app splat route to return a normal 404 for POST scanner traffic.',
		)
	}

	return {
		patched: serverBuildResult.patched || serverRuntimeResult.patched,
		serverBuild: serverBuildResult,
		serverRuntime: serverRuntimeResult,
	}
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
	await patchWorkshopApp()
}
