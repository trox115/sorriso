/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

export default function VerVideo({ ...props }) {
  const { video } = props.location.query;
  return (
    <div className="page-content-wrapper">
      <div className="page-content">
        <div className="page-bar">
          <div className="page-title-breadcrumb">
            <div className=" pull-left">
              <div className="page-title">Lista de Stock</div>
            </div>
            <ol className="breadcrumb page-breadcrumb pull-right">
              <li>
                <i className="fa fa-home"></i>&nbsp;
                <a className="parent-item" href="index.html">
                  Home
                </a>
                &nbsp;<i className="fa fa-angle-right"></i>
              </li>
              <li>
                <a className="parent-item" href="">
                  Apps
                </a>
                &nbsp;<i className="fa fa-angle-right"></i>
              </li>
              <li className="active">{video.title}</li>
            </ol>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-9 col-lg-9">
            <div className="card card-box">
              <div className="card-head">
                <header>{video.title}</header>
              </div>
              <div className="card-body" style={{ height: '100vh' }}>
                <iframe
                  width="100%"
                  title={video.title}
                  height="100%"
                  src={video.link}
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
