import React, { useRef } from 'react'
import EditarCliente from './EditarCliente';
import Fatura from './Documentos/Fatura';
import ReactToPrint from "react-to-print";


export default function Informacoes() {
  const inputEl = useRef(null);

  return (
    <div className="page-content-wrapper">
      <div className="page-content">
        <div className="page-bar">
          <div className="page-title-breadcrumb">
            <div className=" pull-left">
              <div className="page-title">Tabs &amp; Accordions</div>
            </div>
            <ol className="breadcrumb page-breadcrumb pull-right">
              <li><i className="fa fa-home"></i>&nbsp;<a className="parent-item" href="index.html">Home</a>&nbsp;<i className="fa fa-angle-right"></i>
              </li>
              <li><a className="parent-item" href="">UI Elements</a>&nbsp;<i className="fa fa-angle-right"></i>
              </li>
              <li className="active">Tabs &amp; Accordions</li>
            </ol>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <div className="card card-box">
              <div className="card-head">
                <header>Ficha Cliente</header>
                <div className="tools">
                  <a className="fa fa-repeat btn-color box-refresh" href="javascript:;"></a>
                  <a className="t-collapse btn-color fa fa-chevron-down" href="javascript:;"></a>
                  <a className="t-close btn-color fa fa-times" href="javascript:;"></a>
                </div>
              </div>
              <div className="card-body " id="bar-parent">
                <div className="row">
                  <div className="col-md-2 col-sm-2 col-2">
                    <ul className="nav nav-tabs tabs-left">
                      <li className="nav-item">
                        <a href="#tab_6_1" data-toggle="tab" className="active"> Informação Básica </a>
                      </li>
                      <li className="nav-item">
                        <a href="#tab_6_2" data-toggle="tab"> Consultas </a>
                      </li>
                      <li className="nav-item">
                        <a href="#tab_6_1" data-toggle="tab"> Estado </a>
                      </li>
                      <li class="nav-item dropdown">
                        <a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown"> Documentos
                                                            <i class="fa fa-angle-down"></i>
                        </a>
                        <ul class="dropdown-menu" role="menu">
                          <li class="nav-item">
                            <a href="#tab_6_3" tabindex="-1" data-toggle="tab"> Orçamentos </a>
                          </li>
                          <li class="nav-item">
                            <a href="#tab_6_4" tabindex="-1" data-toggle="tab"> Justificação </a>
                          </li>
                          <li class="nav-item">
                            <a href="#tab_6_3" tabindex="-1" data-toggle="tab"> RGPD </a>
                          </li>
                          <li class="nav-item">
                            <a href="#tab_6_4" tabindex="-1" data-toggle="tab"> Atestado </a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a href="#tab_6_4" data-toggle="tab"> Notas </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-9 col-sm-9 col-9">
                    <div className="tab-content">
                      <div className="tab-pane active" id="tab_6_1">
                        <EditarCliente />
                      </div>
                      <div className="tab-pane fade" id="tab_6_2">
                        <p>Doming conclusionemque sed ex, invenire ocurreret dissentiet his no. Ius cu novum assueverit, eam ex dolor molestiae theophrastus. Ex sed alii dolorum, et vis impetus expetendis dissentiunt. Vim ad soluta admodum tibique, inermis salutandi at mei, mutat nominati eos id. Id aeque iudico sit, eros adolescens est te.</p>
                      </div>
                      <div className="tab-pane fade" id="tab_6_3">
                        <p>Most of its text is made up from sections 1.10.32–3 of Cicero's De finibus bonorum et malorum (On the Boundaries of Goods and Evils; finibus may also be translated as purposes).</p>
                      </div>
                      <div className="tab-pane fade" id="tab_6_4">
                        <div className="text-right">
                          <button className="btn btn-danger" type="submit"> Marcar como pago: </button>
                          <ReactToPrint
                            trigger={() => <button className="btn btn-default btn-outline" type="button"> <span><i className="fa fa-print"></i> Imprimir</span> </button>}
                            content={() => inputEl.current}
                          />

                        </div>
                        <Fatura ref={inputEl} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
