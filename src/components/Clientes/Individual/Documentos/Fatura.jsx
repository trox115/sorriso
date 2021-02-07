import React, { Component } from 'react';
import logo2 from '../../../../img/logo2.png';
import moment from 'moment';
export default class Fatura extends Component {
  render() {
    const { orcamento, utilizador, servico } = this.props;
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="white-box">
            <h3>
              <b>Orçamento</b> <span className="pull-right">#21-01-00001</span>
            </h3>
            <hr />
            <div className="row">
              <div className="col-md-12">
                <div className="pull-left">
                  <address>
                    <img src={logo2} alt="logo" className="logo-default" />
                    <p className="text-muted m-l-5">
                      Design do Sorriso, <br /> Avenida Dr. Urze Pires, N.º 18,{' '}
                      <br />
                      Loja 6 5340-263 <br /> Macedo de Cavaleiros
                    </p>
                  </address>
                </div>
                <div className="pull-right text-right">
                  <address>
                    <p className="addr-font-h3">Para,</p>
                    <p className="font-bold addr-font-h4">{utilizador?.nome}</p>
                    <p className="text-muted m-l-30">
                      {utilizador?.morada}, <br /> {utilizador?.telefone} <br />
                    </p>
                    <p className="m-t-30">
                      <b>Data:</b> <i className="fa fa-calendar"></i>{' '}
                      {moment().format('yyyy/MM/DD')}
                    </p>
                  </address>
                </div>
              </div>
              <div className="col-md-12">
                <div className="table-responsive m-t-40">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th className="text-center">#</th>
                        <th className="text-center">Data</th>
                        <th className="text-center">Descrição</th>
                        <th className="text-center">Charges</th>
                        <th className="text-center">IVA</th>
                        <th className="text-right">Quantia</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="text-center">1</td>
                        <td className="text-center">
                          {moment().format('yyyy/MM/DD')}
                        </td>
                        {/* <td className="text-center">{servico[0]?.nome}</td>
                      <td className="text-center">{parseInt(servico[0]?.custo, 10) * 0.94} €</td>
                      <td className="text-center">{parseInt(servico[0]?.custo, 10) * 0.06} €</td>
                      <td className="text-right">{parseInt(servico[0]?.custo)}</td> */}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col-md-12">
                <div className="pull-right m-t-30 text-right">
                  <p>Sub - Total : 96€</p>
                  <p>Taxa (6%) : {parseInt(servico[0]?.custo, 10) * 0.6}</p>
                  <hr />
                  <h3>
                    <b>Total :</b> 100€
                  </h3>{' '}
                </div>
                <div className="clearfix"></div>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
