import React from 'react';
import { BrowserRouter, Switch , Route } from 'react-router-dom';

import HeaderResponsive from './pages/HeaderResponsive';
import Main from './pages/Main'
import About from './pages/About'
import Footer from './pages/Footer'

import  {contentPages}  from './contentPagesVector'

// Contents
import SecondDegreeFunction from './pages/contents/SecondDegreeFunction';
import Factorization from './pages/contents/Factorization';
import Potentiation from './pages/contents/Potentiation';

// const keys = Object.keys(contentPages[0])

export default function Routes() {
    
    return(
        
        
        <BrowserRouter>
            <HeaderResponsive/> 
            <Switch>
           
                <Route path="/" exact component={Main} />
                <Route path="/about" component={About} />
                
                <Route path="/funcao-de-segundo-grau" component={SecondDegreeFunction} />
                <Route path="/fatoracao" component={Factorization} />
                <Route path="/potenciacao" component={Potentiation} />

                    
            </Switch> 
            <Footer/>
        </BrowserRouter>
    );
}
{/* <Route path="/secondDegreeFunction" component={SecondDegreeFunction} />   */}
// {
//     contentPages.map(page => <Route key={page.id} path={page.routes.path} component={page.routes.component}/>)
// }
// {/* <h1>{JSON.stringify(contentPages[0].routes)}</h1>
//             {contentPages[0].routes.component}
//             {/* {
//                 contentPages.map(page => <p key={page.id}>{page.address}</p>)
//             }
//             {
//                  contentPages.map(page => <Route key={page.id} path={`/${page.address}`} exact component={imports(page)} />)
//             } */}
//             <Route path="/" exact component={import("./pages/Main")} /> */}
