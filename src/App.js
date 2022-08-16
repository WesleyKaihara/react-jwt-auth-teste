import React from "react";
import "./App.css";
import "./reset.css";

import Header from './components/Header';
import SubMenu from './components/Header/SubMenu';
import Rotas from './routes/routes';
import Footer from './components/Footer';

export default function App() {
  return (
    <div>
      <Header></Header>
      <SubMenu />
      <Rotas />
      <Footer />
    </div>
  );
}

