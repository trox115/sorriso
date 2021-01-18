import Footer from './components/NavigationMenu/Footer';
import TopNav from './components/NavigationMenu/TopNav';
import NavigationMenu from './components/NavigationMenu/NavigationMenu';

import { Route, Switch } from 'react-router-dom';

import './App.css';

function App() {
  return (
      <div className='page-wrapper'>
                <TopNav />

        <div className='page-container'>
                <NavigationMenu />
          <div className='page-content-wrapper'>
         
          </div>
        </div>
        <Footer />

      </div>
  );
}

export default App;
