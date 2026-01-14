import { dirname } from 'path'
import { fileURLToPath } from 'url'
import defaultConfig from '@epic-web/config/eslint'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

/** @type {import("eslint").Linter.Config} */
export default [
	...defaultConfig,
	{
		files: ['**/*.ts', '**/*.tsx'],
		languageOptions: {
			parserOptions: {
				projectService: true,
				tsconfigRootDir: __dirname,
				allowDefaultProject: true,
			},
		},
		rules: {
			// we leave unused vars around for the exercises
			'no-unused-vars': 'off',
			'@typescript-eslint/no-unused-vars': 'off',
		},
	},
]
