/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef, useEffect, useState, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactToPrint from 'react-to-print';
import _ from 'lodash';
import { useRouteMatch } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import Table from '../../Consultas/TabelaConsultas';
import EditarCliente from './EditarCliente';
import { DeleteButton } from '../../Botoes/Botoes';
const Dentes = React.lazy(() => import('./Dentes'));

function Informacoes() {
  const inputEl = useRef(null);
  const [boca, setBoca] = useState(false);
  const [treatTooth, setTreatTooth] = useState([]);
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    cliente,
    cliente: { tratamentos },
  } = useSelector((state) => state.users);
  const { dentes } = useSelector((state) => state.dentes);
  const match = useRouteMatch();

  useEffect(() => {
    const loadCliente = async () => {
      await dispatch.users.getUserInfo({ id: match.params.id });
      await dispatch.dentes.loadDentes();
    };
    loadCliente();
    return () => {
      dispatch.users.deleteUserInfo({});
    }
  }, [dispatch.dentes, dispatch.users, match.params.id]);

  useEffect(() => {
    function findDentCoords(id) {
      const index = _.findIndex(dentes, { id });
      if (index >= 0) {
        return dentes[index].coords;
      }
    }

    const setTreated = async () => {
      const novosDentes = await tratamentos.map((v, i) => ({
        id: i,
        preFillColor:
          v.estado === 'bom'
            ? 'green'
            : v.estado === 'inexistente'
            ? 'black'
            : 'red',
        lineWidth: 1,
        coords: findDentCoords(v.dente_id),
        shape: 'poly',
      }));
      setTreatTooth(novosDentes);
    };

    if (
      _.isEmpty(treatTooth) &&
      !_.isEmpty(tratamentos) &&
      !_.isEmpty(dentes)
    ) {
      setTreated();
    }
  }, [tratamentos, dentes, setTreatTooth, treatTooth, cliente]);

  const handleDestroy = async (e) => {
    e.preventDefault();
    await dispatch.users.eliminarCliente({ id: match.params.id })
    history.push('/verClientes');
  }

  return (
    <div className="page-content-wrapper">
      <div className="page-content">
        <div className="page-bar">
          <div className="page-title-breadcrumb">
            <div className=" pull-left">
              <div className="page-title">{cliente.nome}</div>
            </div>
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
                      <li className="nav-item">
                        <DeleteButton onClick = {handleDestroy}/>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-9 col-sm-9 col-9">
                    <div className="tab-content">
                      <div className="tab-pane active" id="tab_6_1">
                        {cliente.cliente && (
                          <EditarCliente user={cliente.cliente} />
                        )}
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
                                <th className="center"> Data </th>
                                <th className="center"> Número de Serviços</th>
                                <th className="center"> Total </th>
                                <th className="center"> Status </th>
                              </tr>
                            </thead>
                            {cliente.cliente && <Table id={cliente.cliente} />}
                          </table>
                        </div>
                        {cliente.divida > 0 && (
                          <div className="alert alert-danger">
                            <strong>Total em dívida:</strong>{' '}
                            {cliente.divida.toFixed(2)} €.
                          </div>
                        )}
                      </div>
                      <div className="tab-pane fade" id="tab_6_3"></div>
                      <Suspense fallback={<div> Loading </div>}>
                        {boca && !_.isEmpty(treatTooth) && (
                          <Dentes dentes={treatTooth} />
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

export default Informacoes;
