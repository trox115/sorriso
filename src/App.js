import Footer from './components/NavigationMenu/Footer';
import TopNav from './components/NavigationMenu/TopNav';
import NavigationMenu from './components/NavigationMenu/NavigationMenu';
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

import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [state, setstate] = useState({ login: false });
  return (
    <Provider store={store}>
      <div className='page-wrapper'>
        {state.login && <TopNav />}

        <div className='page-container'>
          {state.login && <NavigationMenu />}
          <div className='page-content-wrapper'>
            <Switch>
              <Route exact path='/login' component={Login} />
              <Route exact path='/' component={DashBoard} />
              <Route exact path='/verClientes' component={VerClientes} />
              <Route exact path='/novaMarcacao' component={NovaMarcacao} />
              <Route exact path='/agenda' component={Agenda2} />
              <Route exact path='/NovoCliente' component={NovoCliente} />
              <Route exact path='/cliente/:id' component={Informacoes} />
              <Route exact path='/inserirVideo' component={InserirVideo} />
              <Route exact path='/inserirMaterial' component={InserirMaterial} />
              <Route exact path='/listaDeStock' component={ListaDeStock} />
              <Route exact path='/produto/:id' component={EditarMaterial} />
              <Route exact path='/verServicos' component={verServicos} />
              <Route exact path='/inserirServico' component={inserirServico} />
              <Route exact path='/inserirCategoria' component={inserirCategoria} />
              <Route exact path='/novaConsulta' component={novaConsulta} />
              <Route exact path='/verConsultas' component={verConsultas} />
              <Route exact path='/emitirDoc' component={Emitir} />
              <Route exact path='/detalhes' component={Detalhes} />
              <Route exact path='/avaliacao' component={Avaliacao} />
              <Route exact path='/listaDeVideos' component={Videos} />
              <Route exact path='/video' component={Video} />
            </Switch>
          </div>
        </div>
        {state.login && <Footer />}
      </div>
    </Provider>
  );
}

export default App;
