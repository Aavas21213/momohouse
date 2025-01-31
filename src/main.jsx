import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./Context/CartProvider.jsx";
import { Auth0Provider } from "@auth0/auth0-react";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CartProvider>
      <Auth0Provider
        domain="dev-6vunfbt8ns7f4bmq.us.auth0.com"
        clientId="1YD072bCRJuFX5GnAwBGMeAXoX650mbV"
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <App />
      </Auth0Provider>
    </CartProvider>
  </BrowserRouter>
);
