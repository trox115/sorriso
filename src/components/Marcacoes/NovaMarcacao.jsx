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
                  <label class="col-lg-3 col-md-4 control-label">Single Select
                                            </label>
                  <div class="col-lg-9 col-md-8">
                    <select class="form-control" id="selitemIcon">
                      <option value="">Select a country</option>
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
                    <label className="mdl-textfield__label" >Last Name</label>
                  </div>
                </div>
                <div className="col-lg-6 p-t-20">
                  <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                    <input className="mdl-textfield__input" type="email" id="txtemail" />
                    <label className="mdl-textfield__label" >Email</label>
                    <span className="mdl-textfield__error">Enter Valid Email Address!</span>
                  </div>
                </div>
                <div className="col-lg-6 p-t-20">
                  <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select getmdl-select__fix-height txt-full-width">
                    <input className="mdl-textfield__input" type="text" id="sample2" value="" readonly tabIndex="-1" />
                    <label for="sample2" className="pull-right margin-0">
                      <i className="mdl-icon-toggle__label material-icons">keyboard_arrow_down</i>
                    </label>
                    <label for="sample2" className="mdl-textfield__label">Gender</label>
                    <ul data-mdl-for="sample2" className="mdl-menu mdl-menu--bottom-left mdl-js-menu">
                      <li className="mdl-menu__item" data-val="DE">Male</li>
                      <li className="mdl-menu__item" data-val="BY">Female</li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6 p-t-20">
                  <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                    <input className="mdl-textfield__input" type="text"
                      pattern="-?[0-9]*(\.[0-9]+)?" id="text5" />
                    <label className="mdl-textfield__label" for="text5">Mobile Number</label>
                    <span className="mdl-textfield__error">Number required!</span>
                  </div>
                </div>
                <div className="col-lg-6 p-t-20">
                  <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                    <input className="mdl-textfield__input" type="text" id="txtCity" />
                    <label className="mdl-textfield__label" >City</label>
                  </div>
                </div>
                <div className="col-lg-6 p-t-20">
                  <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                    <input className="mdl-textfield__input" type="text" id="date" />
                    <label className="mdl-textfield__label" >Arrive</label>
                  </div>
                </div>
                <div className="col-lg-6 p-t-20">
                  <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                    <input className="mdl-textfield__input" type="text" id="date1" />
                    <label className="mdl-textfield__label" >Depart</label>
                  </div>
                </div>
                <div className="col-lg-6 p-t-20">
                  <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select getmdl-select__fix-height txt-full-width">
                    <input className="mdl-textfield__input" type="text" id="list2" value="" readonly tabIndex="-1" />
                    <label for="list2" className="pull-right margin-0">
                      <i className="mdl-icon-toggle__label material-icons">keyboard_arrow_down</i>
                    </label>
                    <label for="list2" className="mdl-textfield__label">No Of Persons</label>
                    <ul data-mdl-for="list2" className="mdl-menu mdl-menu--bottom-left mdl-js-menu">
                      <li className="mdl-menu__item" data-val="1">1</li>
                      <li className="mdl-menu__item" data-val="2">2</li>
                      <li className="mdl-menu__item" data-val="3">3</li>
                      <li className="mdl-menu__item" data-val="4">4</li>
                      <li className="mdl-menu__item" data-val="5">5</li>
                      <li className="mdl-menu__item" data-val="6">6</li>
                      <li className="mdl-menu__item" data-val="7">7</li>
                      <li className="mdl-menu__item" data-val="8">8</li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6 p-t-20">
                  <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label getmdl-select getmdl-select__fix-height txt-full-width">
                    <input className="mdl-textfield__input" type="text" id="list3" value="" readonly tabIndex="-1" />
                    <label for="list3" className="pull-right margin-0">
                      <i className="mdl-icon-toggle__label material-icons">keyboard_arrow_down</i>
                    </label>
                    <label for="list3" className="mdl-textfield__label">Room Type</label>
                    <ul data-mdl-for="list3" className="mdl-menu mdl-menu--bottom-left mdl-js-menu">
                      <li className="mdl-menu__item" data-val="1">Single</li>
                      <li className="mdl-menu__item" data-val="2">Double</li>
                      <li className="mdl-menu__item" data-val="3">Quad</li>
                      <li className="mdl-menu__item" data-val="4">King</li>
                      <li className="mdl-menu__item" data-val="5">Suite</li>
                      <li className="mdl-menu__item" data-val="6">Apartments</li>
                      <li className="mdl-menu__item" data-val="7">Villa</li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-12 p-t-20">
                  <div className="mdl-textfield mdl-js-textfield txt-full-width">
                    <textarea className="mdl-textfield__input" rows="4"
                      id="text7" ></textarea>
                    <label className="mdl-textfield__label" for="text7">Address</label>
                  </div>
                </div>
                <div className="col-lg-12 p-t-20">
                  <label className="control-label col-md-3">Upload Photo</label>
                  <form id="id_dropzone" className="dropzone">
                    <div className="dz-message">
                      <div className="dropIcon">
                        <i className="material-icons">cloud_upload</i>
                      </div>
                      <h3>Drop files here or click to upload.</h3>
                      <em>(This is just a demo. Selected files are <strong>not</strong>
                                            actually uploaded.)
                                        </em>
                    </div>
                  </form>
                </div>
                <div className="col-lg-12 p-t-20">
                  <div className="mdl-textfield mdl-js-textfield txt-full-width">
                    <textarea className="mdl-textfield__input" rows="4"
                      id="education" ></textarea>
                    <label className="mdl-textfield__label" for="text7">Comment</label>
                  </div>
                </div>
                <div className="col-lg-12 p-t-20 text-center">
                  <button type="button" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 m-r-20 btn-pink">Submit</button>
                  <button type="button" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 btn-default">Cancel</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
