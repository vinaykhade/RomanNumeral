import { DECIMALS, ROMANS } from './constants';

const RomanNumerals = (function() {

	const toRoman = (num) => {  
	  	let result = '';

		for (let i = 0;i<=DECIMALS.length;i++) {
		    while (num%DECIMALS[i] < num) {     
		      result += ROMANS[i];
		      num -= DECIMALS[i];
		    }
		  }
		return result;
	}

	const fromRoman = (str) =>  {  
		let result = 0;
		// the result is now a number, not a string
		for (let i = 0;i<=DECIMALS.length;i++) {
		    while (str.indexOf(ROMANS[i]) === 0){
		      result += DECIMALS[i];
		      str = str.replace(ROMANS[i],'');
		    }
		  }
		return result;
	}

	const checkIfRomanNumeral = (numeral) => {
	    numeral = numeral.toUpperCase();
	    const validRomanNumerals = ["M", "D", "C", "L", "X", "V", "I", "(", ")"];
	    let valid = true;

	    for (let letter of numeral) {
	      if (!validRomanNumerals.includes(letter)) {
	        valid = false;
	      }
	    }

	    return valid;
   }

	return { toRoman, fromRoman, checkIfRomanNumeral };
})();

export default RomanNumerals;