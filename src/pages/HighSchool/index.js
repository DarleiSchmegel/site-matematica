import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet'
import { contentPages } from '../../contentPagesVector'

function filterByID(obj) {
    if (obj.category === "médio") {
      return true;
    } else {
      return false;
    }
}
  
var arrByID = contentPages.filter(filterByID);

function HighSchool() {
  return (
    <>
      <Helmet>
      <title>Matemática simplificada - Ensino Médio</title>
      <meta name="theme-color" content="#FF0000"/>
      <meta
        name="description"
        content="Matemática simplificada: Ensino Médio - Conteúdos e exercícios do ensino médio separados pro cardes."
      /> 
    </Helmet>
        <main>
                
        <h2 className="card-description">Cardes com conteúdos de Nível Médio</h2>
                   

                    <section className="produtos">
                    { arrByID.map( page => 

                            <div key={page.id} className="produto" >
                                <Link to={page.path}  onClick={() => window.scrollTo(0, 0)}  >
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
                                    
                                    </div>
                                </div>
                                </Link>
                            </div>
                       
                    
                        )}        
                    </section>
               
        </main>
    </>
  )
}

export default HighSchool;