import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Footer from '../NavigationMenu/Footer';
import TopNav from '../NavigationMenu/TopNav';
import NavigationMenu from '../NavigationMenu/NavigationMenu';

function ProtectedRoute({ component: Component, ...rest }) {
  const auth = localStorage.getItem('token')
  return (
    <Route
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...rest}
    render={props => {
      if (auth) {
        // eslint-disable-next-line react/jsx-props-no-spreading
        return (
            <div className='page-wrapper'>
            <TopNav />
   
           <div className='page-container'>
              <NavigationMenu />
             <div className='page-content-wrapper'>
          <Component {...props} />
          </div>
        </div>
         <Footer />
      </div>
          );
        }
        return (
          <Redirect
            to={{
              pathname: '/login',
              state: {
                from: props.location,
              },
            }}
          />
        );
      }}
    />
  );
}

export default ProtectedRoute;