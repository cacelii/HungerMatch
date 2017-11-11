import axios from 'axios';

const FETCH = 'FETCH';

const fetch = matches => ({ type: FETCH, matches });

export const fetchSpicyMatches = () => dispatch =>
  axios
    .get('/yelp/spicy')
    .then(res => {
      dispatch(fetch(res.data));
    })
    .catch(err => console.log(err));

export const fetchSweetMatches = () => dispatch =>
  axios
    .get('/yelp/sweet')
    .then(res => {
      dispatch(fetch(res.data));
    })
    .catch(err => console.log(err));

export const fetchSaltyMatches = () => dispatch =>
  axios
    .get('/yelp/salty')
    .then(res => {
      dispatch(fetch(res.data));
    })
    .catch(err => console.log(err));

export const fetchSourMatches = () => dispatch =>
  axios
    .get('/yelp/sour')
    .then(res => {
      dispatch(fetch(res.data));
    })
    .catch(err => console.log(err));

export const fetchUmamiMatches = () => dispatch =>
  axios
    .get('/yelp/umami')
    .then(res => {
      dispatch(fetch(res.data));
    })
    .catch(err => console.log(err));

export default function(matches = [], action) {
  switch (action.type) {
    case FETCH:
      return action.matches;
    default:
      return matches;
  }
}
