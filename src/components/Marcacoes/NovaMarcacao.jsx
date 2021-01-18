/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

export default function NovaMarcacao() {
  return (
    <div className="page-content-wrapper">
      <div className="page-content">
        <div className="page-bar">
          <div className="page-title-breadcrumb">
            <div className=" pull-left">
              <div className="page-title">Adicionar Marcação</div>
            </div>
            <ol className="breadcrumb page-breadcrumb pull-right">
              <li><i className="fa fa-home"></i>&nbsp;<a className="parent-item" href="index.html">Home</a>&nbsp;<i className="fa fa-angle-right"></i>
              </li>
              <li><a className="parent-item" href="">Marcações</a>&nbsp;<i className="fa fa-angle-right"></i>
              </li>
              <li className="active">Nova Marcação</li>
            </ol>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className="card-box">
              <div className="card-head">
                <header>Adicionar nova Marcação</header>
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
                  <label className="col-lg-3 col-md-4 control-label">Cliente Já existente?
                                            </label>
                  <div className="col-lg-9 col-md-8">
                    <select className="form-control " id="selitemIcon">
                      <option value="">Selecione</option>
                      <option value="AF">Afghanistan</option>
                      <option value="AX">Åland Islands</option>
                      <option value="AL">Albania</option>
                      <option value="DZ">Algeria</option>
                      <option value="AS">American Samoa</option>
                      <option value="AD">Andorra</option>
                      <option value="AO">Angola</option>
                      <option value="AI">Anguilla</option>

                    </select>
                  </div>
                </div>
                <div className="col-lg-6 p-t-20">
                  <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                    <input className="mdl-textfield__input" type="text" id="txtLasttName" />
                    <label className="mdl-textfield__label" >Nome</label>
                  </div>
                </div>
                <div className="col-lg-6 p-t-20">
                  <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                    <input className="mdl-textfield__input" type="email" id="txtemail" />
                    <label className="mdl-textfield__label" >Email</label>
                    <span className="mdl-textfield__error">Introduza um endereço válido</span>
                  </div>
                </div>
                
                <div className="col-lg-6 p-t-20">
                  <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                    <input className="mdl-textfield__input" type="text"
                      pattern="-?[0-9]*(\.[0-9]+)?" id="text5" />
                    <label className="mdl-textfield__label" for="text5">Nif</label>
                    <span className="mdl-textfield__error">Número Obrigatório</span>
                  </div>
                </div>
                <div className="col-lg-6 p-t-20">
                  <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                    <input className="mdl-textfield__input" type="text"
                      pattern="-?[0-9]*(\.[0-9]+)?" id="text5" />
                    <label className="mdl-textfield__label" for="text5">BI/CC</label>
                    <span className="mdl-textfield__error">Número Obrigatório</span>
                  </div>
                </div>
                <div className="col-lg-6 p-t-20">
                  <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                    <input className="mdl-textfield__input" type="text" id="txtCity" />
                    <label className="mdl-textfield__label" >Cidade</label>
                  </div>
                </div>
                <div className="col-lg-6 p-t-20">
                  <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                    <input className="mdl-textfield__input" type="text" id="date" />
                    <label className="mdl-textfield__label" >Data</label>
                  </div>
                  
                </div>

                <div className="col-lg-6 p-t-20">
                <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                <input type="text" id="time" class="mdl-textfield__input" />
                <label className="mdl-textfield__label" >Hora</label>

                </div>
                </div>
          
                <div className="col-lg-12 p-t-20">
                  <div className="mdl-textfield mdl-js-textfield txt-full-width">
                    <textarea className="mdl-textfield__input" rows="4"
                      id="education" ></textarea>
                    <label className="mdl-textfield__label" for="text7">Observações</label>
                  </div>
                </div>
                <div className="col-lg-12 p-t-20 text-center">
                  <button type="button" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 m-r-20 btn-pink">Gravar</button>
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
