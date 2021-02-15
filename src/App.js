
import NovaMarcacao from './components/Marcacoes/NovaMarcacao';
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
import Emitir from './components/Documentos/Emitir';
import Agenda2 from './components/Marcacoes/Agenda2';
import Detalhes from './components/Consultas/DetalhesConsula';
import Avaliacao from './components/Consultas/AvaliacaoInicial';
import InserirVideo from './components/Educacao/Educacao';
import Videos from './components/Educacao/Videos';
import Video from './components/Educacao/VerVideo';
import Login from './components/User/Login';
import store from './store';
import ProtectedRoute from './components/Routes/ProtectedRoute';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import React, { useState } from 'react';
import './App.css';

function App() {
  return (
    <Provider store={store}>
     
            <Switch>
              <Route exact path='/login' component={Login} />
              <ProtectedRoute exact path='/' component={DashBoard}/>
              <ProtectedRoute exact path='/verClientes' component={VerClientes} />
              <ProtectedRoute exact path='/novaMarcacao' component={NovaMarcacao} />
              <ProtectedRoute exact path='/agenda' component={Agenda2} />
              <ProtectedRoute exact path='/NovoCliente' component={NovoCliente} />
              <ProtectedRoute exact path='/cliente/:id' component={Informacoes} />
              <ProtectedRoute exact path='/inserirVideo' component={InserirVideo} />
              <ProtectedRoute exact path='/inserirMaterial' component={InserirMaterial} />
              <ProtectedRoute exact path='/listaDeStock' component={ListaDeStock} />
              <ProtectedRoute exact path='/produto/:id' component={EditarMaterial} />
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
            </Switch>
         
    </Provider>
  );
}

export default App;
