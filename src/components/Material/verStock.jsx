/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { useDispatch, useSelector } from 'react-redux';

function VerStock() {
  const { produtos } = useSelector((state) => state.produtos);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch.produtos.loadProdutos();
  }, [dispatch.produtos]);

  return (
    <div className="page-content-wrapper">
      <div className="page-content">
        <div className="page-bar">
          <div className="page-title-breadcrumb">
            <div className=" pull-left">
              <div className="page-title">Lista de Stock</div>
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
                  Apps
                </a>
                &nbsp;<i className="fa fa-angle-right"></i>
              </li>
              <li className="active">Lista de Stock</li>
            </ol>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-9 col-lg-9">
            <div className="card card-box">
              <div className="card-head">
                <header>Lista de Stock</header>
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
                        <th className="center"> Quantidade </th>
                        <th className="center"> Custo </th>
                        <th className="center"> Editar</th>
                      </tr>
                    </thead>
                    <tbody>
                      {_.map(produtos, (produto, index) => {
                        return (
                          <tr className="odd gradeX" key={index}>
                            <td className="user-circle-img">
                              <img src="assets/img/user/user1.jpg" alt="" />
                            </td>
                            <td className="center">{produto.nome}</td>
                            <td className="center">
                              {produto.quantidade} unidades
                            </td>
                            <td className="center">{produto.custo} €</td>
                            <td className="center">
                              <Link
                                to={`/produto/${produto.id}`}
                                className="btn btn-tbl-edit btn-xs"
                              >
                                <i className="fa fa-pencil"></i>
                              </Link>
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

export default VerStock;
