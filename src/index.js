import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { CookiesProvider } from "react-cookie";
import store from "./redux/config/configStore";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

// const persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
    <Provider store={store}>
      <CookiesProvider>
      <App />
      </CookiesProvider>
    </Provider>
  
);

reportWebVitals();
