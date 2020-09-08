import React from 'react';
import { Link } from 'react-router-dom';
// import { Container } from './styles';
import { contentPages } from '../../contentPagesVector'

function ElementarySchool() {
  return (
        <>
            <main>
                <h1>Nivel Fundamental</h1>

                <section className="produtos">
            { contentPages.map( page => 
                <>
                {
                    page.category === "fundamental" &&
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
                            
                            </div>
                        </div>
                        </Link>
                    </div>
                }        
                </>
            
                )}        
            </section>
            </main>
        </>

  )
}

export default ElementarySchool;