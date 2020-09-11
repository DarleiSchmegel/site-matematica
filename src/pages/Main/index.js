import React from 'react';
import { Link } from 'react-router-dom'
import Helmet from 'react-helmet'


import { contentPages } from '../../contentPagesVector'
// import { useState } from 'react';



function Main() {
//   const [cards, setCardas] = useState([]);
//   const [atuais, setAtuais] = useState(9);

//   // var aray = contentPages.

//   function filterAtuais(obj) {
//     if (obj.category === "médio") {
//       return true;
//     } else {
//       return false;
//     }
// }
  
  return (
    <>
    <Helmet>
      <title>Matemática simplificada</title>
      <meta name="theme-color" content="#FF0000"/>
      <meta
        name="description"
        content="Matemática simplificada: Ensino Fundamental | Ensino Médio | Ensino Superior. Todos os conteúdos separados por cardes."
      /> 
    </Helmet>
    <main>

      
        <h2 className="card-description">Cardes com todos os conteúdos disponíveis</h2>
        <section className="produtos">
        { contentPages.map( page =>
          <div className="produto" key={page.id}>
            <Link  to={page.path}  onClick={() => window.scrollTo(0, 0)}  >
              <div className="image">
                <img className="imageProd" src={page.urlImg} alt=""/>
              </div>

              <div className="content">
                <p className="title text--medium">
                  {page.title}
                </p>

                <p className="category text--medium">Nivel {page.category}</p>

                <div className="info">
                  <p className="text--medium">
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
    </>
  )
}

export default Main;