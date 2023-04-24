export function sanitizeFormData(
	obj,
	defaults = {},
	whitelist = [],
	parentKey = "",
) {
	const result = {};

	for (const key in obj) {
		const currentKeyPath = parentKey ? `${parentKey}.${key}` : key;
		const wildcardKeyPath = parentKey ? `${parentKey}.*` : "*";

		if (obj[key] != null && typeof obj[key] === "object") {
			result[key] = sanitizeFormData(
				obj[key],
				defaults[key] || {},
				whitelist,
				currentKeyPath,
			);
			if (Object.keys(result[key]).length === 0) {
				delete result[key];
			}
		} else if (
			!(
				obj[key] === undefined ||
				obj[key] === null ||
				(defaults[key] !== undefined && obj[key] === defaults[key])
			) ||
			whitelist.includes(currentKeyPath) ||
			whitelist.includes(wildcardKeyPath)
		) {
			// Key does not match deletion criteria, or is whitelisted, or matches the wildcard, copy it
			result[key] = obj[key];
		}
	}

	return result;
}
