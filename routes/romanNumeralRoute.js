const romannumeral = require('../model/romanNumeral');

module.exports = {
  execute: async function(req, res) {
    try {
      romannumeral.execute(req)
          .then((result) => {

            if (result) {
              res.status(200);
              return res.send(result);
            }

            res.status(400);
            res.end();
          })
          .catch((err) => {

            res.status(400);
            res.json({
              error: err.message,
            });
          });
    } catch (err) {
      res.status(400);
      res.json({
        error: err.message,
      });
    }
  }
}