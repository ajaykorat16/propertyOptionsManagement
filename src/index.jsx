import React from "react";
import "./styles/color.css";
import "./styles/font.css";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.css";
import "./styles/tailwind.css";
import store from "store";
import { Provider } from "react-redux";
import { AuthProvider } from "contexts/AuthContext";
import { CategoryProvider } from "contexts/CategoryContext";
import { FinishesProvider } from "contexts/FinishesContext";

ReactDOM.render(
  <AuthProvider>
    <FinishesProvider>
      <CategoryProvider>
        <Provider store={store}>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </Provider>
      </CategoryProvider>
    </FinishesProvider>
  </AuthProvider>,
  document.getElementById("root")
);
