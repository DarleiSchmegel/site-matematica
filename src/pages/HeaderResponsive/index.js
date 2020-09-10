import React from 'react';
import { Link } from 'react-router-dom'
import {menuOnOff} from '../../scripts'
import './styles.css'
import logo from '../../images/Logo1.png'

export default function HeaderResponsive() {
  // function handleClick(e){
  //   e.preventDefault()
  //   history.push("/ensino-basico");
  // }
  // onClick={(e)=> handleClick(e)}

  function navOnOff(opcao){
    if( opcao === "tab1"){
      document
        .querySelector(".menu-section")
        .classList
        .toggle("on")

      document.getElementById()
    }
};


  return (
      <>
      <header id="cabecalho">
        
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
            <nav className="nav_tabs">
              <ul>
                {/* <li>
                  <Link className="pageSelect1" to="/" onClick={menuOnOff}>Inicio</Link>
                </li> */}
                <li>   
                    <Link  to="/ensino-basico" onClick={menuOnOff}>Nível Fundamental</Link> 
                </li>
                <li>             
                  <Link to="/ensino-medio" onClick={menuOnOff} >Nível Médio</Link>
                </li>
                <li>                   
                  <Link to="ensino-superior"onClick={menuOnOff} >Nível superior</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
    </header>
      </>
  )
  // <input type="radio" id="tab2" className="rd_tab" name="tabs" />
  //                   <label htmlFor="tab2"  className="tab_label">
  //                     Nível Médio
  //                   </label>   
  
}
