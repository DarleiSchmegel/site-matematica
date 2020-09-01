import React from 'react';
import { Link } from 'react-router-dom'
import {menuOnOff} from '../../scripts'
import logo from '../../images/logo_barra_navegacao.png'
function HeaderResponsive() {
  return (
      <>
      <header>
        
        <div className="container">
          <Link className="pageSelect1" id="top" to="/" >
            <img className="logo-nav" id="logo-nave" src={logo} alt=""/>
          </Link>
      
        
          
          <div className="menu-section">
            <div className="menu-toggle" onClick={menuOnOff} >
              <div className="one"></div>
              <div className="two"></div>
              <div className="three"></div>
            </div>
            <nav>
              <ul>
                {/* <li>
                  <Link className="pageSelect1" to="/" onClick={menuOnOff}>Inicio</Link>
                </li> */}
                <li>
                  <Link className="pageSelect2" to="/ensino-basico" onClick={menuOnOff} >Nivel Fundamental</Link>
                </li>
                <li>
                <Link className="pageSelect3" to="/ensino-medio" onClick={menuOnOff}>Nivel Médio</Link>
                  {/* <a href="sobre.html">Sobre</a> */}
                </li>
                <li>
                  <Link className="pageSelect4" to="/ensino-superior" onClick={menuOnOff} >Nivel Superior</Link>
                </li>
                {/* <li>
                  <a className="pageSelect4" href="">Sobre</a>
                </li> */}
              </ul>
            </nav>
          </div>
        </div>
    </header>
      </>
  )
    
  
}

export default HeaderResponsive;