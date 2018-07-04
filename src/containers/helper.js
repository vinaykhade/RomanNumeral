import { DECIMALS, ROMANS, VALID_ROMAN_NUMERALS } from './constants';

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
	    let valid = true;

	    for (let letter of numeral) {
	      if (!VALID_ROMAN_NUMERALS.includes(letter)) {
	        valid = false;
	      }
	    }

	    return valid;
   }

	return { toRoman, fromRoman, checkIfRomanNumeral };
})();

export default RomanNumerals;