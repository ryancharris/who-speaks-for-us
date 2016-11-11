export function capitalize(input) {
	let stateString = '';
	const wordsArray = input.split(" ");

	const capsArray = wordsArray.map((word) => {
		return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
	});

	if (capsArray.length > 1) {
		stateString = capsArray.join(" ");
	} else {
		stateString = capsArray[0];
	}

	return stateString;
}