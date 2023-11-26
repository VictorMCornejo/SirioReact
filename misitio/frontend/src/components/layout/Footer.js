import '../../styles/layout/Footer.css';

const Footer=(props)=>{
    return(
        <footer className="footer">
           <div className="contenedorWidget">

                <div className="widget-footer1">
                    <a href="http://www.ole.com.ar">
                        <img src="images/logo.png"  className="logo" alt="MiSitio"/>
                    </a>
                </div>

                <div className="widget-footer3">
                    <h3>EMPRESA</h3>
                    <p>Direccion 111</p>
                    <p>Localidad - Ciudad</p>
                    <p>Telefono</p>
                </div>
            </div>

            <div className="copyright">
                <p>Copyright...</p>
            </div>
        </footer>
        
    )

}
export default Footer;