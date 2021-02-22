import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import SubHeader from '../SubHeader/SubHeader';
import { useDispatch, useSelector } from 'react-redux';
import Dentes from './Dentes';

function AvaliacaoInicial() {
  const [cliente, setCliente] = useState();
  const [estado, setEstado] = useState();
  const dispatch = useDispatch();
  const { dentes } = useSelector((state) => state.dentes);
  const { users } = useSelector((state) => state.users);
  useEffect(() => {
    dispatch.users.loadClientes();
    dispatch.dentes.loadDentes();
  }, [dispatch.dentes, dispatch.users]);

  return (
    <div className="page-content-wrapper">
      <SubHeader title="Serviços" />
      <div className="page-content">
        <div className="row">
          <div className="col-sm-6 col-md-6 col-lg-6">
            <div className="card card-box">
              <div className="card-head">
                <header>Nova Consulta</header>
              </div>
              <div className="card-body ">
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

                <div className="card-body row">
                  <div className="card-body row">
                    <div className="col-lg-12 p-t-20">
                      <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                        <Autocomplete
                          options={['Cariado', 'Tratado', 'Não Existente']}
                          getOptionLabel={(option) => option}
                          onChange={(event, value) => setEstado(value)}
                          onFocus
                          style={{ minWidth: 300 }}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              label="Estado"
                              variant="outlined"
                            />
                          )}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 p-t-20">
            {cliente && (
              <Dentes estado={estado} dentes={dentes} cliente={cliente?.id} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AvaliacaoInicial;
