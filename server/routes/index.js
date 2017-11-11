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

router.get('/spicy', (req, res, next) => {
  request({
    uri:
      'https://api.yelp.com/v3/businesses/search?term=spicy&location=newyork&sort_by=distance&price=1,2&limit=3',
    headers: {
      Authorization:
        'Bearer eqoQjEGRM7r4EOcUnLI_5nMa7vUxGH-8xErxncoRNYATJZfGyfRh8UQoHyNVCbtphTVK8Wv_ZzMVdIImilP2RCDOWAfaVX8bGB8kSS-uhPIXEIlf-J4lFNQl7BTyWXYx'
    }
  }).pipe(res);
});

router.get('/sweet', (req, res, next) => {
  request({
    uri: `https://api.yelp.com/v3/businesses/search?term=sweet&location=newyork&limit=3`,
    headers: {
      Authorization:
        'Bearer eqoQjEGRM7r4EOcUnLI_5nMa7vUxGH-8xErxncoRNYATJZfGyfRh8UQoHyNVCbtphTVK8Wv_ZzMVdIImilP2RCDOWAfaVX8bGB8kSS-uhPIXEIlf-J4lFNQl7BTyWXYx'
    }
  }).pipe(res);
});

router.get('/salty', (req, res, next) => {
  request({
    uri:
      'https://api.yelp.com/v3/businesses/search?term=saltyfood&location=newyork&limit=3',
    headers: {
      Authorization:
        'Bearer eqoQjEGRM7r4EOcUnLI_5nMa7vUxGH-8xErxncoRNYATJZfGyfRh8UQoHyNVCbtphTVK8Wv_ZzMVdIImilP2RCDOWAfaVX8bGB8kSS-uhPIXEIlf-J4lFNQl7BTyWXYx'
    }
  }).pipe(res);
});

router.get('/sour', (req, res, next) => {
  request({
    uri:
      'https://api.yelp.com/v3/businesses/search?term=sour&location=newyork&limit=3',
    headers: {
      Authorization:
        'Bearer eqoQjEGRM7r4EOcUnLI_5nMa7vUxGH-8xErxncoRNYATJZfGyfRh8UQoHyNVCbtphTVK8Wv_ZzMVdIImilP2RCDOWAfaVX8bGB8kSS-uhPIXEIlf-J4lFNQl7BTyWXYx'
    }
  }).pipe(res);
});

router.get('/umami', (req, res, next) => {
  request({
    uri:
      'https://api.yelp.com/v3/businesses/search?term=savory&location=newyork&limit=3',
    headers: {
      Authorization:
        'Bearer eqoQjEGRM7r4EOcUnLI_5nMa7vUxGH-8xErxncoRNYATJZfGyfRh8UQoHyNVCbtphTVK8Wv_ZzMVdIImilP2RCDOWAfaVX8bGB8kSS-uhPIXEIlf-J4lFNQl7BTyWXYx'
    }
  }).pipe(res);
});

module.exports = router;
