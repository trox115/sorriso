import React from 'react'

export default function EditarCliente() {
  return (
    <>
      <div className="card-box">
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
    </>
  )
}
