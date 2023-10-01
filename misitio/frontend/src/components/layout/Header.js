import { Fragment } from 'react'
import '../../styles/layout/Header.css'

const Header=(props)=>{
    return(

        <header className="header"> 
            <div className="flex">

                <a href="/">
                    <img src="images/logo.png" class="logo" alt="MiSitio"/>
                </a>
                <h1>Mi sitio web</h1>

                <div class="contenedor-redes">              
                    <img src="images/youtube.svg" alt="Youtube" className="img-redes"></img>    
                    <img src="images/facebook.svg" alt="facebook" className="img-redes"></img>  
                    <img src="images/square-instagram.svg" alt="instagram" className="img-redes"></img>  
                </div>

            </div>
        </header>
    );
}
export default Header;