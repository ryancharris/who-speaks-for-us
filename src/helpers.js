import stateList from './state-list.js';

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

export function realState(input) {
    let stateAbbreviations = [];
    let stateNames = [];

    // Input is not a valid state name or abbreviation
    if (input.length === 1) {
      return false;
    } else if (input.length === 2) {
      // See if input is a valid state abbreviation
      stateAbbreviations = Object.keys(stateList);

      if (stateAbbreviations.indexOf(input.toUpperCase()) !== -1 ) {
        // If input is in array of abbreviations, return true
        return true;
      } else {
        // If input is not in the array, return false
        return false;
      }
      
    } else {
      // See if input is a valid state name
      stateNames = Object.values(stateList);
      
      if (stateNames.indexOf(capitalize(input)) !== -1 ) {
        // If input is in array of names, return true
        return true;
      } else {
        // If not, return false
        return false;
      }

    }
  }