/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import _ from 'lodash';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

import SubHeader from '../SubHeader/SubHeader';
import { SaveButton } from '../Botoes/Botoes';
function InserirMaterial({ inserirProduto }) {
  const [novoProduto, setProduto] = useState({
    nome: '',
    quantidade: '',
    custo: '',
  });

  const [newProduto, setNew] = useState(novoProduto);
  useEffect(() => {
    if (!_.isEqual(newProduto, novoProduto)) {
      setProduto(newProduto);
    }
  }, [newProduto, novoProduto, setProduto]);

  const handleChange = (event) => {
    setNew({ ...newProduto, [event.target.name]: event.target.value });
  };

  const handleClick = async (event) => {
    event.preventDefault();
    await inserirProduto(novoProduto);
    toast.success('Produto inserido com sucesso', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    setNew({...newProduto, nome:''});
  };

  return (
    <div className="page-content-wrapper">
      <SubHeader title="Serviços" />
      <ToastContainer />

      <div className="page-content">
        <div className="page-bar">
          <div className="page-title-breadcrumb">
            <div className=" pull-left">
              <div className="page-title">Stock</div>
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
                <a className="parent-item" href="/">
                  Material
                </a>
                &nbsp;<i className="fa fa-angle-right"></i>
              </li>
              <li className="active">Inserir Material</li>
            </ol>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className="card-box">
              <div className="card-head">
                <header>Material</header>
              </div>
              <div className="card-body row">
                <div className="col-lg-6 p-t-20">
                  <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                    <TextField
                      label="Nome do Produto"
                      onChange={handleChange}
                      name="nome"
                      fullWidth
                      value={novoProduto.nome}
                    />
                  </div>
                </div>
                <div className="col-lg-3 p-t-20">
                  <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                    <TextField
                      label="Quantidade/ unidades"
                      onChange={handleChange}
                      name="quantidade"
                      type="number"
                      fullWidth
                      value={novoProduto.quantidade}
                    />
                  </div>
                </div>

                <div className="col-lg-3 p-t-20">
                  <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                    <TextField
                      label="Custo/Total"
                      onChange={handleChange}
                      name="custo"
                      type="number"
                      fullWidth
                      value={novoProduto.custo}
                    />
                  </div>
                </div>
                <div class="col-lg-12 p-t-20 text-center">
                <SaveButton onClick={handleClick} />

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapDispatch = (dispatch) => ({
  inserirProduto: (obj) => dispatch.produtos.inserirProduto(obj),
});

export default connect(null, mapDispatch)(InserirMaterial);
