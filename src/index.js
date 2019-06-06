import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, } from 'react-router-dom';

//you can alias specific imports by using as Newname
//DOM.render takes in 2 arguments, the thing we are going to
//mount and where we are going to mount it
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

//we want to have access to routing for all components

