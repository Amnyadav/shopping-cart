import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { store } from "./redux/store";
import {BrowserRouter} from 'react-router-dom';
import { Provider } from "react-redux";
import {ToastContainer} from 'react-toastify'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
      <ToastContainer></ToastContainer>
    </Provider>
  </BrowserRouter>
);

