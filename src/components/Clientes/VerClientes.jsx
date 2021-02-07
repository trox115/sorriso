import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';

function VerClientes({ users, getClientes, ...props }) {
  useEffect(() => {
    if (_.isEmpty(users.users)) {
      getClientes();
    }
  }, [users, getClientes]);
  const colors = [
    'orange',
    'purple',
    'green',
    'danger',
    'black',
    'yellow',
    'pink',
  ];
  return (
    <div className="page-content-wrapper">
      <div className="page-content">
        <div className="page-bar">
          <div className="page-title-breadcrumb">
            <div className=" pull-left">
              <div className="page-title">Lista de Contactos</div>
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
                  <a
                    className="fa fa-repeat btn-color box-refresh"
                    href="javascript:;"
                  ></a>
                  <a
                    className="t-collapse btn-color fa fa-chevron-down"
                    href="javascript:;"
                  ></a>
                  <a
                    className="t-close btn-color fa fa-times"
                    href="javascript:;"
                  ></a>
                </div>
              </div>
              <div className="card-body ">
                <div className="tab-pane" id="tab2">
                  <div className="row">
                    {_.map(users.users, (user) => {
                      const background = Math.floor(Math.random() * 7);
                      return (
                        <div className="col-md-4">
                          <div className="card">
                            <div className="m-b-20">
                              <div className="doctor-profile">
                                <div
                                  className={`profile-header bg-b-${colors[background]}`}
                                >
                                  <div className="user-name">{user.nome}</div>
                                  <div className="name-center">
                                    {user.dataNascimento}
                                  </div>
                                </div>
                                <img
                                  src="assets/img/user/usrbig1.jpg"
                                  className="user-img"
                                  alt=""
                                />
                                <p>{user.morada}</p>
                                <div>
                                  <p>
                                    <i className="fa fa-phone"></i>
                                    <a href={`tel:${user.telefone}`}>
                                      {user.telefone}
                                    </a>
                                  </p>
                                </div>
                                <div className="profile-userbuttons">
                                  <Link
                                    to={`/cliente/${user.id}`}
                                    className="btn btn-circle deepPink-bgcolor btn-sm"
                                  >
                                    Ver Ficha
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapState = (state) => ({
  users: state.users,
});

const mapDispatch = (dispatch) => ({
  getClientes: () => dispatch.users.loadClientes(),
});

export default connect(mapState, mapDispatch)(VerClientes);
