module.exports = {
  execute: async function(req) {

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

      // Get the number in the thousands spot and get the cooresponding roman
      // numeral from the thousands array to add to the return string

      let thousandNumber = Math.floor(queryNumber / 1000)
      romanNumeral = romanNumeral + thousands[thousandNumber];
      let hundrednumber = queryNumber % 1000;

      // Get the number in the hundreds spot and get the cooresponding roman
      // numeral from the hundreds array to add to the return string
      num = Math.floor(hundrednumber / 100)
      romanNumeral = romanNumeral + hundreds[num];
      let tensnumber = hundrednumber % 100;

      // Get the number in the tens spot and get the cooresponding roman
      // numeral from the tens array to add to the return string
      num = Math.floor(tensnumber / 10)
      romanNumeral = romanNumeral + tens[num];
      let onesNum = Math.floor(tensnumber % 10);

      // Get the number in the ones spot and get the cooresponding roman
      // numeral from the ones array to add to the return string
      romanNumeral = romanNumeral + ones[onesNum];

      return romanNumeral;
    } catch (error) {
      throw error;
    }
  }
}