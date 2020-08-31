import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { menuOnOff } from '../../scripts'
// import { Container } from './styles';

import euImg from '../../images/eu.png'

function Footer() {
  return (
      <>
             
        <footer>
            
            <div className="contatos" id="contato">
                <div className="persona">
                <img src={euImg} alt=""/>
                <p>By Darlei Matheus Schmegel</p>
                </div>

                <div className="social">
                    <a className="bt-social" href="https://www.linkedin.com/in/darlei-schmegel-9766981a5/" target="_blank" rel="noopener noreferrer">
                        <i id="social" className="fab fa-linkedin"></i>
                    </a>
                    <a className="bt-social" href="https://www.instagram.com/darleischmegel/?hl=pt-br" target="_blank" rel="noopener noreferrer">
                        <i id="social" className="fab fa-instagram-square"></i>
                    </a>
                    <a className="bt-social" href="https://www.facebook.com/profile.php?id=100007584196535" target="_blank" rel="noopener noreferrer">
                        <i id="social" className="fab fa-facebook-square"></i>
                    </a>
                </div>
            </div>

            <div className="intro-end">
                <p>
                    Estudante de Engenharia de Computação na Universidade Federal de Pelotas.
                     Apaixonado por tecnologia e matemática.    
                </p>
                <hr/>
            </div> 
            <div className="linkes">
                <Link className="footer-link" to="/" onClick={() => window.scrollTo(0, 0)}>Início</Link>
                |
                <Link className="footer-link" to="/about" onClick={() => window.scrollTo(0, 0)}>Sobre</Link>
            </div>
            <p className="direitos">© 2020-2020 Matemática Descomplicada. Todos os direitos reservados.</p>
       </footer>
      </>
  )
}

export default Footer;