import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../src/App.css';

import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';
import Aside from './components/layout/Aside';

import ContactoPage from './pages/ContactoPage';
import NosotrosPage from './pages/NosotrosPage';
import GaleriaPage from './pages/GaleriaPage';
import ServiciosPage from './pages/ServiciosPage';
import HomePage from "./pages/HomePage";


function App(){
  return(
    <div className="contenedor">
      <Header/>
      
      <BrowserRouter>
        <Nav/>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/servicios" element={<ServiciosPage/>}/>
            <Route path="/nosotros" element={<NosotrosPage/>}/>
            <Route path="/galeria" element={<GaleriaPage/>}/>
            <Route path="/contacto" element={<ContactoPage/>}/>
        </Routes>
      </BrowserRouter>


      <Footer/>
    </div>
  );
}
export default App;
