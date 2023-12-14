import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import { ethers } from "ethers";

import { StateContextProvider } from "./context";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <ThirdwebProvider
    // desiredChainId={ChainId.Mumbai}
    activeChain="mumbai"
    // signer={new ethers.providers.Web3Provider(window.ethereum).getSigner()}
    clientId="f3cc3847a4f2be2d3fb16e59eb649265"
  >
    <Router>
      <StateContextProvider>
        <App />
      </StateContextProvider>
    </Router>
  </ThirdwebProvider>
);
