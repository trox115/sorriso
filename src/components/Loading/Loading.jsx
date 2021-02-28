import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { CircularProgress } from '@material-ui/core';
import classNames from 'classnames';

import './Loading.scss';

function Loading({ fallback, forceLoading, contained }) {
  const { loading } = useSelector((state) => state.loading);
  return (
    <div className={
      classNames({
        'loading-container': true,
        'loading-container--hide': !fallback && !forceLoading && !loading,
        'loading-container--contained': !fallback && contained
      })
    }
    >
      <CircularProgress />
    </div>
  );
}

Loading.propTypes = {
  loading: PropTypes.bool,
  fallback: PropTypes.bool,
  forceLoading: PropTypes.bool,
  contained: PropTypes.bool
};

export default Loading;
