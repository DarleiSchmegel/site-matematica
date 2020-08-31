import React from 'react';
import { Link } from 'react-router-dom'
import {menuOnOff} from '../../scripts'
import logo from '../../images/logo_barra_navegacao.png'
function HeaderResponsive() {
  return (
      <>
      <header>
        
        <div className="container">
          <Link className="pageSelect1" id="top" to="/" onClick={menuOnOff}>
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
                  <a className="pageSelect2" href="" >Nivel Fundamental</a>
                </li>
                <li>
                <Link className="pageSelect3" to="/about" onClick={menuOnOff}>Nivel Médio</Link>
                  {/* <a href="sobre.html">Sobre</a> */}
                </li>
                <li>
                  <a className="pageSelect4" href="">Nivel Superior</a>
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