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

          // The arrays have the different combinations to form a roman numeral
          // for each spot in the number
          // const thousands = ['', 'M', 'MM', 'MMM'];
          // const hundreds =
          //     ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
          // const tens =
          //     ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
          // const ones =
          //     ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];

          let romanNumeral = '';

          // let returnNum =
          //     getNumeral(thousands, queryNumber, 1000, romanNumeral);
          // returnNum = getNumeral(
          //     hundreds, returnNum.number, 100, returnNum.numeralString);
          // returnNum =
          //     getNumeral(tens, returnNum.number, 10,
          //     returnNum.numeralString);
          // romanNumeral = returnNum.numeralString;

          // // Get the number in the ones spot and get the cooresponding roman
          // // numeral from the ones array to add to the return string
          // romanNumeral = romanNumeral + ones[returnNum.number];

          romanNumeral = vinculum(queryNumber);

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

function vinculum(number) {


  let numbersub = number;
  let num = number;
  let bararray = [];
  let romanNumeralStr = ''


  if (num < 1000) {
    romanNumeralStr += getRoman(num);
  }

  while (num > 1000) {
    let barnum = 0;
    while (num > 1000) {
      barnum++;
      num = num / 1000;
      if (num < 1000) {
        let tempStr = getRoman(num);
        romanNumeralStr = romanNumeralStr + tempStr
        for (i = 0; i < barnum; i++) {
          let line = '-'
          let barstr = line.repeat(romanNumeralStr.length);
          if (bararray.length <= barnum - 1) {
            bararray.push(barstr)
          } else {
            bararray[i] += barstr;
          }
        }
      }
    }


    let total = Math.floor(num) * barnum * 1000
    let tempnum = numbersub - total;
    num = tempnum;

    if (num < 1000) {
      let tempStr = getRoman(num);
      romanNumeralStr = romanNumeralStr + tempStr
    }
  }

  let barfinal = '';
  for (let i = bararray.length - 1; i > -1; i--) {
    barfinal += bararray[i] + '<br>';
  }

  romanNumeralStr
  return barfinal + romanNumeralStr;
}