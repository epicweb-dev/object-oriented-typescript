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

export function patchWorkshopAppServerBuild(source) {
	const hasActionFunction = source.includes(
		`async function ${notFoundActionFunctionName}()`,
	)
	const hasActionExport = source.includes(
		`action: ${notFoundActionFunctionName}`,
	)

	if (hasActionFunction && hasActionExport) {
		return { patched: false, source }
	}

	if (hasActionFunction || hasActionExport) {
		throw new Error(
			'Found a partial workshop-app splat action patch. Reinstall dependencies and rerun the patch.',
		)
	}

	if (!source.includes(loaderEndNeedle)) {
		throw new Error(
			'Could not find the workshop-app splat route loader to patch.',
		)
	}

	if (!source.includes(routeModuleNeedle)) {
		throw new Error(
			'Could not find the workshop-app splat route module to patch.',
		)
	}

	return {
		patched: true,
		source: source
			.replace(loaderEndNeedle, patchedLoaderEndNeedle)
			.replace(routeModuleNeedle, patchedRouteModuleNeedle),
	}
}

export async function patchWorkshopApp({
	serverBuildPath = defaultServerBuildPath,
} = {}) {
	const source = await fs.readFile(serverBuildPath, 'utf8')
	const result = patchWorkshopAppServerBuild(source)

	if (result.patched) {
		await fs.writeFile(serverBuildPath, result.source)
		console.log(
			'Patched @epic-web/workshop-app splat route to return a normal 404 for POST scanner traffic.',
		)
	}

	return result
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
	await patchWorkshopApp()
}
