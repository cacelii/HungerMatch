var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/', function(req, res, next) {
  request({
    uri: 'https://api.yelp.com/v3/businesses/raclette-new-york',
    headers: {
      Authorization:
        'Bearer eqoQjEGRM7r4EOcUnLI_5nMa7vUxGH-8xErxncoRNYATJZfGyfRh8UQoHyNVCbtphTVK8Wv_ZzMVdIImilP2RCDOWAfaVX8bGB8kSS-uhPIXEIlf-J4lFNQl7BTyWXYx'
    }
  }).pipe(res);
});

module.exports = router;
