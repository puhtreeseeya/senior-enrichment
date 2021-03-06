 'use strict'
import React from 'react'; 
import { render } from 'react-dom'; 
import { Provider } from 'react-redux'; 

import store from './store'; 
import Home from './components/Home'; 
import Navbar from './components/Navbar'; 

render (
  <Provider store={store}>
    <Home/>
  </Provider>,
  document.getElementById('main')
)