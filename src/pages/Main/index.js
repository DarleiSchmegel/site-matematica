import React from 'react';
import { Link } from 'react-router-dom'
import imgPotenciação from '../../images/potenciacao.jpg'

import { contentPages } from '../../contentPagesVector'



function Main() {
  
  return (
    <main>


      <section className="produtos">
      { contentPages.map( page =>
        <div className="produto" key={page.id}>
          <Link key={page.id} to={page.path}  onClick={() => window.scrollTo(0, 0)}  >
            <div className="image">
              <img className="imageProd" src={page.urlImg} alt=""/>
            </div>

            <div className="content">
              <p key={page.id} className="title text--medium">
                {page.title}
              </p>
              <div className="info">
                <p key={page.id} className="text--medium">
                  {page.description}
                </p>
                {/* <p className="price text--medium">19,90</p> */}
              </div>
            </div>
          </Link>
        </div>        
        
      )}        
      </section>

{/*      
      <h1>Veja oque as empresas parceiras dizem.</h1>
      <section className="cards">
        <div className="card">
          
          <div className="image">
            <img src="" />
          </div>
          <div className="content">
            <p className="title text--medium">
             
            </p>
            <div className="info">
              <p className="text--medium"></p>
              <p className="price text--medium">Free</p>
            </div>
          </div>
        </div>
      </section> */}

     
    </main>
  )
}

export default Main;