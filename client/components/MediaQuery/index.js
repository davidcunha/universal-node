/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import Media from 'react-media';
import variables from '~/shared/styles/variables';

const MediaQuery = (props) => {
  let query = {};

  if (props.breakpointBetween) {
    query = `(min-width: ${
      variables.grid.breakpoints[props.breakpointBetween[0]]
    }px) and (max-width: ${variables.grid.breakpoints[props.breakpointBetween[1]] - 1}px)`;
  } else {
    query = {
      [`${props.limit}Width`]:
        props.limit === 'min'
          ? variables.grid.breakpoints[props.breakpoint]
          : variables.grid.breakpoints[props.breakpoint] - 1,
    };
  }

  return (
    <>
      {process.browser && (
        <Media query={query}>
          {matches => (matches ? props.matches() : props.noMatches ? props.noMatches() : null)}
        </Media>
      )}
    </>
  );
};

MediaQuery.defaultProps = {
  breakpoint: 'xs',
  limit: 'min',
};

MediaQuery.propTypes = {
  matches: PropTypes.func,
  noMatches: PropTypes.func,
  onChange: PropTypes.func,
  breakpoint: PropTypes.string,
  breakpointBetween: PropTypes.array,
  limit: PropTypes.string,
};

export default MediaQuery;
