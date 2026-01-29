// This should run by node without any dependencies
// because you may need to run it without deps.

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const here = (...p) => path.join(__dirname, ...p)
const VERBOSE = false
// eslint-disable-next-line
const logVerbose = (...args) => (VERBOSE ? console.log(...args) : undefined)

const workshopRoot = here('..')
const extras = (await readDir(here('../extra'))).map((dir) =>
	here(`../extra/${dir}`),
)
const exercises = (await readDir(here('../exercises')))
	.map((name) => here(`../exercises/${name}`))
	.filter((filepath) => fs.statSync(filepath).isDirectory())
const exerciseApps = (
	await Promise.all(
		exercises.flatMap(async (exercise) => {
			return (await readDir(exercise))
				.filter((dir) => {
					return /(problem|solution)/.test(dir)
				})
				.map((dir) => path.join(exercise, dir))
		}),
	)
).flat()
const extraApps = (await readDir(here('../extra'))).map((dir) =>
	here(`../extra/${dir}`),
)
const apps = [...extraApps, ...exerciseApps]

const appsWithPkgJson = [...extras, ...apps].filter((app) => {
	const pkgjsonPath = path.join(app, 'package.json')
	return exists(pkgjsonPath)
})

// update the package.json file name property
// to match the parent directory name + directory name
// e.g. exercises/01-goo/problem.01-great
// name: "exercises__sep__01-goo.problem__sep__01-great"

function relativeToWorkshopRoot(dir) {
	return dir.replace(`${workshopRoot}${path.sep}`, '')
}

await updatePkgNames()

async function updatePkgNames() {
	for (const file of appsWithPkgJson) {
		const pkgjsonPath = path.join(file, 'package.json')
		const pkg = JSON.parse(await fs.promises.readFile(pkgjsonPath, 'utf8'))
		pkg.name = relativeToWorkshopRoot(file).replace(/\\|\//g, '_')
		const written = await writeIfNeeded(
			pkgjsonPath,
			`${JSON.stringify(pkg, null, 2)}\n`,
		)
		if (written) {
			console.log(`updated ${path.relative(process.cwd(), pkgjsonPath)}`)
		}
	}
}

async function writeIfNeeded(filepath, content) {
	const oldContent = await fs.promises.readFile(filepath, 'utf8')
	if (oldContent !== content) {
		await fs.promises.writeFile(filepath, content)
	}
	return oldContent !== content
}

function exists(p) {
	if (!p) return false
	try {
		fs.statSync(p)
		return true
	} catch {
		return false
	}
}

async function readDir(dir) {
	if (exists(dir)) {
		return fs.promises.readdir(dir)
	}
	return []
}
