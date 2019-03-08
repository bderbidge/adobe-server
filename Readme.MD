# Adobe Interview

A Node.js webserver that takes in a number and returns a roman numeral.
Roman Numeral Spesification: https://en.wikipedia.org/wiki/Roman_numerals

## Running Locally

Make sure you have [Node.js](http://nodejs.org/) and the [Heroku Toolbelt](https://toolbelt.heroku.com/) installed.

```sh
git clone https://github.com/bderbidge/adobe-server.git # or clone your own fork
cd adobe-server
npm install
npm start
```

Your app should now be running on [localhost:8080](http://localhost:8080/).

## Example

To retrieve a roman numeral from the HTTP Endpoint, send a URI in this format:
http://localhost:8080/romannumeral?query={integer}
{integer} should be any number between 1-255.

## Documentation

A Node.js app using [Express 4](http://expressjs.com/).