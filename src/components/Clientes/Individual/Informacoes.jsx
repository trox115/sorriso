import React, { useRef, useEffect, useState, Suspense } from 'react';
import { connect } from 'react-redux';
import EditarCliente from './EditarCliente';
import Fatura from './Documentos/Fatura';
import ReactToPrint from 'react-to-print';
import _ from 'lodash';
import Table from '../../Consultas/TabelaConsultas';
import { useHistory } from 'react-router';
const Dentes = React.lazy(() => import('./Dentes'));
function Informacoes({
  users,
  getClientes,
  tratamentos,
  documentos,
  getOrcamentos,
  servicos,
  getServicos,
  ...props
}) {
  const inputEl = useRef(null);
  const [utilizador, setUtilizador] = useState();
  const [boca, setBoca] = useState(false);
  const [userOrc, setOrc] = useState();
  const [servico, setServico] = useState();
  useEffect(() => {
    if (_.isEmpty(users.users)) {
      getClientes();
    } else {
      const { id } = props.match.params;
      const index = _.findIndex(users.users, { id: parseInt(id, 10) });
      const user = users.users[index];
      setUtilizador(user);
    }

    if (_.isEmpty(documentos.orcamentos)) {
      getOrcamentos();
    } else {
      const filtered = _.filter(documentos.orcamentos, {
        cliente_id: utilizador?.id,
      });
      setOrc(filtered);
    }
    if (_.isEmpty(servicos.servicos)) {
      getServicos();
    } else if (utilizador && userOrc) {
      const filtered = _.filter(servicos.servicos, {
        id: userOrc[0].servico_id,
      });
      setServico(filtered);
    }
  }, [
    users,
    getClientes,
    utilizador,
    setUtilizador,
    documentos,
    getOrcamentos,
    servicos,
    getServicos,
  ]);

  return (
    <div className="page-content-wrapper">
      <div className="page-content">
        <div className="page-bar">
          <div className="page-title-breadcrumb">
            <div className=" pull-left">
              <div className="page-title">Tabs &amp; Accordions</div>
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
                  UI Elements
                </a>
                &nbsp;<i className="fa fa-angle-right"></i>
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
               
              </div>
              <div className="card-body " id="bar-parent">
                <div className="row">
                  <div className="col-md-2 col-sm-2 col-2">
                    <ul className="nav nav-tabs tabs-left">
                      <li className="nav-item">
                        <a href="#tab_6_1" data-toggle="tab" className="active">
                          {' '}
                          Informação Básica{' '}
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="#tab_6_2" data-toggle="tab">
                          {' '}
                          Consultas{' '}
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          href="#tab_6_3"
                          data-toggle="tab"
                          onClick={() => setBoca(!boca)}
                        >
                          {' '}
                          Estado{' '}
                        </a>
                      </li>
                      <li class="nav-item dropdown">
                        <a
                          href="javascript:;"
                          class="dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          {' '}
                          Documentos
                          <i class="fa fa-angle-down"></i>
                        </a>
                        <ul class="dropdown-menu" role="menu">
                          <li class="nav-item">
                            <a href="#tab_6_4" tabindex="-1" data-toggle="tab">
                              {' '}
                              Orçamentos{' '}
                            </a>
                          </li>
                          <li class="nav-item">
                            <a href="#tab_6_4" tabindex="-1" data-toggle="tab">
                              {' '}
                              Justificação{' '}
                            </a>
                          </li>
                          <li class="nav-item">
                            <a href="#tab_6_3" tabindex="-1" data-toggle="tab">
                              {' '}
                              RGPD{' '}
                            </a>
                          </li>
                          <li class="nav-item">
                            <a href="#tab_6_4" tabindex="-1" data-toggle="tab">
                              {' '}
                              Atestado{' '}
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="nav-item">
                        <a href="#tab_6_5" data-toggle="tab">
                          {' '}
                          Notas{' '}
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-9 col-sm-9 col-9">
                    <div className="tab-content">
                      <div className="tab-pane active" id="tab_6_1">
                        {utilizador && <EditarCliente user={utilizador} />}
                      </div>
                      <div className="tab-pane fade" id="tab_6_2">
                        <div className="table-scrollable">
                          <table
                            className="table table-hover table-checkable order-column full-width"
                            id="example4"
                          >
                            <thead>
                              <tr>
                                <th className="center"></th>
                                <th className="center"> Nome </th>
                                <th className="center"> Serviço </th>
                                <th className="center"> Data</th>
                                <th className="center"> Editar</th>
                              </tr>
                            </thead>
                            {utilizador && <Table id={utilizador} />}
                          </table>
                        </div>
                      </div>
                      <div className="tab-pane fade" id="tab_6_3"></div>
                      <Suspense fallback={<div> Loading </div>}>
                        {utilizador && boca && (
                          <Dentes cliente={utilizador.id} tratamento={null} />
                        )}
                      </Suspense>
                      <div className="tab-pane fade" id="tab_6_4">
                        <div className="text-right">
                          <button className="btn btn-danger" type="submit">
                            {' '}
                            Marcar como pago:{' '}
                          </button>
                          <ReactToPrint
                            trigger={() => (
                              <button
                                className="btn btn-default btn-outline"
                                type="button"
                              >
                                {' '}
                                <span>
                                  <i className="fa fa-print"></i> Imprimir
                                </span>{' '}
                              </button>
                            )}
                            content={() => inputEl.current}
                          />
                        </div>
                        <Suspense fallback={<div> Loading </div>}>
                          {/* <Fatura ref={inputEl} orcamento={userOrc} utilizador={utilizador} servico={servico}/> */}
                        </Suspense>
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
  );
}

const mapState = (state) => ({
  users: state.users,
  tratamentos: state.tratamentos,
  documentos: state.documentos,
  servicos: state.servicos,
});

const mapDispatch = (dispatch) => ({
  getClientes: () => dispatch.users.loadClientes(),
  getOrcamentos: () => dispatch.documentos.loadOrcamentos(),
  getServicos: () => dispatch.servicos.loadServicos(),
});

export default connect(mapState, mapDispatch)(Informacoes);
