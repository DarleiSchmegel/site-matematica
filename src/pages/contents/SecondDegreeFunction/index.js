import React from 'react';
import '../styles.css';



function SecondDegreeFunction() {

  return (
    <div className="container-covered">
      
      <div className="content-covered">
          <h1>Função de Segundo Grau.</h1>
          <hr/>
          <h4>Tal função pode ser escrita como f(x) = ax² + bx + c</h4>
          <p>A<strong> função de segundo grau</strong>, também chamada de função quadrática ou função polinomial do 2° grau, é escrita como: f(x) = ax² + bx + c. 
          Sendo os coeficientes "a, b e c" números reais e "a" diferente de 0 (zero). 
          </p>
          <p>
          O grau da função é determinado de acordo com o maior expoente que a incógnita x assume. 
          Ou seja, se em uma função a incógnita x não tiver nenhum expoente, 
          ela é classificada como de primeiro grau, mas se ela tiver o número dois como maior expoente, ela é classificada como de segundo grau.
          </p>

          <p>Confira abaixo alguns tipos de funções polinomiais: </p>

          <ul>
            <li> 
              <strong>Função de primeiro grau:</strong> f(x) = ax + b. Exemplo: f(x) = 2x + 1;
            </li>
            <li>
              <strong>Função de segundo grau:</strong> f(x) = ax² + bx+ c. Exemplo: f(x)= 4x² – 2x;
            </li>
            <li>
              <strong>Função de terceiro grau:</strong> f(x) = ax³ + bx² + cx + d. Exemplo: f(x) 2x³ + x² + 2x + 1; 
            </li>
          </ul>
          <p>
          A função de segundo grau é ordenada de forma decrescente em relação aos seus expoentes. 
          Confira como acontece a organização dela:
          </p>

          <ul>
            <li>
            <strong>f(x) = bx+ ax² + cx°:</strong> os expoentes que acompanham a incógnita x são respectivamente: 1, 2 e 0;
            </li>
            <li>
            <strong>f(x) = ax² + bx + cxº=0:</strong> deve-se organizar de forma decrescente os valores dos expoentes que acompanham as incógnitas;
            </li>
            <li>
            <strong>f(x) = ax² + bx + c = 0:</strong> sabendo que qualquer valor elevado ao expoente 0 (zero) é 1, temos cxº= c, logo 1 = c. 
            </li>
          </ul>

          <h4>Função de segundo grau completa e incompleta</h4>
          <p>Uma função de segundo grau pode ser classificada como completa se todos os seus coeficientes (a, b e c) forem diferentes de 0 (zero). </p>
          <p>Exemplos:</p>
          <div className="example">
            <p>
              f(x) = 2x² + 2y+ 1 --{'>'} a = 2, b = 2 e c = 1
            </p>
            <p>
              f(x) = x² + 4y+ 6 --{'>'} a = 1, b = 4 e c = 6
            </p>
          </div>

          <p>A função de segundo grau também pode ser classificada como incompleta se um dos coeficientes, b ou c, forem iguais a 0 (zero). </p>
          <p>Exemplos:</p>
          <div className="example">
            <p>
              f(x) = 2x² + 2 --{'>'}  a = 2, b = 0 e c = 2
            </p>
            <p>
              f(x) = 5x² --{'>'} a = 5, b = 0 e c = 0
            </p>
          </div>


          <h4>Gráfico da função de segundo grau</h4>
          <p>
          A representação gráfica da função de segundo grau é uma parábola. Se a {'>'} 0, a concavidade da parábola estará voltada para cima e se a {'<'} 0, a concavidade da parábola estará voltada para baixo.
          </p>
          <div className="img-covered">
            <img src="https://upload.wikimedia.org/wikipedia/commons/e/eb/Concavidade_para_cima.jpg" alt=""/>
            <p>a {'>'} 0. (Foto: Wikipédia)</p>
          </div>
          <div className="img-covered">
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/09/Concavidade_para_baixo.jpg" alt=""/>
            <p>a {'<'} 0. (Foto: Wikipédia)</p>
          </div>
          <p>A parábola apresenta alguns elementos essenciais: as raízes (pontos onde o gráfico intercepta o eixo x) e o vértice (ponto de máximo ou mínimo a função). </p>
          <p>
            <strong>Vértice</strong> - para identificar o valor do vértice deve-se as fórmulas abaixo:
          </p>
          <div className="img-covered">
            <img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/a659a723b9bf7a5ddc07a6a83a609750f2e570c4" alt=""/>
            <p>Pontos do vértices</p>
          </div>
          <p>Onde, &Delta; = b² - 4ac e:</p>
          <p>De acordo com &Delta; é possível prever em quantos pontos o eixo x será interceptado:</p>
        
          <ul>
            <li>
              Se &Delta; {'>'} 0, a função tem duas raízes reais distintas e a parábola intercepta o eixo x em dois pontos diferentes;
            </li>
            <li>
            Se &Delta; = 0, a função tem duas raízes reais iguais e a parábola é tangente ao eixo x;
            </li>
            <li>
            Se &Delta; {'<'} 0, a função não tem raízes reais e a parábola não intercepta o eixo x;            
            </li>
          </ul>

          <p><strong>Raízes</strong> - já para encontrar as raízes da função é mais simples, basta utilizar a <a href="#">fórmula de Bhaskara</a>:</p>
          <div className="img-covered">
            <img src="https://wikimedia.org/api/rest_v1/media/math/render/svg/00c22777378f9c594c71158fea8946f2495f2a28" alt=""/>
            <p>Fórmula de Bhaskara</p>
          </div>

          <h4>Estudo dos coeficientes "b e c"</h4>
          <p>
            Os coeficientes da equação são elementos que interferem na construção do gráfico. 
            O coeficiente “a”, como já explicado, determina a concavidade da parábola. 
          </p>

          <p>
            Enquanto o coeficiente “c” indica onde a parábola corta o eixo Y, estabelecendo as seguintes relações:
          </p>
          <ul>
            <li>
              Se <strong>c{'>'}0</strong>, a parábola irá cortar o eixo Y acima da origem;
            </li>
            <li>
              Se <strong>c{'<'}0</strong>, a parábola irá cortar o eixo Y abaixo da origem;
            </li>
            <li>
              Se <strong>c=0</strong>, a parábola irá cortar o eixo Y na origem, ou seja, ponto (0,0).
            </li>
          </ul>

          <p>
            Já o coeficiente “b” determina a inclinação da parábola após passar o eixo y, estabelecendo as seguintes relações:
          </p>
          <ul>
            <li>
              Se <strong>b{'<'}0</strong>, a partir do ponto de corte do eixo Y a curvatura da parábola irá descer;
            </li>
            <li>
              Se <strong>b{'>'}0</strong>, a partir do ponto de corte do eixo Y a curvatura da parábola irá subir;
            </li>
            <li>
              Se <strong>b=0</strong>, após o ponto de corte não haverá inclinações. 
            </li>
          </ul>

         


        </div>


      </div>
  );
}

export default SecondDegreeFunction;