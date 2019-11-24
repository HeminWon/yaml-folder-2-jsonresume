import { buildResume } from './buildResume'
import { promises as fs } from 'fs'

export async function buildResumeToFile(
	inputFolder: string,
	outputFile: string,
): Promise<object> {
	const resume = await buildResume(inputFolder)

	const resumeJSON = JSON.stringify(resume, null, '\t') + '\n'
	await fs.writeFile(outputFile, resumeJSON)

	return resume
}
