import quaff from 'quaff'

function object2array([key, value]: [string, unknown]): [string, object | unknown[]] {
    if (['$schema', 'basics', 'meta', 'about', 'skills'].includes(key)) {
        return [key, value as object]
    }
    if (typeof value === 'object' && value !== null) {
        const items = sortObjectValuesDescending(value)
        return [key, items]
    }
    throw new Error(`Invalid value type for key: ${key}`)
}

function sortObjectValuesDescending(obj: Record<string, any>): any[] {
    // Get the keys of the object
    const keys = Object.keys(obj);
    
    // Check if the keys are sequential numbers starting from 0
    const isSequentialNumbers = keys.every((key, index) => {
        const num = Number(key);
        return !isNaN(num) && num === index; // Check if key is a number and matches its index
    });

    // Sort keys based on the condition
    const sortedKeys = isSequentialNumbers 
        ? keys.sort((a, b) => Number(a) - Number(b)) // Sort in ascending order
        : keys.sort((a, b) => b.localeCompare(a)); // Sort in descending order

    // Map sorted keys to their corresponding values to create an array
    const sortedValues = sortedKeys.map(key => obj[key]);

    return sortedValues; // Return the sorted values array
}

export async function buildResume(inputFolder: string): Promise<object> {
	const yaml = await quaff.load(inputFolder)
	if (typeof yaml !== 'object' || yaml === null) {
		throw new Error(`"${inputFolder}" should be a path to a folder`)
	}
    const resume = Object.fromEntries(Object.entries(yaml).map(object2array))
	return resume
}
