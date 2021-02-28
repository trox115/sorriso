import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import SubHeader from '../SubHeader/SubHeader';
import { useHistory } from 'react-router-dom';
import _ from 'lodash';
import { connect, useDispatch, useSelector } from 'react-redux';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import Dentes from '../Dentes/Dentes';
import './novaConsulta.css';
import { SaveButton } from '../Botoes/Botoes';
function NovaConsulta({
  produtos,
  getProdutos,
  servicos,
  getServicos,
  categorias,
  getCategorias,
}) {
  const [numEq, addEquipamento] = useState([]);
  const [value2, setValue2] = useState({});
  const [value1, setValue1] = useState([]);
  const [image, setImage] = useState();
  const [obs, setObs] = useState('');
  const [cliente, setCliente] = useState();
  const [tratamento, setTratamento] = useState();
  const [bocaToda, setBocaToda] = useState(false);
  const dispatch = useDispatch();
  const {denteSelecionado, dentes} = useSelector(state => state.dentes)
  const { users } = useSelector((state) => state.users);
  const history = useHistory();
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

  const handleBocaToda = (e) => {
    e.preventDefault();
    setBocaToda(!bocaToda)
  }

  const handleObs = (e) => {
    setObs(e.target.value);
  }

  const handleChange = (e) => {
    setValue2({ ...value2, [e.target.name]: e.target.value });
  };

  const imageChange = (e) => {
    setImage({ image: e.target.files[0] });
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

  const savebocaToda = async (e) => {
    e.preventDefault();
    await dispatch.consultas.inserirBocaToda({cliente_id:cliente.id, servico_id: tratamento.id, obs:obs})
    history.push('verConsultas')
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
                  <div className="col-lg-12 p-t-20">
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
                  </div>

                  {produtos &&
                    _.map(numEq, (num, index) => {
                      return (
                        <>
                          <div className="col-lg-12 p-t-20" key={index}>
                            <div className="text-container">
                              <Autocomplete
                                id={index}
                                options={produtos.produtos}
                                getOptionLabel={(option) => option.nome}
                                onChange={(event, value) =>
                                  setValue1([...value1, value.id])
                                }
                                style={{ width: '50%' }}
                                renderInput={(params) => (
                                  <TextField
                                    {...params}
                                    label="Equipamento"
                                    variant="outlined"
                                  />
                                )}
                              />

                              <TextField
                                id="standard-basic"
                                type="number"
                                fullWidth
                                style={{ width: '25%' }}
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
                       <FormControlLabel
        control={<Checkbox checked={bocaToda} onChange={handleBocaToda} name="checkedA" />}
        label="O tratamento não tem dente específico"
      />
                    </div>
                    <div className="mdl-textfield mdl-js-textfield txt-full-width">
                    <TextField
          id="outlined-multiline-static"
          label="Observações"
          multiline
          onChange={handleObs}
          rows={4}
          fullWidth
          variant="outlined"
        />
                    </div>
                    <div class="col-lg-12 p-t-20 text-center">
                      <button
                        type="button"
                        className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 btn-default"
                        onClick={maisMaterial}
                      >
                        Mais Material
                      </button>
                      <label htmlFor="raised-button-file">
                        <input
                          accept="image/*"
                          id="contained-button-file"
                          multiple
                          type="file"
                          onChange={imageChange}
                        />
                      </label>
                    </div>
                  </div>
                  {denteSelecionado && (<div class="col-lg-12 p-t-20 text-center">
                    SERVIÇOS SELECIONADOS
                    <table
                    className="table table-hover table-checkable order-column full-width"
                    id="example4"
                  >
                    <thead>
                      <tr>
                        <th className="center"></th>
                        <th className="center"> Dente </th>
                        <th className="center"> Serviço </th>
                        <th className="center"> Obs</th>
                          </tr>
                        </thead>
                        <tbody>
                          {_.map(denteSelecionado, (dente, index) => {
                            const observacoes = obs.split('\n')
                            const indexDente = _.findIndex(dentes, {id: dente.id})
                            const indexServico = _.findIndex(servicos.servicos, {id: dente.servico})
                            return (
                              <tr className="odd gradeX" key={index}>
                            <td className="user-circle-img">
                              <img src="assets/img/user/user1.jpg" alt="" />
                            </td>
                            <td className="center">{dentes[indexDente].nome}</td>
                            <td className="center">{servicos.servicos[indexServico].nome}
                            </td>
                            <td className="center">{observacoes[index]}
                            </td>
                          </tr>);
                          })}
                        </tbody>

                    </table>
                  </div>)}
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                  {cliente && tratamento && !bocaToda &&(
                    <Dentes
                      cliente={cliente.id}
                      servico={tratamento}
                      image={image}
                      value1={value1}
                      value2={value2}
                      obs= {obs}
                    />
                  )}

                  {bocaToda && 
                  <SaveButton onClick={savebocaToda} />
                  }
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
