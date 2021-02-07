import React from 'react';
import SubHeader from '../SubHeader/SubHeader';
import Tabela from './TabelaConsultas';

function VerConsultas() {
  return (
    <div className="page-content-wrapper">
      <SubHeader title="Consultas" />
      <div className="page-content">
        <div className="row">
          <div className="col-sm-12 col-md-9 col-lg-9">
            <div className="card card-box">
              <div className="card-head">
                <header>Lista de consultas</header>
                <div className="tools">
                  <a
                    className="fa fa-repeat btn-color box-refresh"
                    href="javascript:;"
                  ></a>
                  <a
                    className="t-collapse btn-color fa fa-chevron-down"
                    href="javascript:;"
                  ></a>
                  <a
                    className="t-close btn-color fa fa-times"
                    href="javascript:;"
                  ></a>
                </div>
              </div>
              <div className="card-body ">
                <div className="table-scrollable">
                  <table
                    className="table table-hover table-checkable order-column full-width"
                    id="example4"
                  >
                    <thead>
                      <tr>
                        <th className="center"></th>
                        <th className="center"> Paciente </th>
                        <th className="center"> Serviço </th>
                        <th className="center"> Data</th>
                        <th className="center"> Editar</th>
                      </tr>
                    </thead>
                    <Tabela id="All" />
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerConsultas;
