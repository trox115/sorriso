/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { TextField } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import SubHeader from '../SubHeader/SubHeader';

function Educacao() {
  const [state, setstate] = useState({ nome: '', link: '' });
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (e) => {
    e.preventDefault();
    setstate({ ...state, [e.target.name]: e.target.value });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    await dispatch.videos.inserirVideo(state);
    history.push('listaDeVideos');
  };

  return (
    <div className="page-content-wrapper">
      <SubHeader title="Serviços" />
      <div className="page-content">
        <div className="page-bar">
          <div className="page-title-breadcrumb">
            <div className=" pull-left">
              <div className="page-title">Stock</div>
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
                  Videos
                </a>
                &nbsp;<i className="fa fa-angle-right"></i>
              </li>
              <li className="active">Inserir Videos</li>
            </ol>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className="card-box">
              <div className="card-head">
                <header>Material</header>
                <button
                  id="panel-button"
                  className="mdl-button mdl-js-button mdl-button--icon pull-right"
                  data-upgraded=",MaterialButton"
                >
                  <i className="material-icons">more_vert</i>
                </button>
                <ul
                  className="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect"
                  data-mdl-for="panel-button"
                >
                  <li className="mdl-menu__item">
                    <i className="material-icons">assistant_photo</i>Action
                  </li>
                  <li className="mdl-menu__item">
                    <i className="material-icons">print</i>Another action
                  </li>
                  <li className="mdl-menu__item">
                    <i className="material-icons">favorite</i>Something else
                    here
                  </li>
                </ul>
              </div>
              <div className="card-body row">
                <div className="col-lg-6 p-t-20">
                  <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                    <TextField
                      label="Nome do Vídeo"
                      onChange={handleChange}
                      name="nome"
                      fullWidth
                      value={state.nome}
                    />
                  </div>
                </div>
                <div className="col-lg-3 p-t-20">
                  <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                    <TextField
                      label="Link"
                      onChange={handleChange}
                      name="link"
                      type="text"
                      fullWidth
                      value={state.link}
                    />
                  </div>
                </div>
                <div class="col-lg-12 p-t-20 text-center">
                  <button
                    type="button"
                    className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 m-r-20 btn-pink"
                    onClick={handleClick}
                  >
                    Submeter
                  </button>
                  <button
                    type="button"
                    className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 btn-default"
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Educacao;
