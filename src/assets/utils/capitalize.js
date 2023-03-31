export function capitalizeFirstLetter(string) {
		return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

export function capitalizeAllWords(string) {
	return string.split(' ').map(word => capitalizeFirstLetter(word)).join(' ');
}