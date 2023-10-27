import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { applyMiddleware, compose} from 'redux'
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import reducer from './Reducers'


const store = configureStore({reducer},compose(applyMiddleware(thunk)))


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
     <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
 
);