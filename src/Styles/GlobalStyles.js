import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro");

@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  outline: 0;
}

html {
  /* a cada 1rem será considera 10px */
  font-size: 62.5%;
}

html,
body {
  height: 100vh;
  font-family: 'Montserrat', sans-serif;
  text-rendering: optimizelegibility;
  -webkit-font-smoothing: antialiased;
}

body {
  font-size: 1.6rem;
  background-color: rgb(220, 213, 205);
}

header {
  background-color: rgb(148, 226, 148);
}

header .container {
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 90%;
  max-width: 980px;
  
  margin: auto;
}
.logo-nav {
  max-width: 100px;
 
}
.intro {
  
  padding: 15px 0;
  width: 500px;
  
}

header nav ul {
  display: flex;
}

header nav ul li {
  list-style: none;
}

header nav ul li a {
  text-decoration: none;
  color: black;
  text-transform: uppercase;
  font-size: 1.4rem; 
  padding: 2.4rem;
  transition: all 250ms linear 0s;
}

header nav ul li a:hover {
  color:black;
  text-decoration: none;
  background: rgba(255,255,255, 0.15)
}

h2 {
  color: rgb(75, 75, 75);
  font-size: 3.6rem;
  line-height: 4.6rem;
}

h3 {
  color: rgb(75, 75, 75);
  font-size: 2.8rem;
  line-height: 3.8rem;
}

.button {
  display: inline-block;
  font-size: 1.6rem;
  font-weight: 600;
  color: black;
  background-color: rgb(148, 226, 148);
  margin: 15px 0px 0px;
  padding: 12px 30px;
  text-decoration: none;
  border-radius: 5px;
  transition: all 150ms linear 0s;
}

.button:hover {
  color: rgb(255, 255, 255);
  opacity: 0.9;
  text-decoration: none;
}


/*=============== 
HERO
==================*/
section.hero {
  margin: 80px 0;
}
#chuvisca {
  width: 100%; /* com isso imagem ocupará toda a largura da tela. Se colocarmos height: 100% também, a imagem irá distorcer */
  
 
}

section.hero .container {
  width: 90%;
  max-width: 980px;

  margin: auto;

  display: flex;
}

section.hero p {
  color: rgb(154, 142, 191);
  font-size: 1.8rem;
  line-height: 3.2rem;
  margin: 10px 0px 0px;
}


section.hero img {
  width: 200px;
}



/*=============== 
MAIN
==================*/
main {
  margin-bottom: 80px;
}
/*=============== 
CARDS
==================*/
.cards {
  width: 90%;
  max-width: 980px;
  margin: auto;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;

  padding-bottom: 20px;
}

.text--medium {
  font-size: 1.6rem;
  line-height: 2.6rem;
  font-weight: 400;
  color: black;
}

* .card {
  display: flex;
  flex-direction: column;
  background-color: #c4302b;
  cursor: pointer;
  transition: all 0.3s ease 0s;

}

.card:hover, .produto:hover {
  transform: translateY(-7px);
}

.image {
  width: 100%;
  padding-top: 56.25%; /* 16:9 */

  overflow: hidden;
  position: relative;
}

