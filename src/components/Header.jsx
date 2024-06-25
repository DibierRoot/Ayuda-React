import VOAR from "/src/assets/images/VOAR.png"
import carrito from "/src/assets/images/CarritoDeCompras.png"
import personita from "/src/assets/images/Screenshot from 2024-05-17 09-42-50.png"

const Header = () => {
    return (
        <>
        <header>
            <a href="https://iniciologeado.netlify.app/" className="logo"><img src={VOAR} alt="" height="100" width="100"/></a>
            <b><a href="https://iniciologeado.netlify.app/" className="voar"><h1>V O A R</h1></a></b>
            <a href="https://carritop.netlify.app/" className="carrito"><img src={carrito} height="60" width="60"/></a>

            <nav className="dropdownmenu">
                <ul>
                    <li><a href="https://iniciologeado.netlify.app/">INICIO</a></li>
                    <li><a href="https://categorias.netlify.app/">CATEGORIAS</a></li>
                    <li><a href="#"><img src={personita} alt="" className="personita" height="15px" width="15px"/>CUENTA</a>
                        <ul id="submenu">
                        <li><a href="https://editarcuenta.netlify.app/"><div className="submenu">Editar Cuenta</div></a></li>
                        <li><a href="https://historialdecompras.netlify.app/"><div className="submenu">Historial de compras</div></a></li>
                        <li><a href="https://voaroficial.netlify.app/"><div className="submenu">Cerrar Sesion</div></a></li>
                        </ul>
                    </li>
                    <li><a href="https://voarayuda.netlify.app/"><p className="amarillo">AYUDA</p></a></li>
                </ul> 
            </nav>
        </header>
        </>
    )
}

export default Header