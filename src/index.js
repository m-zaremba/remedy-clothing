import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import CartProvider from "./providers/cart/cart.provider";
import { CollectionsProvider } from "./providers/collections/collections.provider";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <CollectionsProvider>
    <CartProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CartProvider>
  </CollectionsProvider>,
  document.getElementById("root")
);
