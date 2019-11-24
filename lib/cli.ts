#!/usr/bin/env node

import { buildResumeToFile } from './buildResumeToFile'
import { resolve } from 'path'

function showUsage(): string {
	return `
Usage: yaml-folder-2-jsonresume <inputFolder> <outputFile>

transform folder with YAML's files to JSON resume's file
	`.trim()
}

async function main(argv: string[]): Promise<void> {
	for (const arg of argv) {
		if (arg === '--help' || arg === '-h') {
			console.log(showUsage())
			process.exit(0)
		}
	}

	try {
		const inputFolder = resolve(argv[2])
		const outputFile = resolve(argv[3])

		const resume = await buildResumeToFile(inputFolder, outputFile)

		// console.debug(resume);
		console.debug(
			Object.entries(resume).map(([key, value]) => [
				key,
				value.length,
				JSON.stringify(value).length,
			]),
		)
	} catch (ex) {
		console.log(showUsage())

		throw ex
	}
}

main(process.argv)
