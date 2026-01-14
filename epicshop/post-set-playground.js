import fs from 'node:fs'
import path from 'node:path'

const srcDir = process.env.EPICSHOP_PLAYGROUND_SRC_DIR
const destDir = process.env.EPICSHOP_PLAYGROUND_DEST_DIR

if (!srcDir || !destDir) {
	console.log('⚠️  Missing required environment variables')
	process.exit(0)
}

// Find the corresponding solution directory for the source
// If source is a problem dir, find the matching solution dir
// If source is already a solution dir, use it directly
const srcDirName = path.basename(srcDir)
let solutionDir = srcDir

if (srcDirName.includes('.problem.')) {
	solutionDir = srcDir.replace('.problem.', '.solution.')
} else if (!srcDirName.includes('.solution.')) {
	// Not a problem or solution dir, nothing to do
	process.exit(0)
}

if (!fs.existsSync(solutionDir)) {
	console.log(`⚠️  No solution directory found: ${solutionDir}`)
	process.exit(0)
}

// Copy test files from solution to playground
const testFiles = fs
	.readdirSync(solutionDir)
	.filter((f) => f.endsWith('.test.ts'))

for (const testFile of testFiles) {
	const src = path.join(solutionDir, testFile)
	const dest = path.join(destDir, testFile)

	fs.copyFileSync(src, dest)
}