.image img {
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.content {
  margin: 20px;
}

.title {
  margin-bottom: 20px;
  font-size: 22px;
  font-style: oblique;
}

.info {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.price {
  color: black;
  font-family: Arial, Helvetica, sans-serif;
  margin-left: auto;
  padding: 5px 20px;
  filter: brightness(90%);
}
main h1 {
  color: black;
  font-weight: bold;
}

/*===================
PRODUTOS
====================*/
.produtos{
  width: 90%;
  max-width: 980px;
  margin: auto;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;

  padding-bottom: 20px;
}

.produto {
  display: flex;
  flex-direction: column;
  background-color: rgb(148, 226, 148);
  cursor: pointer;
  transition: all 0.3s ease 0s;

}

/*==================
PARCEIROS
====================*/

.carousel-item {

  
  padding: 0 20px;
}



main h1 {
  padding: 20px;
}

/*=============== 
FOOTER
==================*/
footer {
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  text-align: center;

  padding: 30px;

}

footer .contatos {
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 80vw;
}
footer .intro-end {
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 720px;
  padding: 20px;
  

}
footer .intro-end p {
  font-size: 22px;
  font-style: oblique;
  color: black;
}

.scrollToTop{
    
  -webkit-transition: opacity 0.3s;
  -moz-transition: opacity 0.3s;
  transition: opacity 0.3s;
  background:  rgb(148, 226, 148);
  border-radius: 7px 7px 0 0;
  bottom: 0;
  color: #FFF;
  display: block;
  height: 9px;
  /* opacity: 0.5;*/
  padding: 13px 10px 35px;
  position: fixed;
  right: 10px;
  text-align: center;
  text-decoration: none;
  min-width: 49px;
  z-index: 1040;
}
.scrollToTop:hover {
  text-decoration: none;
  color:#fff;
  opacity: 0.5;
}

/*=============== 
MODAL
==================*/
.modal-overlay {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.6);
  opacity: 0;
  visibility: hidden;
}
.modal-overlay.active {
  opacity: 1;
  visibility: visible;
}
.modal{
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  
  background-color: #fff;
  
  width: 95%;
  height: 95%;
  
  margin: 0 auto;
  padding: 10px;
  
  border-radius: 3px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  
  opacity: 0;
  overflow-y: auto;
  visibility: hidden;
  
  transition: all 0.6s cubic-bezier(0.55, 0, 0.1, 1);
  transform: scale(1.2);
}
.modal .close-modal {
  position: absolute;
  cursor: pointer;

  top: 5px;
  right: 15px;
  
  opacity: 0;
  
  transition: opacity 0.6s cubic-bezier(0.55, 0, 0.1, 1), transform 0.6s cubic-bezier(0.55, 0, 0.1, 1);
  transition-delay: 0.3s;
}

/*=================*/



.modal .close-modal svg {
  width: 18px;
  height: 18px;
}
.modal .modal-content {
  border: 0;
  opacity: 0;
  transition: opacity 0.6s cubic-bezier(0.55, 0, 0.1, 1);
  transition-delay: 0.3s;
}
.modal.active {
  visibility: visible;
  opacity: 1;
  transform: scale(1);
}
.modal.active .modal-content {
  opacity: 1;
}
.modal.active .close-modal {
  transform: translateY(10px);
  opacity: 1;
}

.video-background {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -99;
  background-color: white;
}
.video-foreground,
.video-background iframe {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 90%;
  transform: translate(-50%, -50%);
}

/*====================
tentando fazer modar produtos funcionar
*/
.modal-overlay-produto {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.6);
  /*
  opacity: 0;
  */
  visibility: hidden;
  background: black;
}

.modal-produto.active{
  opacity: 1;
  visibility: visible;
}

.modal-produto {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  
  background-color:rgb(209, 213, 209);
  
  width: 95%;
  height: 95%;
  
  margin: 0 auto;
  padding: 10px;
  
  border-radius: 3px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  
  opacity: 0;
  overflow-y: auto;
  visibility: hidden;
  
  transition: all 0.6s cubic-bezier(0.55, 0, 0.1, 1);
  transform: scale(1.2);
}


.modal-overlay-produto  .close-modal-produto {
  position: fixed;
  cursor: pointer;

  top: 5px;
  right: 15px;
  
  opacity: 0;
  
  transition: opacity 0.6s cubic-bezier(0.55, 0, 0.1, 1), transform 0.6s cubic-bezier(0.55, 0, 0.1, 1);
  transition-delay: 0.3s;
  z-index: -99;
}


