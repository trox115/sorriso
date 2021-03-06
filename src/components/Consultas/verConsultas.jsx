import React from 'react';
import SubHeader from '../SubHeader/SubHeader';
import Tabela from './TabelaConsultas';

function VerConsultas() {
  return (
    <div className="page-content-wrapper">
      <SubHeader title="Consultas" />
      <div className="page-content">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <div className="card card-box">
              <div className="card-head">
                <header>Lista de consultas</header>
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
                        <th className="center"> Data</th>
                        <th className="center"> Número de Serviços </th>
                        <th className="center"> Custo </th>
                        <th className="center"> Status</th>
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
