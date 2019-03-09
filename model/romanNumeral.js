module.exports = {
  execute: async (req) => {

    // Error checking to make sure that the query string is a number
    try {
      if (!req.query) {
        return null;
      }

      if (!req.query.query) {
        return null;
      }

      const query = req.query.query
      if (isNaN(query)) {
        return null;
      }

      const queryNumber = parseInt(query);
      if (queryNumber < 1 || queryNumber > 3999) {
        return null;
      }

      // The arrays have the different combinations to form a roman numeral for
      // each spot in the number
      const thousands = ['', 'M', 'MM', 'MMM'];
      const hundreds =
          ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
      const tens = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
      const ones = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];

      let romanNumeral = '';

      let returnNum = getNumeral(thousands, queryNumber, 1000, romanNumeral);
      returnNum =
          getNumeral(hundreds, returnNum.number, 100, returnNum.numeralString);
      returnNum =
          getNumeral(tens, returnNum.number, 10, returnNum.numeralString);
      romanNumeral = returnNum.numeralString;

      // Get the number in the ones spot and get the cooresponding roman
      // numeral from the ones array to add to the return string
      romanNumeral = romanNumeral + ones[returnNum.number];

      return romanNumeral;
    } catch (error) {
      throw error;
    }
  }
}

// This function takes in an array of roman numerals and the current number
// Returns the roman numeral string that has been constructed so far and returns
// the
function getNumeral(numeralArray, currentNumber, divisionNum, romanNumeralStr) {

  // Get the leading number from the current number
  let num = Math.floor(currentNumber / divisionNum);

  // Get the roman numeral from the corresponding array to add to the roman
  // numeral string
  romanNumeralStr = romanNumeralStr + numeralArray[num];

  // Removes the leading number and returns the remainder
  let returnNum = Math.floor(currentNumber % divisionNum);

  return {number: returnNum, numeralString: romanNumeralStr};
}
