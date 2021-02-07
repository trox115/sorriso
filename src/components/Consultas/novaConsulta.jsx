import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Autocomplete from '@material-ui/lab/Autocomplete';
import SubHeader from '../SubHeader/SubHeader';
import _ from 'lodash';
import { connect } from 'react-redux';
import Dentes from '../Dentes/Dentes';

function NovaConsulta({
  users,
  produtos,
  getClientes,
  getProdutos,
  servicos,
  getServicos,
  categorias,
  getCategorias,
  editarProdutos,
  inserirConsulta,
}) {
  const [numEq, addEquipamento] = useState([]);
  const newMaterial = [];
  const [value2, setValue2] = useState({});
  const [materialUsado, setUsado] = useState({});
  const [value1, setValue1] = useState([]);
  const [cliente, setCliente] = useState();
  const [tratamento, setTratamento] = useState();

  useEffect(() => {
    getClientes();
    getProdutos();
    getServicos();
    getCategorias();
  }, []);
  const maisMaterial = () => {
    const newMaterial = numEq;
    newMaterial.push(1);
    addEquipamento([...newMaterial]);
  };

  const handleChange = (e) => {
    setValue2({ ...value2, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = {};
    _.map(Object.values(value2), (numero, idx, i, a) => {
      obj[value1[idx]] = numero;
    });
    for (const n in obj) {
      const p = _.find(produtos.produtos, { id: parseInt(n, 10) });
      const payload = {
        id: parseInt(n, 10),
        quantidade: p?.quantidade - parseInt(obj[n], 10),
      };
      editarProdutos(payload);
    }
    console.log(cliente, tratamento);
    inserirConsulta({ cliente_id: cliente.id, servico_id: tratamento.id });
  };

  let options = [];

  if (servicos.servicos && categorias.categorias) {
    options = _.map(servicos.servicos, (option) => {
      const firstLetter = option.nome[0].toUpperCase();
      const cat = _.find(categorias.categorias, { id: option.categoria_id });
      return {
        firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
        categoria: cat?.nome,
        ...option,
      };
    });
  }

  return (
    <div className="page-content-wrapper">
      <SubHeader title="Serviços" />
      <div className="page-content">
        <div className="row">
          <div className="col-sm-6 col-md-6 col-lg-6">
            <div className="card card-box">
              <div className="card-head">
                <header>Nova Consulta</header>
                <div className="tools">
                  <a
                    className="fa fa-repeat btn-color box-refresh"
                    href="javascript:;"
                  ></a>
                  <a
                    className="t-collapse btn-color fa fa-chevron-down"
                    href="javascript:;"
                  ></a>
                  <a
                    className="t-close btn-color fa fa-times"
                    href="javascript:;"
                  ></a>
                </div>
              </div>
              <div className="card-body ">
                {users.users && (
                  <Autocomplete
                    id="combo-box-demo"
                    options={users.users}
                    onChange={(event, value) => setCliente(value)}
                    onClick={() => setCliente()}
                    getOptionLabel={(option) => option.nome}
                    style={{ minWidth: 300 }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Cliente"
                        variant="outlined"
                      />
                    )}
                  />
                )}

                <div className="card-body row">
                  {produtos &&
                    _.map(numEq, (num, index) => {
                      return (
                        <>
                          <div className="col-lg-6 p-t-20" key={index}>
                            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                              <Autocomplete
                                id={index}
                                options={produtos.produtos}
                                getOptionLabel={(option) => option.nome}
                                onChange={(event, value) =>
                                  setValue1([...value1, value.id])
                                }
                                onFocus
                                style={{ minWidth: 300 }}
                                renderInput={(params) => (
                                  <TextField
                                    {...params}
                                    label="Equipamento"
                                    variant="outlined"
                                  />
                                )}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 p-t-20 col-md-6">
                            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                              <TextField
                                id="standard-basic"
                                type="number"
                                fullWidth
                                label="Número utilizado"
                                name={`material-${index}`}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                        </>
                      );
                    })}
                  <div className="card-body row">
                    <div className="col-lg-12 p-t-20">
                      <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                        <Autocomplete
                          id="grouped-demo"
                          options={options.sort(
                            (a, b) =>
                              -b.firstLetter.localeCompare(a.firstLetter)
                          )}
                          groupBy={(option) => option.categoria}
                          fullWidth
                          onChange={(event, value) => setTratamento(value)}
                          getOptionLabel={(option) => option.nome}
                          style={{ minwidth: 300 }}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              label="Tratamento"
                              variant="outlined"
                            />
                          )}
                        />
                      </div>
                      <div className="mdl-textfield mdl-js-textfield txt-full-width">
                        <textarea
                          className="mdl-textfield__input"
                          rows="4"
                          id="education"
                        ></textarea>
                        <label className="mdl-textfield__label" for="text7">
                          Observações
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-12 p-t-20 text-center">
                    <button
                      type="button"
                      className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 m-r-20 btn-pink"
                      onClick={handleSubmit}
                    >
                      Gravar
                    </button>
                    <button
                      type="button"
                      className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 btn-default"
                      onClick={maisMaterial}
                    >
                      Mais Material
                    </button>
                    <input
                      accept="image/*"
                      style={{ display: 'none' }}
                      id="raised-button-file"
                      multiple
                      type="file"
                    />
                    <label htmlFor="raised-button-file">
                      <Button variant="raised" component="span">
                        Imagens
                      </Button>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 p-t-20">
            {cliente && (
              <Dentes tratamento={tratamento} cliente={cliente?.id} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const mapState = (state) => ({
  users: state.users,
  produtos: state.produtos,
  servicos: state.servicos,
  categorias: state.categorias,
});

const mapDispatch = (dispatch) => ({
  getClientes: () => dispatch.users.loadClientes(),
  getProdutos: () => dispatch.produtos.loadProdutos(),
  getServicos: () => dispatch.servicos.loadServicos(),
  getCategorias: () => dispatch.categorias.loadCategorias(),
  editarProdutos: (obj) => dispatch.produtos.editarProdutos(obj),
  inserirConsulta: (obj) => dispatch.consultas.inserirConsulta(obj),
});

export default connect(mapState, mapDispatch)(NovaConsulta);
