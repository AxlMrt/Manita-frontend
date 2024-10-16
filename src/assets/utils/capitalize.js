export function capitalizeFirstLetter(string) {
	// Vérification si la valeur est bien une chaîne de caractères
	if (typeof string !== 'string' || string.length === 0) {
		return '';
	}
	return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

export function capitalizeAllWords(string) {
	// Vérification si la valeur est bien une chaîne de caractères
	if (typeof string !== 'string' || string.length === 0) {
		return '';
	}
	
	return string.split(' ').map(word => capitalizeFirstLetter(word)).join(' ');
}
