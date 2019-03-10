# Adobe Interview

A Node.js webserver that takes in a number between 1 to 1,000,999 and returns a roman numeral.  <br>
Roman Numeral Spesification: [Wikipedia](https://en.wikipedia.org/wiki/Roman_numerals)

## Engineering and Testing Methodology

My development methodology is to use Test Driven Development in writing software.
Before creating any component I believe it's important to write tests that 
test the different aspects of that component. I first write the tests that I know 
should not pass, and then my edge cases. Then I write cases that I believe should
pass. 

I also believe in the single responsibility principle when developing and building software.
Therefore, like my functions the components I create have a single responsibility.

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) installed.
```sh
git clone https://github.com/bderbidge/adobe-server.git # or clone your own fork
cd adobe-server
npm install
npm start
```

Your app should now be running on [localhost:8080](http://localhost:8080/).

## Running Tests

To run the tests, go to the root folder in the terminal and run the following command:
```sh
npm tests
``` 

## Example

To retrieve a roman numeral from the HTTP Endpoint, send a URI in this format: <br>
http://localhost:8080/romannumeral?query={integer} <br>
{integer} should be any number between 1-255.

## Package Layout

I have my server.js file that starts up a node.js express server and  configures the routes to the roman numeral route in the route folder.

The Route folder holds all other routes that need to be added to this project as well. Spesifically it holds the romanNumeralRoute.js file which is responsible for sending http response messages and data.

The Model folder holds the romanNumeral.js file which does the logic of converting a number to a roman numeral.

## Documentation

A Node.js app using [Express 4](http://expressjs.com/).
Mocha test framework [Mochajs](https://mochajs.org/)
Chai TDD assertion library [Chaijs](https://www.chaijs.com/)
SuperTest HTTP assertions library [SuperTest](https://www.npmjs.com/package/supertest)
Chai As Promised Chai as Promised extends Chai with a fluent language for asserting facts about promises. [Chai As Promised](https://www.npmjs.com/package/chai-as-promised)