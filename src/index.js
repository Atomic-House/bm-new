import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { store } from "./store/store";
import { Provider } from "react-redux";


import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <BrowserRouter basname="https://app.atomichouse.co">
      <App />
    </BrowserRouter>
  </Provider>
);
