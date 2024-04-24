import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { Layout } from './components/Layout';
import './custom.css';
import { configureStore } from "@reduxjs/toolkit";
import {Provider} from 'react-redux';
import openModelReducer from './redux/openModelSlice';
import store from './app/store';

export default class App extends Component {
  static displayName = App.name;
  
  constructor(props){
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <Layout>
          <Routes>
            {AppRoutes.map((route, index) => {
              const { element, ...rest } = route;
              return <Route key={index} {...rest} element={element} />;
            })}
          </Routes>
        </Layout>
      </Provider>
    );
  }
}