.modal-overlay-produto .close-modal-produto svg {

  width: 18px;
  height: 18px;
}
.modal-produto .modal-produto-content {
  border: 0;
  opacity: 0;
  transition: opacity 0.6s cubic-bezier(0.55, 0, 0.1, 1);
  transition-delay: 0.3s;
}
.modal-produto.active {
  visibility: visible;
  opacity: 1;
  transform: scale(1);
}
.modal-produto.active .modal-produto-content {
  opacity: 1;
}
.modal-produto.active .close-modal-produto {
  transform: translateY(10px);
  opacity: 1;
}
.modal-produto-content img {
  margin: 20px;
  width: 300px;
}
.modal-produto .cont-description {
  display: flex;
  flex-direction: column;
 /* background-color: red;*/
  margin-top: 20px;
 
}
.modal-produto .cont-description p,h1{
 padding: 10px;
}



/*=============== 
FORM
==================*/
#form {
  width:100%;

  background: #7159c1;
  padding: 80px 0;
  margin:0;

  display:flex;
  align-items: center;
  justify-content: center;
}

#form form {
  width: 90%;
  max-width: 980px;

  background: white;
  
  padding: 40px;
  
  box-shadow: 0px 2px 2px 2px rgba(0, 0, 0, 0.15), 
    0px 10px 20px -10px rgba(0, 0, 0, 0.1)
}

#form h3 {
  margin-bottom: 30px
}

#form form label {
  display: none;
}

.form-group {
  display: flex;
  flex-direction: row;
}

.form-group label.right-inline {
  text-align: right;  
  padding-right: 8px;
  padding-left: 10px;
  width: auto;
}

.form-group .input-control {
  flex: 1 1;
  display: block;
  margin: -4px 8px 10px;
  padding: 12px;
  font-size: 1.6rem;
}

#form .button {
  margin: 20px 8px 10px;
}

/* media queries */
html {
    font-size: 50%;
}

@media (max-width: 834px){
    .modal-produto .cont-description {
        
        margin-top:500px;
       
       
      }
}

@media (max-width: 734px){
    .modal-produto .cont-description {
        
        margin-top:400px;
       
       
      }
}


@media (max-width: 720px){
    .modal-produto .cont-description {
        
        margin-top:300px;
       
      }
}

@media (max-width: 630px) {

    .hero .container {
        flex-direction: column;
        text-align: center;
        align-items: center;
    }

    .hero .container img {
        
        order: -1;
    }

    .form-group {
        display: block;
    }
    /*modal produto*/
    .modal-produto .cont-description {
        
        margin-top: 400px;
       
      }
}

@media (max-width: 540px) {
    nav {
        display: none;
    }

    .one,
    .two,
    .three {
        background-color: #fff;
        height: 5px;
        width: 100%;
        margin: 6px auto;

        transition-duration: 0.3s;
    }

    .menu-toggle {
        width: 40px;
        height: 30px;
        margin-right: 20px;
    }

    /* fullscreen */
    .menu-section.on {
        position: absolute;
        top:0;
        left:0;
        
        width: 100vw;
        height: 100vh;

        background-color: #7159c1;
        
        z-index: 10;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .menu-section.on nav {
        display: block;
    }

    .menu-section.on .menu-toggle {
        position: absolute;
        right: 25px;
        top: 15px;
    }

    .menu-section.on .menu-toggle .one {
        transform: rotate(45deg) translate(7px, 7px);
    }

    .menu-section.on .menu-toggle .two {
        opacity: 0;
    }

    .menu-section.on .menu-toggle .three {
        transform: rotate(-45deg) translate(8px, -9px);
    }

    .menu-section.on nav ul {
        text-align: center;
        display: block;
    }

    .menu-section.on nav ul a{
        transition-duration: 0.5s;
        font-size: 3rem;
        line-height: 4rem;
        display: block;
        
    }

    /*modal produto*/
    .modal-produto .cont-description {
        
        margin-top: 500px;
       
      }

}

@media (max-width: 320px) {
    #form h3 {
        font-size: 2rem;
    }
}

`;
