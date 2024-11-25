import * as quaff from 'quaff'

function object2array([key, value]: [string, unknown]): [string, object | unknown[]] {
    if (['$schema', 'basics', 'meta'].includes(key)) {
        return [key, value as object]
    }
    if (typeof value === 'object' && value !== null) {
        return [key, [...Object.values(value)]]
    }
    throw new Error(`Invalid value type for key: ${key}`)
}


export async function buildResume(inputFolder: string): Promise<object> {
	const yaml = await quaff.load(inputFolder)
	if (typeof yaml !== 'object' || yaml === null) {
		throw new Error(`"${inputFolder}" should be a path to a folder`)
	}
	const resume = Object.fromEntries(Object.entries(yaml).map(object2array))
	return resume
}
