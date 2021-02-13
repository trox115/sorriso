/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { useDispatch, useSelector } from 'react-redux';

function Videos() {
  const { videos } = useSelector((state) => state.videos);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch.videos.loadVideos();
  }, [dispatch.videos]);

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
              <li className="active">Lista de Videos</li>
            </ol>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-9 col-lg-9">
            <div className="card card-box">
              <div className="card-head">
                <header>Videos</header>
              </div>
              <div className="card-body ">
                <div className="table-scrollable">
                  <table
                    className="table table-hover table-checkable order-column full-width"
                    id="example4"
                  >
                    <thead>
                      <tr>
                        <th className="center"></th>
                        <th className="center"> Nome </th>
                        <th className="center"> Editar</th>
                      </tr>
                    </thead>
                    <tbody>
                      {_.map(videos, (video, index) => {
                        return (
                          <tr className="odd gradeX" key={index}>
                            <td className="user-circle-img">
                              <img src="assets/img/user/user1.jpg" alt="" />
                            </td>
                            <td className="center">{video.nome}</td>
                            <td className="center">
                              <Link
                                to={{ pathname: `/video`, query: { video } }}
                                className="btn btn-tbl-edit btn-xs"
                              >
                                <i className="fa fa-eye"></i>
                              </Link>
                              <button className="btn btn-tbl-delete btn-xs">
                                <i className="fa fa-trash-o "></i>
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Videos;
