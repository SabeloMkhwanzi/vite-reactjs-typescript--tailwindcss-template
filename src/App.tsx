import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  //Wallet connect function
  const connectWallet = () => {};

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React + Typescript!</p>

        <button
          className="flex flex-row justify-center items-center my-5 bg-[#0070F3] p-3 rounded-full cursor-pointer hover:bg-[#055ACA]"
          onClick={connectWallet}
        >
          <p className="text-white text-base font-semibold">Connect Wallet</p>
        </button>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
