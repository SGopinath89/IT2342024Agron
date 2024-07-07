import React from 'react';
import './App.css';
import AppRouter from "./components/RouterComponent.js";
import NavBar from "./components/NavBar.js";
import Container from '@material-ui/core/Container';
// import AppRouter from "./components/RouterComponent";

function App() {
  return (
      <div>
        <AppRouter/>
         
      </div>
  );
}

export default App;