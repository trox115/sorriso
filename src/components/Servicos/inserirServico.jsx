/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { ToastContainer, toast } from 'react-toastify';

import { SaveButton } from '../Botoes/Botoes';

function InserirServico() {
  const [servico, setServico] = useState({
    nome: '',
    categoria: '',
    custo: '',
  });
  const dispatch = useDispatch();
  const { categorias } = useSelector(state => state.categorias)
  useEffect(() => {
    dispatch.categorias.loadCategorias();

  }, [dispatch.categorias]);

  const handleChange = (e) => {
    e.preventDefault();
    setServico({ ...servico, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch.servicos.inserirServico(servico);
    toast.success('Servico inserido com sucesso', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  setServico({...servico, nome: ''});
};
  return (
    <div className="page-content-wrapper">
      <div className="page-content">
        <div className="page-bar">
          <div className="page-title-breadcrumb">
            <div className=" pull-left">
              <div className="page-title">Serviços</div>
            </div>
            <ToastContainer />
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
                  Serviços
                </a>
                &nbsp;<i className="fa fa-angle-right"></i>
              </li>
              <li className="active">Inserir Serviços</li>
            </ol>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className="card-box">
              <div className="card-head">
                <header>Serviços</header>
              </div>
              <div className="card-body row">
                <div className="col-lg-6 p-t-20">
                  <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                    <TextField
                      label="Nome do Serviço"
                      onChange={handleChange}
                      name="nome"
                      fullWidth
                      value={servico.nome}
                    />
                  </div>
                </div>
                <div className="col-lg-3 p-t-20">
                  <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                    <Autocomplete
                      id="combo-box-demo"
                      name="categoria"
                      onChange={(event, value) =>
                        setServico({ ...servico, categoria: value.id })
                      }
                      options={categorias ? categorias : null}
                      getOptionLabel={(option) => option.nome}
                      style={{ minWidth: 300 }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          name="categoria"
                          label="Categoria"
                          variant="outlined"
                        />
                      )}
                    />{' '}
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
                      value={servico.custo}
                    />
                  </div>
                </div>
                <div class="col-lg-12 p-t-20 text-center">
                  <SaveButton onClick={handleSubmit} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default (InserirServico);
