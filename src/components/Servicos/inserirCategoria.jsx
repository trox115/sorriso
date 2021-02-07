import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';

function InserirCategoria({inserirCategorias}) {
  const [categoria, setCategoria ] = useState()

  const handleChange = (e) => {
    setCategoria(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    inserirCategorias({categoria})
  }
  return (
    <div className="page-content-wrapper">
      <div className="page-content">
        <div className="page-bar">
          <div className="page-title-breadcrumb">
            <div className=" pull-left">
              <div className="page-title">Serviços</div>
            </div>
            <ol className="breadcrumb page-breadcrumb pull-right">
              <li><i className="fa fa-home"></i>&nbsp;<a className="parent-item" href="index.html">Home</a>&nbsp;<i className="fa fa-angle-right"></i>
              </li>
              <li><a className="parent-item" href=""> Serviços</a>&nbsp;<i className="fa fa-angle-right"></i>
              </li>
              <li className="active">Inserir Categoria</li>
            </ol>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className="card-box">
              <div className="card-head">
                <header>Serviços</header>
                <button id="panel-button"
                  className="mdl-button mdl-js-button mdl-button--icon pull-right"
                  data-upgraded=",MaterialButton">
                  <i className="material-icons">more_vert</i>
                </button>
                <ul className="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect"
                  data-mdl-for="panel-button">
                  <li className="mdl-menu__item"><i className="material-icons">assistant_photo</i>Action</li>
                  <li className="mdl-menu__item"><i className="material-icons">print</i>Another action</li>
                  <li className="mdl-menu__item"><i className="material-icons">favorite</i>Something else here</li>
                </ul>
              </div>
              <div className="card-body row">
                <div className="col-lg-6 p-t-20">
                  <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                  <TextField label="Categoria de Serviço" onChange={handleChange} name='categoria' fullWidth value={categoria} />

                  </div>
                </div>
              </div>
              <div class="col-lg-12 p-t-20 text-center">
                <button type="button" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 m-r-20 btn-pink" onClick={handleSubmit}>Submeter</button>
                <button type="button" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 btn-default">Cancelar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapDispatch = dispatch =>({
  inserirCategorias: (obj) => dispatch.categorias.inserirCategoria(obj),
})

export default connect(null, mapDispatch)(InserirCategoria);