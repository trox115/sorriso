import React, { Component } from 'react'

export default class Fatura extends Component {
  render() {
    return (
      <div className="row">
      <div className="col-md-12">
        <div className="white-box">
          <h3><b>Orçamento</b> <span className="pull-right">#21-01-00001</span></h3>
          <hr />
          <div className="row">
            <div className="col-md-12">
              <div className="pull-left">
                <address>
                  <img src="assets/img/invoice_logo.png" alt="logo" className="logo-default" />
                  <p className="text-muted m-l-5">
                    Aditya Hotel, <br /> Opp. Town Hall, <br />
                      Sardar Patel Road, <br /> Ahmedabad - 380015
												</p>
                </address>
              </div>
              <div className="pull-right text-right">
                <address>
                  <p className="addr-font-h3">Para,</p>
                  <p className="font-bold addr-font-h4">Jayesh Patel</p>
                  <p className="text-muted m-l-30">
                    207, Prem Sagar Appt., <br /> Near Income Tax Office, <br />
                            Ashram Road, <br /> Ahmedabad - 380057
												</p>
                  <p className="m-t-30">
                    <b>Data:</b> <i className="fa fa-calendar"></i> 14th
													July 2017
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
                      <th className="text-center">Serviço</th>
                      <th className="text-right">Quantia</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-center">1</td>
                      <td className="text-center">2016-11-19</td>
                      <td className="text-center">Destartarização</td>
                      <td className="text-center">$100</td>
                      <td className="text-center">6%</td>
                      <td className="text-center">Urgência</td>
                      <td className="text-right">106€</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col-md-12">
              <div className="pull-right m-t-30 text-right">
                <p>Sub - Total : 100€</p>
                <p>Desconto : 10€ </p>
                <p>Tax (10%) : 6€ </p>
                <hr />
                <h3><b>Total :</b> 94€</h3> </div>
              <div className="clearfix"></div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}
