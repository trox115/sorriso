import React, { useState,useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Autocomplete from '@material-ui/lab/Autocomplete';
import SubHeader from '../SubHeader/SubHeader';
import _ from 'lodash';

export default function NovaConsulta() {
  const [value, setValue] = useState(equipamento[0]);
  const [value2, setValue2] = useState(equipamento[1]);
  const [numEq, addEquipamento] = useState([])
  const newMaterial = []
  useEffect(() => {
    if(!_.isEqual(newMaterial,numEq) ){
      
      console.log(numEq)
    }
    
  }, [newMaterial,newMaterial,numEq, addEquipamento])

  const maisMaterial = () => {
    const newMaterial = numEq;
    newMaterial.push(1)
    addEquipamento([...newMaterial])
  }

  return (
    <div className='page-content-wrapper'>
      <SubHeader title='Serviços' />
      <div className='page-content'>
        <div className='row'>
          <div className='col-sm-12 col-md-12 col-lg-12'>
            <div className='card card-box'>
              <div className='card-head'>
                <header>Nova Consulta</header>
                <div className='tools'>
                  <a className='fa fa-repeat btn-color box-refresh' href='javascript:;'></a>
                  <a className='t-collapse btn-color fa fa-chevron-down' href='javascript:;'></a>
                  <a className='t-close btn-color fa fa-times' href='javascript:;'></a>
                </div>
              </div>
              <div className='card-body '>
                <Autocomplete
                  id="combo-box-demo"
                  options={top100Films}
                  getOptionLabel={(option) => option.nome}
                  style={{ minWidth: 300 }}
                  renderInput={(params) => <TextField {...params} label="Cliente" variant="outlined" />}
                />

                <div className="card-body row">
                  <div className="col-lg-6 p-t-20">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                      <Autocomplete
                        value={value}
                        id="combo-box-demo"
                        options={equipamento}
                        getOptionLabel={(option) => option.nome}
                        style={{ minWidth: 300 }}
                        renderInput={(params) => <TextField {...params} label="Equipamento" variant="outlined" />}
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 p-t-20">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                      <TextField id="standard-basic" type='number' label="Número" />

                    </div>
                  </div>
                  <div className="col-lg-6 p-t-20">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                      <Autocomplete
                        value={value2}
                        id="combo-box-demo"
                        options={equipamento}
                        getOptionLabel={(option) => option.nome}
                        style={{ minWidth: 300 }}
                        renderInput={(params) => <TextField {...params} label="Equipamento" variant="outlined" />}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 p-t-20">
                    <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                      <TextField id="standard-basic" type='number' label="Número" />

                    </div>
                  </div>

                  {
                    _.map(numEq, (equipamento) => {
                      return (
                        <div className="card-body row">
                          <div className="col-lg-6 p-t-20">
                            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                              <Autocomplete
                                id="combo-box-demo"
                                options={equipamento}
                                getOptionLabel={(option) => option.nome}
                                style={{ minWidth: 300 }}
                                renderInput={(params) => <TextField {...params} label="Equipamento" variant="outlined" />}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 p-t-20">
                            <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label txt-full-width">
                              <TextField id="standard-basic" type='number' label="Número" />

                            </div>
                          </div>
                        </div>
                      )
                    })
                  }
              <div class="col-lg-12 p-t-20 text-center">
                  <button type="button" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 m-r-20 btn-pink">Gravar</button>
                  <button type="button" className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect m-b-10 btn-default" onClick={maisMaterial}>Mais Material</button>
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
        </div>
      </div>
    </div>
  )
}

const top100Films = [
  { nome: 'António Fernandes' },
  {
    nome: 'Maria Carminda'

  },
]

const equipamento = [
  { nome: 'Luvas' },
  {
    nome: 'Máscara'

  },
]