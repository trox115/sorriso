import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import logo2 from '../../../img/logo2.png';
import SubHeader from '../../SubHeader/SubHeader';
import _ from 'lodash';
import ReactToPdf from 'react-to-pdf';

export default function Orcamento() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { orcamento } = useSelector((state) => state.documentos);
  const { itens, cliente } = orcamento;
  useEffect(() => {
    dispatch.documentos.getOrcamentoId({ id: parseInt(id, 10) });
  }, [dispatch, id]);
  const ref = React.createRef();

  return (
    <div className='page-content-wrapper'>
      <SubHeader title='Consultas' />
      <div className='page-content'>
        <div className='row'>
          <div className='col-sm-12 col-md-12 col-lg-12'>
            <div className='card card-box'>
              <div className='card-head'>
                <header>Orçamento</header>
              </div>
              <ReactToPdf targetRef={ref} filename='div-blue.pdf'>
                {({ toPdf }) => <button onClick={toPdf}>Imprimir</button>}
              </ReactToPdf>
              <div className='card-body '>
                <div className='row'>
                  <div className='col-md-12' ref={ref}>
                    <div className='white-box'>
                      <h3>
                        <b>Orçamento</b>
                        <b className='pull-right'>{`${moment().format('YYYYMMDD')}-${
                          cliente?.id
                        }`}</b>
                      </h3>
                      <hr />
                      <div className='row'>
                        <div className='col-md-12'>
                          <div className='pull-left'>
                            <address>
                              <img src={logo2} alt='logo' className='logo-default' />
                              <p className='text-muted m-l-5'>
                                Design do Sorriso, <br /> Avenida Dr. Urze Pires, N.º 18, <br />
                                Loja 6 5340-263 <br /> Macedo de Cavaleiros
                              </p>
                            </address>
                          </div>
                          <div className='pull-right text-right'>
                            <address>
                              <p className='addr-font-h3'>Para,</p>
                              <p className='font-bold addr-font-h4'>{cliente?.nome}</p>
                              <p className='text-muted m-l-30'>
                                {cliente?.morada}, <br /> {cliente?.telefone} <br />
                              </p>
                              <p className='m-t-30'>
                                <b>Data:</b> <i className='fa fa-calendar'></i>{' '}
                                {moment().format('yyyy/MM/DD')}
                              </p>
                            </address>
                          </div>
                        </div>
                        <div className='col-md-12'>
                          <div className='table-responsive m-t-40'>
                            <table className='table table-hover'>
                              <thead>
                                <tr>
                                  <th className='text-center'>#</th>
                                  <th className='text-center'>Serviço</th>
                                  <th className='text-center'>Local</th>
                                  <th className='text-center'>Custo</th>
                                </tr>
                              </thead>
                              <tbody>
                                {_.map(itens, (item, index) => {
                                  return (
                                    <tr key={index}>
                                      <td className='text-center'>{index}</td>
                                      <td className='text-center'>{item.servico}</td>
                                      <td className='text-center'>{item.dente} </td>
                                      <td className='text-center'>{item.custo} €</td>
                                    </tr>
                                  );
                                })}
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div className='col-md-12'>
                          <div className='pull-right m-t-30 text-right'>
                            <hr />
                            <h3>
                              <b>Total :</b> {orcamento.total}€
                            </h3>{' '}
                          </div>
                          <div className='clearfix'></div>
                          <hr />
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
