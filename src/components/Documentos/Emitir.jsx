/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { TextField } from '@material-ui/core';
import _ from 'lodash';
import SubHeader from '../SubHeader/SubHeader';
import RGPD from './RGPD';
import Dentes from './Dentes';
import Justificacao from './Justificacao';

function Emitir() {
  const [cliente, setCliente] = useState();
  const [tratamento, setTratamento] = useState();
  const [tipo, setTipo] = useState({ nome: '' });
  const dispatch = useDispatch();
  const [allSet, setallSet] = useState(false)
  const { users } = useSelector((state) => state.users);
  const { categorias } = useSelector((state) => state.categorias);
  const { servicos } = useSelector((state) => state.servicos);
  const { docCategoria } = useSelector((state) => state.documentos);
  const [inicio, setinicio] = useState();
  const [fim, setfim] = useState();
  useEffect(() => {
    dispatch.users.loadClientes();
    dispatch.dentes.loadDentes();
    dispatch.documentos.loadDocCategorias();
    dispatch.servicos.loadServicos();
    dispatch.categorias.loadCategorias();
  }, [
    dispatch.categorias,
    dispatch.dentes,
    dispatch.documentos,
    dispatch.servicos,
    dispatch.users,
  ]);

  let options = [];

  if (servicos && categorias) {
    options = _.map(servicos, (option) => {
      const firstLetter = option.nome[0].toUpperCase();
      const cat = _.find(categorias, { id: option.categoria_id });
      return {
        firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
        categoria: cat?.nome,
        ...option,
      };
    });
  }
  console.log(tipo);
  return (
    <div className='page-content-wrapper'>
      <SubHeader title='Serviços' />
      <div className='page-content'>
        <div className='row'>
          <div className='col-sm-12 col-md-12 col-lg-12'>
            <div className='card card-box'>
              <div className='card-head'>
                <header>Novo Orçamento</header>
              </div>
              <div className='card-body' style={{ display: 'flex' }}>
                <div className='col-lg-6 p-t-20'>
                  <div className='col-lg-12 p-t-20'>
                    <Autocomplete
                      id='combo-box-demo'
                      options={users}
                      onChange={(event, value) => setCliente(value)}
                      onClick={() => setCliente()}
                      getOptionLabel={(option) => option.nome}
                      style={{ minWidth: 300 }}
                      renderInput={(params) => (
                        <TextField {...params} label='Cliente' variant='outlined' />
                      )}
                    />

                    {docCategoria && (
                      <Autocomplete
                        id='combo-box-demo'
                        options={docCategoria}
                        onChange={(event, value) => setTipo(value)}
                        onClick={() => setTipo({ nome: '' })}
                        getOptionLabel={(option) => option.nome}
                        style={{ minWidth: 300 }}
                        renderInput={(params) => (
                          <TextField {...params} label='Tipo de Documento' variant='outlined' />
                        )}
                      />
                    )}
                  </div>
                {tipo.nome === 'Justificação'&& (  <div className='col-lg-12 p-t-20'>
                  <TextField
                    id='datetime-local'
                    label='Inicio'
                    onChange={(event,value) => setinicio(event.target.value)}
                    type='datetime-local'
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  <TextField
                    id='datetime-local'
                    label='Fim'
                    onChange={(event,value) => setfim(event.target.value)}
                    type='datetime-local'
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  <br />
                  <button
          type='button'
          className='mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 m-r-20 btn-pink'
          onClick={ () => setallSet(true)}
        >
          Emitir
        </button>
                  </div>)}
                  {tipo.nome === 'Orçamento' && (
                    <div className='col-lg-12 p-t-20'>
                      <div className='mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width'>
                        <Autocomplete
                          id='grouped-demo'
                          options={options.sort(
                            (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
                          )}
                          groupBy={(option) => option.categoria}
                          fullWidth
                          onChange={(event, value) => setTratamento(value)}
                          getOptionLabel={(option) => option.nome}
                          style={{ minwidth: 300 }}
                          renderInput={(params) => (
                            <TextField {...params} label='Tratamento' variant='outlined' />
                          )}
                        />
                      </div>
                      <div className='mdl-textfield mdl-js-textfield txt-full-width'>
                        <textarea
                          className='mdl-textfield__input'
                          rows='4'
                          id='education'
                        ></textarea>
                        <label className='mdl-textfield__label' for='text7'>
                          Observações
                        </label>
                      </div>
                      <div class='col-lg-12 p-t-20 text-center'></div>
                    </div>
                  )}
                </div>
                <div className='col-sm-12 col-md-6 col-lg-6' style={{ minHeight: '500px' }}>
                  {cliente && tipo.nome === 'Orçamento' && (
                    <Dentes cliente={cliente.id} servico={tratamento} />
                  )}
                  {tipo.nome === 'RGPD' && <RGPD cliente={cliente.nome} />}
                  {allSet && (
                    <Justificacao cliente={cliente.nome} inicio={inicio} fim={fim} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Emitir;
