import quaff from 'quaff'

function object2array([key, value]: [string, object]): [string, object] {
	if (['$schema', 'basics'].includes(key)) {
		return [key, value]
	}

	return [key, [...Object.values(value)]]
}

export async function buildResume(inputFolder: string): Promise<object> {
	const yaml = await quaff(inputFolder)
	if (typeof yaml !== 'object' || yaml === null) {
		throw new Error(`"${inputFolder}" should be a path to a folder`)
	}
	const resume = Object.fromEntries(Object.entries(yaml).map(object2array))
	return resume
}
