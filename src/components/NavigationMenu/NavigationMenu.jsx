import React from 'react'
import { Link } from 'react-router-dom';

export default function NavigationMenu() {
  return (
    <div className='sidebar-container'>
      <div className='sidemenu-container navbar-collapse collapse fixed-menu'>
        <div id='remove-scroll'>
          <ul
            className='sidemenu page-header-fixed p-t-20'
            data-keep-expanded='false'
            data-auto-scroll='true'
            data-slide-speed='200'
          >
            <li className='sidebar-toggler-wrapper hide'>
              <div className='sidebar-toggler'>
                <span></span>
              </div>
            </li>
            <li className='sidebar-user-panel'>
              <div className='user-panel'>
                <div className='row'>
                  <div className='sidebar-userpic'>
                    <img src='assets/img/dp.jpg' className='img-responsive' alt='' />{' '}
                  </div>
                </div>
                <div className='profile-usertitle'>
                  <div className='sidebar-userpic-name'> Christianne </div>
                  <div className='profile-usertitle-job'> Admin </div>
                </div>
                <div className='sidebar-userpic-btn'>
                  <a
                    className='tooltips'
                    href='user_profile.html'
                    data-placement='top'
                    data-original-title='Profile'
                  >
                    <i className='material-icons'>person_outline</i>
                  </a>
                  <a
                    className='tooltips'
                    href='email_inbox.html'
                    data-placement='top'
                    data-original-title='Mail'
                  >
                    <i className='material-icons'>mail_outline</i>
                  </a>
                  <a
                    className='tooltips'
                    href='chat.html'
                    data-placement='top'
                    data-original-title='Chat'
                  >
                    <i className='material-icons'>chat</i>
                  </a>
                  <a
                    className='tooltips'
                    href='login.html'
                    data-placement='top'
                    data-original-title='Logout'
                  >
                    <i className='material-icons'>input</i>
                  </a>
                </div>
              </div>
            </li>
            <li className='menu-heading'>
              <span>-- Menu</span>
            </li>
            <li className='nav-item'>
              <a href='#' className='nav-link nav-toggle'>
                <i className='material-icons'>email</i>
                <span className='title'>Clientes</span>
                <span className='arrow'></span>
              </a>
              <ul className='sub-menu'>
                <li className='nav-item'>
                  <a href='email_inbox.html' className='nav-link '>
                    <span className='title'>Novo</span>
                  </a>
                </li>
                <li className='nav-item'>
                  <a href='/verClientes' className='nav-link'>
                    <span className='title'>Ver</span>
                    </a>
                </li>
              </ul>
            </li>
            <li className='nav-item'>
              <a href='#' className='nav-link nav-toggle'>
                <i className='material-icons'>business_center</i>
                <span className='title'>Stock</span>
                <span className='arrow'></span>
              </a>
              <ul className='sub-menu'>
                <li className='nav-item'>
                  <a href='new_booking.html' className='nav-link '>
                    <span className='title'>Ver Stock</span>
                  </a>
                </li>
                <li className='nav-item'>
                  <a href='view_booking.html' className='nav-link '>
                    <span className='title'>Encomendar</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className='nav-item'>
              <a href='#' className='nav-link nav-toggle'>
                <i className='material-icons'>vpn_key</i>
                <span className='title'>Documentos</span>
                <span className='arrow'></span>
              </a>
              <ul className='sub-menu'>
                <li className='nav-item'>
                <a href='/verCasas' className='nav-link'>
                    <span className='title'>Emitir Documentos</span>
                    </a>
                </li>
                <li className='nav-item'>
                  <a href='/novaCasa' className='nav-link '>
                    <span className='title'>Ver Documentos</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className='nav-item'>
              <a href='#' className='nav-link nav-toggle'>
                <i className='material-icons'>gift</i>
                <span className='title'>Educação</span>
                <span className='arrow'></span>
              </a>
              <ul className='sub-menu'>
              <li className='nav-item'>
                <a href='/verEncomendas' className='nav-link'>
                    <span className='title'>Ver Vídeos</span>
                  </a>
                </li>
                <li className='nav-item'>
                <a href='/verEncomendas' className='nav-link'>
                    <span className='title'>Inserir Novo</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className='nav-item'>
              <a href='#' className='nav-link nav-toggle'>
                <i className='material-icons'>gift</i>
                <span className='title'>Marcações</span>
                <span className='arrow'></span>
              </a>
              <ul className='sub-menu'>
                <li className='nav-item'>
                <a href='/verAtividades' className='nav-link'>
                    <span className='title'>Nova Marcação</span>
                  </a>
                </li>
                <li className='nav-item'>
                  <a href='add_room.html' className='nav-link '>
                    <span className='title'>Ver marcações</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
