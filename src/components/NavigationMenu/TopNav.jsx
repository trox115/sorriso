/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect} from 'react';
import logo2 from '../../img/logo2.png';
import {useDispatch, useSelector } from 'react-redux'
import Autocomplete from '@material-ui/lab/Autocomplete';
import { TextField } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import './Nav.css';
export default function TopNav() {
  const dispatch = useDispatch();
  const history= useHistory();
  const { users } = useSelector(state => state.users)
  console.log(users);

  useEffect(() => {
    dispatch.users.loadClientes();
  }, [])

  const handleLogout = (e) => {
    dispatch.user.logOut();
  }

  return (
    <div className="page-header navbar navbar-fixed-top">
      <div className="page-header-inner ">
        <div className="page-logo">
          <a href="/">
            <img alt="" src={logo2} />
          </a>
        </div>
        <ul className="nav navbar-nav navbar-left in">
          <li>
            <a href="#" className="menu-toggler sidebar-toggler">
              <i className="icon-menu"></i>
            </a>
          </li>
        </ul>
        <form className="search-form-opened" style = {{border: 'none'}} action="#" method="GET">
            <Autocomplete
          options={users}
          getOptionLabel={(option) => option.nome}
          style={{ minWidth: 300,
            marginTop: -20,
            height: 50,
           }}
          onChange={(event, value) => history.push(`/cliente/${value?.id}`)}
          className="form-control"
          renderInput={(params) => (
            <TextField {...params} label="Pesquisa" variant="outlined" />
          )}
        />
        </form>

        <a
          href="javascript:;"
          className="menu-toggler responsive-toggler"
          data-toggle="collapse"
          data-target=".navbar-collapse"
        >
          <span></span>
        </a>
        <div className="top-menu">
          <ul className="nav navbar-nav pull-right">
            <li
              className="dropdown dropdown-extended dropdown-notification"
              id="header_notification_bar"
            >
              <a
                href="javascript:;"
                className="dropdown-toggle"
                data-toggle="dropdown"
                data-hover="dropdown"
                data-close-others="true"
              >
                <i className="fa fa-bell-o"></i>
                <span className="badge headerBadgeColor1"> 6 </span>
              </a>
              <ul className="dropdown-menu animated swing">
                <li className="external">
                  <h3>
                    <span className="bold">Notificações</span>
                  </h3>
                  <span className="notification-label purple-bgcolor">
                    6 Novas
                  </span>
                </li>
                <li>
                  <ul
                    className="dropdown-menu-list small-slimscroll-style"
                    data-handle-color="#637283"
                  >
                    <li>
                      <a href="javascript:;">
                        <span className="time">2 dias</span>
                        <span className="details">
                          <span className="notification-icon circle deepPink-bgcolor">
                            <i className="fa fa-check"></i>
                          </span>{' '}
                          Nova Compra!.{' '}
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:;">
                        <span className="time">3 mins</span>
                        <span className="details">
                          <span className="notification-icon circle purple-bgcolor">
                            <i className="fa fa-user o"></i>
                          </span>
                          <b>António Fernandes </b>Nova compra.{' '}
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:;">
                        <span className="time">7 mins</span>
                        <span className="details">
                          <span className="notification-icon circle blue-bgcolor">
                            <i className="fa fa-comments-o"></i>
                          </span>
                          <b>António </b>Enviou mensage.{' '}
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:;">
                        <span className="time">12 mins</span>
                        <span className="details">
                          <span className="notification-icon circle pink">
                            <i className="fa fa-heart"></i>
                          </span>
                          <b>Cristiano </b>faz check-in hoje.{' '}
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:;">
                        <span className="time">15 mins</span>
                        <span className="details">
                          <span className="notification-icon circle yellow">
                            <i className="fa fa-warning"></i>
                          </span>{' '}
                          Warning!{' '}
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:;">
                        <span className="time">10 hrs</span>
                        <span className="details">
                          <span className="notification-icon circle red">
                            <i className="fa fa-times"></i>
                          </span>{' '}
                          Application error.{' '}
                        </span>
                      </a>
                    </li>
                  </ul>
                  <div className="dropdown-menu-footer">
                    <a href="javascript:void(0)"> Todas as notificações </a>
                  </div>
                </li>
              </ul>
            </li>
            <li
              className="dropdown dropdown-extended dropdown-inbox"
              id="header_inbox_bar"
            >
              <a
                href="javascript:;"
                className="dropdown-toggle"
                data-toggle="dropdown"
                data-hover="dropdown"
                data-close-others="true"
              >
                <i className="fa fa-envelope-o"></i>
                <span className="badge headerBadgeColor2"> 2 </span>
              </a>
              <ul className="dropdown-menu animated slideInDown">
                <li className="external">
                  <h3>
                    <span className="bold">Mensages</span>
                  </h3>
                  <span className="notification-label cyan-bgcolor">
                    2 Novas
                  </span>
                </li>
                <li>
                  <ul
                    className="dropdown-menu-list small-slimscroll-style"
                    data-handle-color="#637283"
                  >
                    <li>
                      <a href="#">
                        <span className="photo">
                          <img
                            src="img/user/user2.jpg"
                            className="img-circle"
                            alt=""
                          />{' '}
                        </span>
                        <span className="subject">
                          <span className="from"> António </span>
                          <span className="time">Agora </span>
                        </span>
                        <span className="message"> Enviou mensage </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="photo">
                          <img
                            src="/img/user/user3.jpg"
                            className="img-circle"
                            alt=""
                          />{' '}
                        </span>
                        <span className="subject">
                          <span className="from"> António </span>
                          <span className="time">16 mins </span>
                        </span>
                        <span className="message">
                          {' '}
                          Fwd: Important Notice Regarding Your Domain Name...{' '}
                        </span>
                      </a>
                    </li>
                  </ul>
                  <div className="dropdown-menu-footer">
                    <a href="#"> Todas </a>
                  </div>
                </li>
              </ul>
            </li>
            <li className="dropdown dropdown-user">
              <a
                href="javascript:;"
                className="dropdown-toggle"
                data-toggle="dropdown"
                data-hover="dropdown"
                data-close-others="true"
              >
                <img alt="" className="img-circle " src="img/dp.jpg" />
                <span className="username username-hide-on-mobile">
                  {' '}
                  António{' '}
                </span>
                <i className="fa fa-angle-down"></i>
              </a>
              <ul className="dropdown-menu dropdown-menu-default animated jello">
                <li>
                  <a href="user_profile.html">
                    <i className="icon-user"></i> Perfil{' '}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icon-settings"></i> Definições
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icon-directions"></i> Ajuda
                  </a>
                </li>
                <li className="divider"> </li>
                <li>
                  <a href="lock_screen.html">
                    <i className="icon-lock"></i> Lock
                  </a>
                </li>
                <li>
                  <a onClick={handleLogout}>
                    <i className="icon-logout"></i> Log Out{' '}
                  </a>
                </li>
              </ul>
            </li>
            <li className="dropdown dropdown-quick-sidebar-toggler">
              <a
                id="headerSettingButton"
                className="mdl-button mdl-js-button mdl-button--icon pull-right"
                data-upgraded=",MaterialButton"
              >
                <i className="material-icons">Defenições</i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
