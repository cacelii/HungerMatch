import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchSpicyMatches } from '../store/matches';

const Matches = props => {
  return (
    <div>
      <h1>Matches</h1>
      <div>
        {props.matches.map(match => (
          <div key={match.id}>
            <div>
              <h2>{match.name}</h2>
            </div>
            <div>
              <h2>${match.rating} </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapState = state => {
  return {
    matches: state.matches
  };
};

const mapDispatch = dispatch => ({
  getSpicyMatches() {
    dispatch(fetchSpicyMatches());
  }
});

export default withRouter(connect(mapState, mapDispatch)(Matches));
