import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const exercisesDir = path.join(__dirname, '..', 'exercises')

function findSolutionDirs(dir) {
	const solutionDirs = []

	for (const exerciseDir of fs.readdirSync(dir)) {
		const exercisePath = path.join(dir, exerciseDir)
		if (!fs.statSync(exercisePath).isDirectory()) continue

		for (const stepDir of fs.readdirSync(exercisePath)) {
			if (stepDir.includes('.solution.')) {
				solutionDirs.push(path.join(exercisePath, stepDir))
			}
		}
	}

	return solutionDirs
}

function copyTestFiles() {
	const solutionDirs = findSolutionDirs(exercisesDir)
	let copiedCount = 0

	for (const solutionDir of solutionDirs) {
		const problemDir = solutionDir.replace('.solution.', '.problem.')

		if (!fs.existsSync(problemDir)) {
			console.log(`⚠️  No problem dir for: ${path.basename(solutionDir)}`)
			continue
		}

		const testFiles = fs
			.readdirSync(solutionDir)
			.filter((f) => f.endsWith('.test.ts'))

		for (const testFile of testFiles) {
			const src = path.join(solutionDir, testFile)
			const dest = path.join(problemDir, testFile)

			fs.copyFileSync(src, dest)
			console.log(`✅ Copied ${testFile} to ${path.basename(problemDir)}`)
			copiedCount++
		}
	}

	console.log(`\n📋 Copied ${copiedCount} test file(s)`)
}

copyTestFiles()
