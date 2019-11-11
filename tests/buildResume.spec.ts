import { buildResume } from '../src/buildResume'
import { promises as fs } from 'fs'

describe('buildResume', () => {
	it('example', async () => {
		const basePath = `${__dirname}/example`

		const actualOutput: any = await buildResume(`${basePath}/input/`)

		const expectedPath = `${basePath}/expectedOutput.json`
		const expectedOutput = JSON.parse(
			await fs.readFile(expectedPath, 'utf-8'),
		)
		expect(expectedOutput).toEqual(actualOutput)
	})
})
