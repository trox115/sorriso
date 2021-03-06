/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import { FaceSharp } from '@material-ui/icons';
import AirlineSeatReclineExtraIcon from '@material-ui/icons/AirlineSeatReclineExtra';
import DateRangeIcon from '@material-ui/icons/DateRange';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import DescriptionIcon from '@material-ui/icons/Description';
import RoomServiceIcon from '@material-ui/icons/RoomService';
import MarkunreadMailboxIcon from '@material-ui/icons/MarkunreadMailbox';

export default function NavigationMenu() {
  return (
    <div className="sidebar-container">
      <div className="sidemenu-container navbar-collapse collapse fixed-menu">
        <div id="remove-scroll">
          <ul
            className="sidemenu page-header-fixed p-t-20"
            data-keep-expanded="false"
            data-auto-scroll="true"
            data-slide-speed="200"
          >
            <li className="sidebar-toggler-wrapper hide">
              <div className="sidebar-toggler">
                <span></span>
              </div>
            </li>
            <li className="sidebar-user-panel">
              <div className="user-panel">
                <div className="row">
                  <div className="sidebar-userpic">
                    <img src="/img/dp.jpg" className="img-responsive" alt="" />{' '}
                  </div>
                </div>
                <div className="profile-usertitle">
                  <div className="sidebar-userpic-name"> Christianne </div>
                  <div className="profile-usertitle-job"> Admin </div>
                </div>
                <div className="sidebar-userpic-btn">
                  <a
                    className="tooltips"
                    href="user_profile.html"
                    data-placement="top"
                    data-original-title="Profile"
                  >
                    <i className="material-icons">person_outline</i>
                  </a>
                  <a
                    className="tooltips"
                    href="email_inbox.html"
                    data-placement="top"
                    data-original-title="Mail"
                  >
                    <i className="material-icons">mail_outline</i>
                  </a>
                  <a
                    className="tooltips"
                    href="chat.html"
                    data-placement="top"
                    data-original-title="Chat"
                  >
                    <i className="material-icons">chat</i>
                  </a>
                  <a
                    className="tooltips"
                    href="login.html"
                    data-placement="top"
                    data-original-title="Logout"
                  >
                    <i className="material-icons">input</i>
                  </a>
                </div>
              </div>
            </li>
            <li className="menu-heading">
              <span>-- Menu</span>
            </li>
            <li className="nav-item">
              <a href="verClientes" className="nav-link nav-toggle">
                <FaceSharp
                  className="material-icons"
                  style={{ marginRight: '5px', marginBottom: '3px' }}
                />
                <span className="title">Clientes</span>
                <span className="arrow"></span>
              </a>
              <ul className="sub-menu">
                <li className="nav-item">
                  <a href="/novoCliente" className="nav-link ">
                    <span className="title">Novo</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/verClientes" className="nav-link">
                    <span className="title">Ver</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="/verStock" className="nav-link nav-toggle">
                <i className="material-icons">business_center</i>
                <span className="title">Stock</span>
                <span className="arrow"></span>
              </a>
              <ul className="sub-menu">
                <li className="nav-item">
                  <Link to="/listaDeStock" className="nav-link ">
                    <span className="title">Ver Stock</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <a href="view_booking.html" className="nav-link ">
                    <span className="title">Encomendar</span>
                  </a>
                </li>
                <li className="nav-item">
                  <Link to="/inserirMaterial" className="nav-link ">
                    <span className="title">Adicionar Material</span>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link nav-toggle">
                <DescriptionIcon
                  style={{ marginRight: '5px', marginBottom: '3px' }}
                />
                <span className="title">Documentos</span>
                <span className="arrow"></span>
              </a>
              <ul className="sub-menu">
                <li className="nav-item">
                  <Link to="/emitirDoc" className="nav-link">
                    <span className="title">Emitir Documentos</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <a href="/verDocumentos" className="nav-link ">
                    <span className="title">Ver Documentos</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link nav-toggle">
                <VideoLibraryIcon
                  style={{ marginRight: '5px', marginBottom: '3px' }}
                />
                <span className="title">Educação</span>
                <span className="arrow"></span>
              </a>
              <ul className="sub-menu">
                <li className="nav-item">
                  <a href="/listaDeVideos" className="nav-link">
                    <span className="title">Ver Vídeos</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/inserirVideo" className="nav-link">
                    <span className="title">Inserir Novo</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="/agenda" className="nav-link nav-toggle">
                <DateRangeIcon
                  style={{ marginRight: '5px', marginBottom: '3px' }}
                />
                <span className="title">Marcações</span>
                <span className="arrow"></span>
              </a>
              <ul className="sub-menu">
                <li className="nav-item">
                  <a href="/agenda" className="nav-link">
                    <span className="title">Agenda</span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link nav-toggle">
                <AirlineSeatReclineExtraIcon
                  style={{ marginRight: '5px', marginBottom: '3px' }}
                />
                <span className="title">Consultas</span>
                <span className="arrow"></span>
              </a>
              <ul className="sub-menu">
                <li className="nav-item">
                  <a href="/novaConsulta" className="nav-link">
                    <span className="title">Nova Consulta</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/avaliacao" className="nav-link">
                    <span className="title">Avaliação Inicial</span>
                  </a>
                </li>
                <li className="nav-item">
                  <Link to="/verConsultas" className="nav-link ">
                    <span className="title">Ver Consultas</span>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link nav-toggle">
                <RoomServiceIcon
                  style={{ marginRight: '5px', marginBottom: '3px' }}
                />
                <span className="title">Serviços</span>
                <span className="arrow"></span>
              </a>
              <ul className="sub-menu">
                <li className="nav-item">
                  <a href="/inserirServico" className="nav-link">
                    <span className="title">Novo Serviço</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/verServicos" className="nav-link ">
                    <span className="title">Ver Serviços</span>
                  </a>
                </li>
                <li className="nav-item">
                  <Link to="/inserirCategoria" className="nav-link ">
                    <span className="title">Inserir Categoria</span>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link nav-toggle">
                <MarkunreadMailboxIcon
                  style={{ marginRight: '5px', marginBottom: '3px' }}
                />
                <span className="title">Fornecedores</span>
                <span className="arrow"></span>
              </a>
              <ul className="sub-menu">
                <li className="nav-item">
                  <a href="/verAtividades" className="nav-link">
                    <span className="title">Adicionar Fornecedor</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="add_room.html" className="nav-link ">
                    <span className="title">Ver Fornecedores</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
