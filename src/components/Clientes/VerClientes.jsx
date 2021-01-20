import React from 'react';
import { Link } from 'react-router-dom';

export default function VerClientes() {
  return (
    <div className="page-content-wrapper">
      <div className="page-content">
        <div className="page-bar">
          <div className="page-title-breadcrumb">
            <div className=" pull-left">
              <div className="page-title">Lista de Contactos</div>
            </div>
            <ol className="breadcrumb page-breadcrumb pull-right">
              <li><i className="fa fa-home"></i>&nbsp;<a className="parent-item" href="index.html">Home</a>&nbsp;<i className="fa fa-angle-right"></i>
              </li>
              <li><a className="parent-item" href="">Apps</a>&nbsp;<i className="fa fa-angle-right"></i>
              </li>
              <li className="active">Lista de Contactos</li>
            </ol>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className="card-box ">
              <div className="card-head">
                <header>Lista de Contactos</header>
                <div className="tools">
                  <a className="fa fa-repeat btn-color box-refresh" href="javascript:;"></a>
                  <a className="t-collapse btn-color fa fa-chevron-down" href="javascript:;"></a>
                  <a className="t-close btn-color fa fa-times" href="javascript:;"></a>
                </div>
              </div>
              <div className="card-body ">
                <div className="tab-pane" id="tab2">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="card">
                        <div className="m-b-20">
                          <div className="doctor-profile">
                            <div className="profile-header bg-b-purple">
                              <div className="user-name">Pooja Patel</div>
                              <div className="name-center">General Manager</div>
                            </div>
                            <img src="assets/img/user/usrbig1.jpg" className="user-img"
                              alt="" />
                            <p>
                              A-103, shyam gokul flats, Mahatma Road <br />Mumbai
                                                    </p>
                            <div>
                              <p>
                                <i className="fa fa-phone"></i><a href="tel:(123)456-7890">
                                  (123)456-7890</a>
                              </p>
                            </div>
                            <div className="profile-userbuttons">
                              <Link to={`/cliente/${1}`}
                                className="btn btn-circle deepPink-bgcolor btn-sm">Ver Ficha</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card">
                        <div className="m-b-20">
                          <div className="doctor-profile">
                            <div className="profile-header cyan-bgcolor">
                              <div className="user-name">Smita Patil</div>
                              <div className="name-center">Housekeeper</div>
                            </div>
                            <img src="assets/img/user/usrbig2.jpg" className="user-img"
                              alt="" />
                            <p>
                              45, Krishna Tower, Near Bus Stop, Satellite,  <br />Ahmedabad
                                                    </p>
                            <div>
                              <p>
                                <i className="fa fa-phone"></i><a href="tel:(123)456-7890">
                                  (123)456-7890</a>
                              </p>
                            </div>
                            <div className="profile-userbuttons">
                              <a href="staff_profile.html"
                                className="btn btn-circle deepPink-bgcolor btn-sm">Ver Ficha</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="card">
                        <div className="m-b-20">
                          <div className="doctor-profile">
                            <div className="profile-header light-dark-bgcolor">
                              <div className="user-name">John Smith</div>
                              <div className="name-center">Cook</div>
                            </div>
                            <img src="assets/img/user/usrbig3.jpg" className="user-img"
                              alt="" />
                            <p>
                              456, Estern evenue, Courtage area,  <br />New York
                                                    </p>
                            <div>
                              <p>
                                <i className="fa fa-phone"></i><a href="tel:(123)456-7890">
                                  (123)456-7890</a>
                              </p>
                            </div>
                            <div className="profile-userbuttons">
                              <a href="staff_profile.html"
                                className="btn btn-circle deepPink-bgcolor btn-sm">Ver Ficha</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
