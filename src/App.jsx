import React, { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarim from './Component/MyNav/Navbarim';
import Home from "./Pages/Home/Home"
import Form from './Pages/Form/Form';
import Profile from './Pages/Profile/Profile';
import Machine from "./Pages/Machine/Machine"
import Akis from "./Component/BottomAkis/Akis"


function App() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      // Yalnızca ilk açılışta çalışacak olan bekleme süresi
      const timeout = setTimeout(() => {
        setLoading(false);
        navigate('/Home'); // Yükleme tamamlandığında Home sayfasına yönlendir
      }, 2000); // 2 saniye sonra yönlendirme yapılacak

      return () => clearTimeout(timeout); // Component unmount olduğunda timeout'u temizle
    }
  }, [loading, navigate]);


  return (

    <div className="App">
      {loading ? (
        <div className='loaderBox'>
            <div className="loader"></div> 
        </div>
        
      ) : (
        <div>
          <Navbarim/>
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/Form" element={<Form />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Machine" element={<Machine />} />
          </Routes>

          <Akis />
        </div>
      )}
    </div>

  );
}
export default App;
