import Footer from './components/NavigationMenu/Footer';
import TopNav from './components/NavigationMenu/TopNav';
import NavigationMenu from './components/NavigationMenu/NavigationMenu';
import NovaMarcacao from './components/Marcacoes/NovaMarcacao';
import Agenda from './components/Marcacoes/Agenda';
import NovoCliente from './components/Clientes/NovoCliente';
import VerClientes from './components/Clientes/VerClientes';
import Informacoes from './components/Clientes/Individual/Informacoes';
import InserirMaterial from './components/Material/InserirMaterial';
import ListaDeStock from './components/Material/verStock';
import verServicos from './components/Servicos/verServicos';
import inserirServico from './components/Servicos/inserirServico';
import novaConsulta from './components/Consultas/novaConsulta';
import EditarMaterial from './components/Material/EditarMaterial';
import Teste from './components/Material/Teste';
import inserirCategoria from './components/Servicos/inserirCategoria';
import verConsultas from './components/Consultas/verConsultas';
import DashBoard from './components/DashBoard/Dashboard';
import Emitir from './components/Documentos/Emitir';
import Agenda2 from './components/Marcacoes/Agenda2';
import store from './store';

import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="page-wrapper">
        <TopNav />

        <div className="page-container">
          <NavigationMenu />
          <div className="page-content-wrapper">
            <Switch>
              <Route exact path="/" component={DashBoard} />
              <Route exact path="/verClientes" component={VerClientes} />
              <Route exact path="/novaMarcacao" component={NovaMarcacao} />
              <Route exact path="/agenda" component={Agenda2} />
              <Route exact path="/NovoCliente" component={NovoCliente} />
              <Route exact path="/cliente/:id" component={Informacoes} />
              <Route
                exact
                path="/inserirMaterial"
                component={InserirMaterial}
              />
              <Route exact path="/listaDeStock" component={ListaDeStock} />
              <Route exact path="/produto/:id" component={EditarMaterial} />
              <Route exact path="/verServicos" component={verServicos} />
              <Route exact path="/inserirServico" component={inserirServico} />
              <Route
                exact
                path="/inserirCategoria"
                component={inserirCategoria}
              />
              <Route exact path="/novaConsulta" component={novaConsulta} />
              <Route exact path="/verConsultas" component={verConsultas} />
              <Route exact path="/emitirDoc" component={Emitir} />
              <Route exact path="/teste/" component={Teste} />
            </Switch>
          </div>
        </div>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
