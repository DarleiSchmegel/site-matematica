import React from 'react';

// import { Container } from './styles';
import { contentPages } from '../../contentPagesVector'
import { Link } from 'react-router-dom';

function UniversityEducation() {
  return (
    <>
        <main>
            <h1>Nivel Superior</h1>

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
        </main>
    </>

  )
}

export default UniversityEducation;