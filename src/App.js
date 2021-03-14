/* eslint-disable react-hooks/exhaustive-deps */

import axios from 'axios';
import {useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';

import NovoCliente from './components/Clientes/NovoCliente';
import VerClientes from './components/Clientes/VerClientes';
import Informacoes from './components/Clientes/Individual/Informacoes';
import InserirMaterial from './components/Material/InserirMaterial';
import ListaDeStock from './components/Material/verStock';
import verServicos from './components/Servicos/verServicos';
import inserirServico from './components/Servicos/inserirServico';
import novaConsulta from './components/Consultas/novaConsulta';
import EditarMaterial from './components/Material/EditarMaterial';
import inserirCategoria from './components/Servicos/inserirCategoria';
import verConsultas from './components/Consultas/verConsultas';
import DashBoard from './components/DashBoard/Dashboard';
import Loading from './components/Loading/Loading';
import Emitir from './components/Documentos/Emitir';
import Agenda2 from './components/Marcacoes/Agenda2';
import Detalhes from './components/Consultas/DetalhesConsula';
import Avaliacao from './components/Consultas/AvaliacaoInicial';
import InserirVideo from './components/Educacao/Educacao';
import Videos from './components/Educacao/Videos';
import Video from './components/Educacao/VerVideo';
import Login from './components/User/Login';
import VerDocumentos from './components/Documentos/VerDocumentos';
import Orcamento from './components/Documentos/Orcamentos/Orcamento';
import ProtectedRoute from './components/Routes/ProtectedRoute';
import { Route, Switch } from 'react-router-dom';
import React from 'react';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.loading)
  function addAxiosInterceptors() {
    // Add a request interceptor
    console.log('hey');
    axios.interceptors.request.use(config => {
      
      // Do something before request is sent
      dispatch.loading.enableLoading();
      return config;
    }, error => {
      // Do something with request error
      dispatch.loading.disableLoading();

      return Promise.reject(error);
    });

    // Add a response interceptor
    axios.interceptors.response.use(response => {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      dispatch.loading.disableLoading();
      return response;
    }, error => {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      dispatch.loading.disableLoading();

      // Token is invalid. Logout the user.
      if (error.response.status === 400 && error.response.data.code === 'INVALID_HEADER') {
        console.log('erro');
      }

      return Promise.reject(error);
    });
  }
  useEffect(() => {
    addAxiosInterceptors();
  }, [])


  return (
    <div>

    { loading ?  <Loading /> : null }

{
  
  <Switch>
              <Route exact path='/login' component={Login} />
              <ProtectedRoute exact path='/' component={DashBoard}/>
              <ProtectedRoute exact path='/verClientes' component={VerClientes} />
              <ProtectedRoute exact path='/agenda' component={Agenda2} />
              <ProtectedRoute exact path='/NovoCliente' component={NovoCliente} />
              <ProtectedRoute exact path='/cliente/:id' component={Informacoes} />
              <ProtectedRoute exact path='/inserirVideo' component={InserirVideo} />
              <ProtectedRoute exact path='/inserirMaterial' component={InserirMaterial} />
              <ProtectedRoute exact path='/listaDeStock' component={ListaDeStock} />
              <ProtectedRoute exact path='/produto/:id' component={EditarMaterial} />
              <ProtectedRoute exact path='/orcamento/:id' component={Orcamento} />
              <ProtectedRoute exact path='/verServicos' component={verServicos} />
              <ProtectedRoute exact path='/inserirServico' component={inserirServico} />
              <ProtectedRoute exact path='/inserirCategoria' component={inserirCategoria} />
              <ProtectedRoute exact path='/novaConsulta' component={novaConsulta} />
              <ProtectedRoute exact path='/verConsultas' component={verConsultas} />
              <ProtectedRoute exact path='/emitirDoc' component={Emitir} />
              <ProtectedRoute exact path='/detalhes' component={Detalhes} />
              <ProtectedRoute exact path='/avaliacao' component={Avaliacao} />
              <ProtectedRoute exact path='/listaDeVideos' component={Videos} />
              <ProtectedRoute exact path='/video' component={Video} />
              <ProtectedRoute exact path='/verDocumentos' component={VerDocumentos} />
              </Switch>
            }
            </div>
  );
}

export default App;
