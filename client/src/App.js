import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Create from './Components/Create';
import Landing from './Components/Landing';
import Detail from './Components/Detail';
//Listo :)!
function App() {
  return (
    <div className="App">
      <div>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/home/:id" element={<Detail/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/pokemon" element={<Create/>}/>
      </Routes>
     </div>
    </div>
  );
}

export default App;
