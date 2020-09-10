import React from 'react';
import { Link } from 'react-router-dom';
// import { Container } from './styles';
import { contentPages } from '../../contentPagesVector'

// const basico = contentPages.map( page =>
    
// )
// const keys = Object.keys(contentPages[])


function filterByID(obj) {
    if (obj.category === "fundamental") {
      return true;
    } else {
      return false;
    }
  }
var arrByID = contentPages.filter(filterByID);


function ElementarySchool() {


  return (
        <>
            <main>
                
                <h2 className="card-description">Cardes com conteúdos de Nível Fundamental</h2>
                
                <section className="produtos">
                    { arrByID.map( page => 
                    
                           <div key={page.id} className="produto" >
                                <Link  to={page.path}  onClick={() => window.scrollTo(0, 0)}  >
                                <div className="image">
                                    <img className="imageProd" src={page.urlImg} alt=""/>
                                </div>

                                <div className="content">
                                    <p className="title text--medium">
                                    {page.title}
                                    </p>

                                    <p  className="category text--medium">Nivel {page.category}</p>
                                    
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
                
                
            </main>
        </>

  )
}

export default ElementarySchool;