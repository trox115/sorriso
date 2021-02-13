import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SubHeader from '../SubHeader/SubHeader';
import _ from 'lodash';

function VerServicos({ getCategorias, getServicos }) {
  const { servicos } = useSelector((state) => state.servicos);
  const { categorias } = useSelector((state) => state.categorias);
  const dispatch = useDispatch();
  useEffect(() => {
    if (_.isEmpty(servicos)) {
      dispatch.servicos.loadServicos();
    }

    if (_.isEmpty(categorias)) {
      dispatch.categorias.loadCategorias();
    }
  }, [servicos, categorias, dispatch.servicos, dispatch.categorias]);

  return (
    <div className="page-content-wrapper">
      <SubHeader title="Serviços" />
      <div className="page-content">
        <div className="row">
          <div className="col-sm-12 col-md-9 col-lg-9">
            <div className="card card-box">
              <div className="card-head">
                <header>Lista de Servicos</header>
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
                        <th className="center"> Nome </th>
                        <th className="center"> Categoria </th>
                        <th className="center"> Custo </th>
                        <th className="center"> Editar</th>
                      </tr>
                    </thead>
                    <tbody>
                      {_.map(servicos, (servico, index) => {
                        const categoria = _.find(categorias.categorias, {
                          id: servico.categoria_id,
                        });
                        return (
                          <tr className="odd gradeX" key={index}>
                            <td className="user-circle-img">
                              <img src="assets/img/user/user1.jpg" alt="" />
                            </td>
                            <td className="center">{servico?.nome}</td>
                            <td className="center">{categoria?.nome}</td>
                            <td className="center">{servico?.custo} €</td>
                            <td className="center">
                              <a
                                href="edit_booking.html"
                                className="btn btn-tbl-edit btn-xs"
                              >
                                <i className="fa fa-pencil"></i>
                              </a>
                              <button className="btn btn-tbl-delete btn-xs">
                                <i className="fa fa-trash-o "></i>
                              </button>
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

export default VerServicos;
