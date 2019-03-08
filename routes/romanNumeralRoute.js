const romannumeral = require('../model/romanNumeral');
var express = require('express');
var router = express.Router();

router.get('/romannumeral', async (req, res, next) => {
  try {
    let result = await romannumeral.execute(req);

    if (result != null) {
      res.status(200);
      return res.send(result);
    }

    res.status(400);
    return res.end();

  } catch (err) {
    res.status(500);
    res.json({
      error: err.message,
    });
    next();
  }
});

module.exports = router;