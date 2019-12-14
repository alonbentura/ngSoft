import React from 'react';
import { Header } from "./components/header"
import { NavBar } from './components/navbar'
import { FormPage } from './components/page'

function App() {
  return (
    <div style={{ direction: 'rtl' }}>
      <Header></Header>
      <NavBar></NavBar>
      <FormPage></FormPage>
    </div>
  );
}

export default App;
