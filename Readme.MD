# Adobe Interview

A Node.js webserver that takes in a number and returns a roman numeral. <br>
Roman Numeral Spesification: [Wikipedia](https://en.wikipedia.org/wiki/Roman_numerals)

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

## Documentation

A Node.js app using [Express 4](http://expressjs.com/).
