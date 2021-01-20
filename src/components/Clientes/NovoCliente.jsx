import React from 'react'

export default function NovoCliente() {
  return (
    <div className="page-content-wrapper">
      <div className="page-content">
        <div className="page-bar">
          <div className="page-title-breadcrumb">
            <div className=" pull-left">
              <div className="page-title">Adicionar Novo Cliente</div>
            </div>
            <ol className="breadcrumb page-breadcrumb pull-right">
              <li><i className="fa fa-home"></i>&nbsp;<a className="parent-item" href="index.html">Home</a>&nbsp;<i className="fa fa-angle-right"></i>
              </li>
              <li><a className="parent-item" href=""> Clientes</a>&nbsp;<i className="fa fa-angle-right"></i>
              </li>
              <li className="active">Novo Cliente</li>
            </ol>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className="card-box">
              <div className="card-head">
                <header>Informação Básica</header>
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
                    <input className="mdl-textfield__input" type="text" id="txtFirstName" />
                    <label className="mdl-textfield__label">Nome</label>
                  </div>
                </div>
                <div className="col-lg-6 p-t-20">
                  <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                    <input className="mdl-textfield__input" type="text" id="txtLasttName" />
                    <label className="mdl-textfield__label" >BI</label>
                  </div>
                </div>
                <div className="col-lg-6 p-t-20">
                  <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                    <input className="mdl-textfield__input" type="text" id="date" />
                    <label className="mdl-textfield__label" >NIF</label>
                  </div>
                </div>
                <div className="col-lg-6 p-t-20">
                  <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                    <input className="mdl-textfield__input" type="email" id="txtemail" />
                    <label className="mdl-textfield__label" >Email</label>
                    <span className="mdl-textfield__error">Introduza um email válido!</span>
                  </div>
                </div>
                
                <div className="col-lg-6 p-t-20">
                  <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                    <input className="mdl-textfield__input" type="text" id="designation" />
                    <label className="mdl-textfield__label" >Designation</label>
                  </div>
                </div>
                <div className="col-lg-6 p-t-20">
                  <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select getmdl-select__fix-height txt-full-width">
                    <input className="mdl-textfield__input" type="text" id="sample2" value="" readonly tabIndex="-1" />
                    <label for="sample2" className="pull-right margin-0">
                      <i className="mdl-icon-toggle__label material-icons">keyboard_arrow_down</i>
                    </label>
                    <label for="sample2" className="mdl-textfield__label">Número de policia?</label>
                    <ul data-mdl-for="sample2" className="mdl-menu mdl-menu--bottom-left mdl-js-menu">
                      <li className="mdl-menu__item" value='true' data-val="DE">Sim</li>
                      <li className="mdl-menu__item" value='false' data-val="BY">Não</li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6 p-t-20">
                  <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                    <input className="mdl-textfield__input" type="text"
                      pattern="-?[0-9]*(\.[0-9]+)?" id="text5" />
                    <label className="mdl-textfield__label" for="text5">Telemóvel</label>
                    <span className="mdl-textfield__error">Número Obrigatório!</span>
                  </div>
                </div>
                <div className="col-lg-6 p-t-20">
                  <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                    <input className="mdl-textfield__input" type="text" id="dateOfBirth" />
                    <label className="mdl-textfield__label" >Data de Nascimento</label>
                  </div>
                </div>
                <div className="col-lg-12 p-t-20">
                  <div className="mdl-textfield mdl-js-textfield txt-full-width">
                    <textarea className="mdl-textfield__input" rows="4"
                      id="text7" ></textarea>
                    <label className="mdl-textfield__label" for="text7">Morada</label>
                  </div>
                </div>
                <div className="col-lg-12 p-t-20">
                  <div class="mdl-textfield mdl-js-textfield txt-full-width">
                    <textarea class="mdl-textfield__input" rows="4"
                      id="education" ></textarea>
                    <label class="mdl-textfield__label" for="text7">Observações</label>
                  </div>
                </div>
                <div class="col-lg-12 p-t-20 text-center">
                  <button type="button" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 m-r-20 btn-pink">Submeter</button>
                  <button type="button" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 btn-default">Cancelar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
