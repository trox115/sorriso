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

import { Route, Switch } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className='page-wrapper'>
      <TopNav />

      <div className='page-container'>
        <NavigationMenu />
        <div className='page-content-wrapper'>
          <Switch>
            <Route exact path='/verClientes' component={VerClientes} />
            <Route exact path='/novaMarcacao' component={NovaMarcacao} />
            <Route exact path='/agenda' component={Agenda} />
            <Route exact path='/NovoCliente' component={NovoCliente} />
            <Route exact path='/cliente/:id' component={Informacoes} />
            <Route exact path='/inserirMaterial' component={InserirMaterial} />
            <Route exact path='/listaDeStock' component= {ListaDeStock} />
            <Route exact path='/verServicos' component= {verServicos} />
            <Route exact path='/inserirServico' component= {inserirServico} />
            <Route exact path='/novaConsulta' component= {novaConsulta} />
          </Switch>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
