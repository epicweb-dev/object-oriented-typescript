import { defineConfig } from '@playwright/test'
import getPort from 'get-port'

const port = process.env.PORT ? Number(process.env.PORT) : await getPort({ port: 5639 })

process.env.PORT = String(port)

export default defineConfig({
	testDir: '.',
	testMatch: 'workshop.test.ts',
	timeout: 60000,
	use: {
		baseURL: `http://localhost:${port}`,
	},
	webServer: {
		command: 'npm run dev',
		cwd: '..',
		port,
		reuseExistingServer: true,
		timeout: 120000,
	},
})
