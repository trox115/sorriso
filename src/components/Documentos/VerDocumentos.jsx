/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import SubHeader from '../SubHeader/SubHeader';

export default function VerDocumentos() {
  const dispatch = useDispatch();
  const { orcamentos } = useSelector((state) => state.documentos);

  useEffect(() => {
    dispatch.documentos.loadOrcamentos();
  }, [dispatch.documentos]);

  return (
    <div className='page-content-wrapper'>
      <SubHeader title='Consultas' />
      <div className='page-content'>
        <div className='row'>
          <div className='col-sm-12 col-md-12 col-lg-12'>
            <div className='card card-box'>
              <div className='card-head'>
                <header>Lista de Documentos</header>
              </div>
              <div className='card-body '>
                <div className='table-scrollable'>
                  <table
                    className='table table-hover table-checkable order-column full-width'
                    id='example4'
                  >
                    <thead>
                      <tr>
                        <th className='center'></th>
                        <th className='center'> Documento </th>
                        <th className='center'> Cliente </th>
                        <th className='center'> Data </th>
                      </tr>
                    </thead>
                    <tbody>
                      {_.map(orcamentos, (orcamento, index) => {
                        return (
                          <tr className='odd gradeX' key={index}>
                            <td className='user-circle-img'>
                              <img src='assets/img/user/user1.jpg' alt='' />
                            </td>
                            <td className='center'>
                              <Link
                                to={{
                                  pathname: `/orcamento/${orcamento.id}`,
                                  query: { orçamento: orcamento },
                                }}
                              >
                                Orçamento{' '}
                              </Link>
                            </td>
                            <td className='center'>
                              <Link to={`orcamento/${orcamento.id}`}>
                                {orcamento.cliente.nome}{' '}
                              </Link>
                            </td>
                            <td className='center'>
                              <Link to={`orcamento/${orcamento.id}`}>
                                {moment(orcamento.data).format('YYYY-MM-DD')}{' '}
                              </Link>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
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
