import React from 'react';
import PropTypes from 'prop-types';
export default function SubHeader({ title, parent, item }) {
  return (
    <div className="page-bar">
      <div className="page-title-breadcrumb">
        <div className=" pull-left">
          <div className="page-title">{title}</div>
        </div>
        <ol className="breadcrumb page-breadcrumb pull-right">
          <li>
            <i className="fa fa-home"></i>&nbsp;
            <a className="parent-item" href="/">
              {parent}
            </a>
            &nbsp;<i className="fa fa-angle-right"></i>
          </li>
          <li>
            <a className="parent-item" href="/">
              {item}
            </a>
            &nbsp;<i className="fa fa-angle-right"></i>
          </li>
          <li className="active">{title}</li>
        </ol>
      </div>
    </div>
  );
}

SubHeader.defaultProps = {
  title: 'titulo',
  parent: 'Home',
  item: 'App',
};

SubHeader.propTypes = {
  title: PropTypes.string,
  parent: PropTypes.string,
  item: PropTypes.string,
};
