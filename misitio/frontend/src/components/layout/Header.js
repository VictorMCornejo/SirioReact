const Header=(props)=>{
    return(
        <header className="header"> 
            <div>

                <a href="/">
                    <img src="images/logo.png" class="logo" alt="MiSitio"/>
                </a>
                <h1>Mi sitio web</h1>

                <div class="contenedor-redes">
                    {/* <img src="images/youtube.svg" alt="Youtube" class="img-redes"/>
                    <img src="images/facebook.svg" alt="facebook" class="img-redes"/>
                    <img src="images/square-instagram.svg" alt="instagram" class="img-redes"/> */}
                </div>

            </div>
        </header>
    )
}
export default Header;