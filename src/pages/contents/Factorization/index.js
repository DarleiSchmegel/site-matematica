import React from 'react';

// import { Container } from './styles';

function Factorization() {
  return (
    <div className="container-covered">
      <div className="content-covered">
        <h1>Fatoração de polinômios </h1>
        <hr/>
        {/* <h4>Principais formulas de potenciação.</h4> */}
        <p>
          Fatoração é um processo utilizado na matemática que consiste em representar um número ou uma expressão como produto de fatores. 
          Ao escrever um polinômio como a multiplicação de outros polinômios, frequentemente conseguimos simplificar a expressão.
        
        </p>
        
        <h3>1. Produtos notáveis</h3>
          <p>
            Alguns produtos que envolvem expressões algébricas apresentam um padrão, uma regularidade em seus resultados. 
            Por isso são conhecidos como produtos notáveis. Conhecendo-os, podemos economizar muitos cálculos.
          </p>
          <p>
            Vamos estudar os produtos notáveis conhecidos por 
            <strong><i>
            quadrado da soma, quadrado da diferença, produto da
            soma pela diferença, cubo da soma e cubo da diferença
            </i>.</strong>
          </p>
          <ul>
            <li>
              <h4>Quadrado de uma soma indicada: (a + b)² ou (a + b)(a + b)</h4>
              <p className="formula">(a + b)² = a² + 2ab + b²</p>
              <p>Exemplo (1):</p>
              <p>(3x + 5)² = (3x)² + 2.(3x).5 + 5²</p>
              <p>(3x + 5)² = 9x² + 30x + 25</p>
              <p></p>
              <p>Exemplo (2):</p>
              <p>(y + 6)² = y² + 2.y.6 + 6²</p>
              <p>(y + 6)² = y² + 12y + 36</p>

            </li>
            <li>
              <h4>Quadrado de uma diferença indicada: (a - b)² ou (a - b)(a - b)</h4>
              <p className="formula">(a - b)² = a² - 2ab + b²</p>

              <p>Exemplo (1):</p>
              <p>(x - 4)² = x² - 2.x.4 + 4²</p>
              <p>(x - 4)² = x² - 8x + 16</p>
              <p></p>
              <p>Exemplo (2):</p>
              <p>(3x -y)² = (3x)² - 2.(3x).y + y²</p>
              <p>(y + 6)² = 9x² - 6xy + y²</p>

            </li>
            <li>
              <h4>Produto de uma soma indicada por uma diferença indicada: (a + b)(a - b)</h4>
              <p className="formula">(a + b)(a - b) = a² - b²</p>
              <p>Exemplo(1):</p>
              <p>(3x + 7)(3x - 7) = (3x)² - (7²)</p>
              <p>(3x + 7)(3x - 7) = 9x² - 49</p>
              
              <p></p>
              <p>Exemplo(2): </p>
              <p>(5x + y)(5x - y) = (5x)² - (y²) </p>
              <p>(5x + y)(5x - y) = 25x² - y² </p>

              <p></p>
              <p>Exemplo(3): </p>
              <p>(x² + x)(x² - x) = (x²)² - (x²)</p>
              <p>(x² + x)(x² - x) = x^4 - x²</p>  {/*x4voltar aqui */}
             
            </li>
            <li>
              <h4>Cubo de uma soma indicada: (a + b)³</h4>
              <p className="formula">(a + b)³ = a³ + 3(a²)b + 3a(b²) + b³</p>
              <p>Exemplo(1):</p>
              <p>(x + 3)³ = x³ + 3.x².3 + 3.x.3² + 3³ = x³ + 9x² + 27x + 27</p>
              
              <p></p>
              <p>Exemplo(2):</p>
              <p>(2a + b)³ = (2a)³ + 3.(2a)².b + 3.2a.b² + b³ = 8a³ + 12a²b + 6ab² + b³</p>
            </li>

            <li>
              <h4>Cubo de uma diferença indicada: (a - b)³</h4>
              <p className="formula">(a - b)³ = a³ - 3a²b + 3ab² - b³</p>
              <p>Exemplo(1):</p>
              <p>(x - 4)³ = x³ - 3.x².4 + 3.x.4² - 4³ = x³ -12x² + 48x - 64</p>

              <p></p>
              <p>(3x - y)³ = (3x)³ - 3.(3x)².y + 3.(3x).y² - y³ = 27x³ -27x²y + 9xy² - y³</p>
            </li>
          </ul>

          <h3>2. Fatoração de expressões algébricas</h3>
          <p>Fatorar uma expressão algébrica é transformá-la em um produto.</p>
          <p>Existem vários casos de fatoração que devem ser utilizados de acordo com as características da expressão
            algébrica a ser fatorada.
          </p>
          {/* slide 13 */}

      </div>
    </div>
  )
}

export default Factorization;