import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarim from './Component/MyNav/Navbarim';
import Home from "./Pages/Home/Home"
import Form from './Pages/Form/Form';
import Profile from './Pages/Profile/Profile';
import Machine from "./Pages/Machine/Machine"
import Akis from "./Component/BottomAkis/Akis"

function App() {
  return (
    <div className="App">
      <Navbarim/>
      <Routes>
        <Route  path="/Home" element={<Home/>}/>
        <Route  path="/Form" element={<Form/>}/>
        <Route  path="/Profile" element={<Profile/>}/>
        <Route  path="/Machine" element={<Machine/>}/>
      </Routes>
      <Akis/>
    </div>


  );
}

export default App;
