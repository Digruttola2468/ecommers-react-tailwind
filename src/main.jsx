import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import App from "./App";

import ProductProvider from "./contexts/ProductContext";
import SiderbarProvider from "./contexts/SidebarContext";
import CartProvider from "./contexts/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SiderbarProvider>
    <CartProvider>
      <ProductProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ProductProvider>
    </CartProvider>
  </SiderbarProvider>
);
