import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarim from './Component/MyNav/Navbarim';


function App() {
  return (
    <div className="App">
      <Navbarim />
      <Routes>
        <Route />
      </Routes>
    </div>


  );
}

export default App;
