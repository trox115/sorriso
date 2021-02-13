import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import SubHeader from '../SubHeader/SubHeader';
import _ from 'lodash';
import { connect, useDispatch, useSelector } from 'react-redux';
import Dentes from '../Dentes/Dentes';

function NovaConsulta({
  produtos,
  getProdutos,
  servicos,
  getServicos,
  categorias,
  getCategorias,
  editarProdutos,
  inserirConsulta,
}) {
  const [numEq, addEquipamento] = useState([]);
  const [value2, setValue2] = useState({});
  const [value1, setValue1] = useState([]);
  const [image, setImage] = useState();
  const [cliente, setCliente] = useState();
  const [tratamento, setTratamento] = useState();
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.users);
  useEffect(() => {
    dispatch.users.loadClientes();
    getProdutos();
    getServicos();
    getCategorias();
  }, [dispatch.users, getCategorias, getProdutos, getServicos]);

  const maisMaterial = () => {
    const newMaterial = numEq;
    newMaterial.push(1);
    addEquipamento([...newMaterial]);
  };

  const handleChange = (e) => {
    setValue2({ ...value2, [e.target.name]: e.target.value });
  };

  const imageChange = (e) => {
    setImage({ image: e.target.files[0] });
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
    const formData = new FormData();
    formData.append('cliente_id', cliente.id);
    formData.append('servico_id', 1);
    if (image?.image) {
      formData.append('image', image.image);
    }
    dispatch.consultas.inserirConsulta(formData);
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
          <div className="col-sm-12 col-md-12 col-lg-12">
            <div className="card card-box">
              <div className="card-head">
                <header>Nova Consulta</header>
              </div>
              <div className="card-body" style={{ display: 'flex' }}>
                <div className="col-lg-6 p-t-20">
                  {users && (
                    <Autocomplete
                      id="combo-box-demo"
                      options={users}
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
                  <div className="col-lg-12 p-t-20">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                      <Autocomplete
                        id="grouped-demo"
                        options={options.sort(
                          (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
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
                <div className="col-sm-12 col-md-6 col-lg-6">
                  {cliente && (
                    <Dentes cliente={cliente.id} servico={tratamento} />
                  )}
                </div>
                <div class="col-lg-12 p-t-20 text-center">
                  <button
                    type="button"
                    className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 m-r-20 btn-pink"
                  >
                    Gravar
                  </button>
                  <button
                    type="button"
                    className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 btn-default"
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
                    <input
                      accept="image/*"
                      id="contained-button-file"
                      multiple
                      type="file"
                    />
                  </label>
                </div>
              </div>
            </div>
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
