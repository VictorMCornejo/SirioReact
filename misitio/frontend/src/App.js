// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

import ContactoPage from './pages/ContactoPage';
import NosotrosPage from './pages/NosotrosPage';
import GaleriaPage from './pages/GaleriaPage';
import ServiciosPage from './pages/ServiciosPage';
import HomePage from "./pages/HomePage";



function App(){
  return(
    <div className="App">
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
