export function isAlpha(char: string) {
	return char.toUpperCase() != char.toLowerCase();
}

export function isSkippable(char: string) {
	return char === " " || char === "\n" || char === "\t";
}

export function isInt(char: string) {
  return (char >= '0' && char <= '9');
}