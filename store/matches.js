import axios from 'axios';

const FETCH = 'FETCH';

const fetch = matches => ({ type: FETCH, matches });

export const fetchSpicyMatches = () => dispatch =>
  axios
    .get('172.16.27.106/yelp/spicy')
    .then(res => {
      console.log('YELP ', res);
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
