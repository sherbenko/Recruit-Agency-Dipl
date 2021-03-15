import React from 'react';
import ReactDOM from 'react-dom';
import App from './scenes/app/App';
import {BrowserRouter as Router} from "react-router-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import store from "./services/store";

// const initialState = {
//   articles: []
// };
//
// function rootReducer(state = initialState, action) {
//   return state;
// }
//
// const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App/>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
