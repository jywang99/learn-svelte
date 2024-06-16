export function match(value: string) {
	return /^[0-9a-f]{6}$/.test(value);
}

