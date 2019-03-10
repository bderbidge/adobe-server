module.exports =
    {
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
          if (queryNumber < 1) {
            return null;
          }

          let romanNumeral = vinculum(queryNumber);

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

// This function constructs a roman numeral string from 0 - 999
function getRoman(number) {
  const hundreds = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
  const tens = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
  const ones = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];

  let romanNumeral = '';
  returnNum = getNumeral(hundreds, number, 100, romanNumeral);
  returnNum = getNumeral(tens, returnNum.number, 10, returnNum.numeralString);
  romanNumeral = returnNum.numeralString;

  // Get the number in the ones spot and get the cooresponding roman
  // numeral from the ones array to add to the return string
  romanNumeral = romanNumeral + ones[returnNum.number];
  return romanNumeral;
}

// This function gives functionality for vinculum numbers. It takes in a number
// and returns a roman numeral representation of that number. Vinculum numbers
// have a bar over the top and this function constructs that number
function vinculum(number) {

  let numbersub = number;
  let num = number;
  let bararray = [];
  let romanNumeralStr = ''

  if (num < 1000) {
    romanNumeralStr += getRoman(num);
  }

  while (num > 999) {
    let barnum = 0;

    while (num > 999) {
      // Keep track of how many bars need to go over the number
      barnum++;
      num = Math.floor(num / 1000);
      if (num < 1000) {
        let tempStr = getRoman(num);
        romanNumeralStr = romanNumeralStr + tempStr
        let barlen = barnum - 1

        // The array holds the bars that go over the roman numerals.
        // The foor loop determines how many dashes are needed to go over the
        // roman numeral.
        for (let i = 0; i < barnum; i++) {
          let line = '-'
          let barstr = line.repeat(romanNumeralStr.length);
          if (bararray.length <= barlen) {
            bararray.push(barstr)
          } else {
            let tempstr = bararray[i]
            bararray[i] = tempstr + barstr;
          }
        }
      }
    }

    let total = Math.floor(num) * Math.pow(1000, barnum);
    let tempnum = numbersub - total;
    num = tempnum;

    if (num < 1000) {
      let tempStr = getRoman(num);
      romanNumeralStr = romanNumeralStr + tempStr
    }
  }

  // This loop puts bars over the roman numeral
  let barfinal = '';
  for (let i = bararray.length - 1; i > -1; i--) {
    barfinal += bararray[i] + '<br>';
  }

  romanNumeralStr
  return barfinal + romanNumeralStr;
}