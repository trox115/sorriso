import Footer from './components/NavigationMenu/Footer';
import TopNav from './components/NavigationMenu/TopNav';
import NavigationMenu from './components/NavigationMenu/NavigationMenu';
import NovaMarcacao from './components/Marcacoes/NovaMarcacao';
import Agenda from './components/Marcacoes/Agenda';
import $ from 'jquery';


import { Route, Switch } from 'react-router-dom';

import './App.css';

function App() {
  return (
      <div className='page-wrapper'>
                <TopNav />

        <div className='page-container'>
                <NavigationMenu />
          <div className='page-content-wrapper'>
          <Agenda />
          </div>
        </div>
        <Footer />

      </div>
  );
}

export default App;
