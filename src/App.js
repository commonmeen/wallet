import React from 'react';
import './App.css';
import { createStore } from 'redux';
import rootReducer from './reducers/index'
import Wallet from './containers/WalletContainer'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux'

const store = createStore(
  rootReducer
);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Wallet></Wallet>
      </Provider>
    </div>
  );
}

export default App;
