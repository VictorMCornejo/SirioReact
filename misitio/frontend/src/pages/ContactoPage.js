import '../styles/pages/ContactoPage.css';

const ContactoPage=(prop)=>{
    return(
        
        <main className="main">
            
            <section className="contenedor-contacto">
                <div className="datos-empresa">
                    <ul>
                        <li>Mi Empresa</li>
                        <li>Direccion 123</li>
                        <li>Ciudad - Provincia</li>
                        <li>Telefono: 1234-5678</li>
                        <li>Email: miempresa@hotmail.com</li>
                    </ul>
                </div>

                <div className="formulario">
                    <h2 className="anchoCompleto">CONTACTESE CON NOSOTROS</h2>
                    <p>
                        <label for="">Nombre:</label>
                        <input type="text" required></input>
                    </p>
                    <p>
                        <label for="">Apellido:</label>
                       <input type="text" required></input>
                    </p>
                    <p>
                         <label for="">Email:</label>
                         <input type="email" required></input>
                    </p>
                    <p>
                         <label for="">Telefono (opcional):</label>
                         <input type="text"></input>
                    </p>
                    <p className="anchoCompleto">
                         <label for="">Comentarios:</label>
                         <textarea name="comentarios" id="comentarios" rows="5"></textarea>
                    </p>
                    <p className="anchoCompleto">
                         <button>ENVIAR</button>
                    </p>

                 </div>
            </section>
           

        </main>
  
    )
}
export default ContactoPage;