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
          <ul >
            <li>
              <h4>1º caso de fatoração: colocação de um termo em evidência</h4>
              <p>Vamos fatorar 3a² + 3ab.</p>
              <p><strong>3a</strong> é o fator comum às duas parcelas de 3a² + 3ab. Assim:</p>
              <p>3a² + 3ab = 3a(a + b) </p>

              <p>Em 4x + 6, o 2 é o fator comum das duas parcelas. Então, 4x + 6 = 2(2x + 3)</p>
              <p></p>
              <p>Exercícios resolvidos.</p>
              <p> a) 6x²y² -9x²y + 15xy²</p>
              <p>
                Nesse caso o fator comum é o <strong>3xy</strong>, 
                com isso 6x²y²/3xy = 2xy,  -9x²y/3xy = -3x e 15xy²/3xy = 5y. Assim:
              </p>
              <p>6x²y² -9x²y + 15xy² =  3xy(2xy - 3x + 5y)</p>

              <p></p>
              <p>b) x(x - 4) + 6(x - 4)</p>
              <p>fator comum <strong>(x - 4)</strong>, assim: </p>
              <p>x(x - 4) + 6(x - 4) = (x - 4).(x + 6)</p>

              <p></p>
              <p>c) 2x² + 4xy</p>
              <p>fator comum <strong>2x</strong>, assim: </p>
              <p>2x² + 4xy = 2x(x + 2y)</p>

              <p></p>
              <p>d) 7a³ +  14ab</p>
              <p>fator comum <strong>7a</strong>, assim:</p>
              <p>7a³ +  14ab = 7a(a² + 2b)</p>

            </li>
            <li>
              <h4>2º caso de fatoração: agrupamento</h4>
              <p>
                Analise com atenção a expressão algébrica de quatro termos ax + 2a + 5x + 10. 
                Não existe um fator comum aos quatro termos.
                Mas, agrupando-os de forma conveniente, podemos fazer a sua fatoração aplicando duas vezes
                o 1° caso de fatoração. Veja:
              </p>
              <p>ax + 2a + 5x + 10</p>
              <p>(ax + 2a) + (5x + 10)</p>
              <p>a(x + 2) + 5(x + 2)</p>
              <p>(x + 2).(a + 5)</p>

              <p></p>
              <p>Veja outros exempos:</p>
              <ul>
                <li>
                  <p>ab + a - bx - x</p>
                  <p>a(b + 1) - x(b + 1)</p>
                  <p>(b + 1)(a - x)</p> 
                </li>
                <li>
                  <p>a² - 5a + a - 5</p>
                  <p>a(a - 5) + 1(a - 5)</p>
                  <p>(a - 5).(a + 1)</p>

                </li>
                <li>
                  <p>x³ - 2x² + x + x²y - 2xy + y</p>
                  <p>(x³ - 2x² + x) + (x²y - 2xy + y)</p>
                  <p>x(x² - 2x + 1) + y(x² - 2x + 1)</p>
                  <p>(x² - 2x + 1).(x + y)</p>
                </li>
              </ul>
              <p>Exercício proposto resolvido.</p>
              <p>Fatore as expressões seguintes usando a fatoraçãopor agrupamento:</p>
                <p>
                  a) 2x² - 4x + 3xy - 6y
                </p>
                  
                  <p>2x(x - 2) + 3y(x - 2)</p>
                  <p>(x - 2).(2x + 3y)</p>
                 
                <p>b) a² - a - ab + b</p>
                  
                    <p>a(a -1) - b(a - 1)</p>
                    <p>(a - 1).(a - b)</p>
                 
                
              
              <p>	Fatore a expressão algébrica (3x + 5)(x - 2) + (3x + 5)²</p>
              
                <p>(3x + 5)(x - 2) + (3x + 5)(3x + 5)</p>
                <p>(3x + 5).[(3x + 5) + (x - 2)]</p>
                <p>(3x + 5).(4x + 3)</p>
      
            </li>
            <li>
              <h4>3º caso de fatoração: trinômio quadrado perfeito</h4>
              <p>
                No estudo dos produtos notáveis você viu que o quadrado da soma e o quadrado da diferença de dois termos
                nos dão trinômios como resultados. Por exemplo:
              </p>
              <ul>
                <li>(x + 5)² = x² + 10 + 25</li>
                <li>(3x + 10)² = 9x² + 60x + 100</li>
                <li>(a - 7)² = a² - 14a + 49</li>
                <li>(4x - 9y)² = 16x² - 72xy + 81y²</li>
              </ul>
              <p>
                Cada um dos trinômios obtidos é conhecido por trinômio quadrado perfeito. 
                O caminho inverso do que aparece acima é a fatoração do trinômio. Veja:
              </p>
              <ul>
                <p className="formula"> a² + 2ab + b² = (a + b)²</p>
                <li>
                  <p>x² + 10x + 25 = (x)² + 2.(x).(5) +(5)² = (x + 5)²</p>
                  
                </li>
                <li>
                  <p>16x² - 72xy + 81y² = (4x)² -2.(4x).(9x) + (9y)² = (4x - 9y)²</p>
                </li>
              </ul>
              <p>
                Exercícios propostos resolvidos
              </p>
                <p>a)x² + 16x + 64 </p>           
                <p>resposta (x)² +2.(x).(8) + (8)² = (x + 8)²</p>

                <p>b)49x² - 14x + 1</p>
                <p>resposta (7x)² -2.(7x).(1) + (1)²= (7x - 1)²</p>

                <p>c)9x² +12xy + 4y²</p>
                <p>resposta (3x)² +2.(3x).(2y) + (2y)² = (3x + 2y)²</p>
                <p>d)a² + 2ab + b²</p>
                <p>resposta (a + b)² </p> 
              
            </li>

            <li>
              	<h4>4º caso de fatoração: diferença de dois quadrados</h4>
             	<p>
                Você já viu que o produto da soma pela diferença dos mesmos termos é um produto 
                notável e que seu resultado é igual à diferença entre o quadrado do 
                1° termo e o quadrado do 2° termo. Por exemplo:
              </p>
              <p className="formula">(a + b)(a - b) = a² - b²</p>
              <ul>
                <li>(x + 8)(x -8) = x² - 64</li>
                <li>(5x + 9)(5x - 9) = 25x² - 81</li>
                <li>(7x + y)(7x - y) = 49x² - y²</li>
                <li>(10 + a)(10 - a) = 100 - a² </li>
              </ul>
              <p>Resolução de exercícios propostos.</p>
              <ul>
                <li>
                  Escreva as diferenças como produto de uma soma por
                  uma diferença dos mesmos termos:
                  <p>
                    a) 9x² - 16y² = (3x + 4y)(3x - 4y)
                  </p>
                  <p>
                    b) 4a²b² - 9x²y² = (2ab + 3xy)(2ab - 3xy)
                  </p>
                  <p>
                    c) x² - 1/36 = (x + 1/6)(x - 1/6)
                  </p>
                  <p>
                    d) 1/4 - 4a²b² = (1/2 + 2ab)(1/2 - 2ab)
                  </p>
                </li>
                <li>
                  Fatore a expressão (3x + 4)² - (2x -1)².
                  <p>
                    [(3x + 4) + (2x - 1)].[(3x + 4) - (2x -1)]
                    (5x + 3)(x + 5)
                  </p>
                </li>
                <li>
                  Faça a fatoração das expressões abaixo:
                  <p>a) 3x² - 15x = (√3.x + √(15x))(√3.x - √(15x))</p>
                  <p>9x² - 25 = (3x + 5)(3x -25)</p>
                </li>
					
				      </ul>
            </li>

            <li>
              <h4>5° caso de fatoração: soma de dois cubos</h4>
              <p>
                Veja o que acontece quando multiplicamos a soma de dois termos por um trinômio formado pelo quadrado
                do 1‚ termo, menos o produto do 1‚ pelo 2‚ e mais o quadrado do 2‚ termo:
              </p>
              <ul>
                <li>
                  (x + y)(x² -xy + y²) = x³ -  x²y + xy² + yx² - xy² + y³ = x³ + y³ 
                  ,temos cubo de 'x' e cubo de 'y' como resposta.

                </li>
                <li>
                  (5x + 2)(25x² - 10x + 4) = 125x³ -50x² + 20x + 50x² - 20x + 8 = 125x³ + 8 ,
                  temos cubo de '5x' e cubo de '2' como resposta.
                </li>
				      </ul>
				      <p>O caminho inverso do que aparece acima é mais um caso de fatoração (soma de dois cubos). Veja:</p>
              <ul>
                <li>x³ + y³ = (x + y)(x² -xy + y²)</li>
                <li>125x³ + 8 = (5x + 2)(25x² - 10x + 4)</li>
              </ul>
				      <p>Exercícios propostos resolvidos:</p>
              <p>
                Fatore as expressões que indicam soma de dois cubos:
              </p>
					
						  <p>a) a³ + 1000</p>
							<p>temos cubo de 'a' e cubo de '10', com isto</p>
							<p>a³ + 1000 = (a + 10)(a² -10a + 10²)</p>
						
							<p>b) 27x³ + 1</p>
							<p>temos cubo de '3x' e cubo de '1', com isto</p>
							<p>27x³ + 1 = (3x +1)(9x² - 3x.1 + 1²)</p>
					
						  <p>c) 8x³ + y³</p>
							<p>temos cubo de '2x' e cubo de y, com isto</p>
							<p>8x³ + y³ = (2x + y)(4x² - 2xy + y²)</p>
						
						  OBS.: Use a distributiva para fazer a prova real. 
				
					
				
			      </li>

            <li>
              <h4>6° caso de fatoração: diferença de dois cubos</h4>
              <p>O raciocínio é o mesmo do caso anterior:</p>
              <ul>
                <li>
                  (x - y)(x² +xy + y²) = x³ + x²y + xy² -yx² - xy² - y³ = x³ - y³ ,
                  onde temos cubo de 'x' e cubo de 'y'.
                </li>
                <li>
                  (3x - 5)(9x² +15x + 25) = 27x³ + 45x² + 75x - 45x² - 75x - 125 = 27x³ - 125 ,
                  onde temos cubo de '3x' e cubo de '5'
                </li>
              </ul>
              <p>
                Fazendo o caminho inverso temos o caso de fatoração para expressões que indicam a diferença de dois cubos:
              </p>
              <ul>
                <li>x³ - y³ = (x - y)(x² +xy + y²)</li>
                <li>27x³ - 125 = (3x - 5)(9x² +15x + 25)</li>
              </ul>
              <p>
                Exercício proposto resolvido
              </p>	
              <p>
                Faça a fatoração das diferenças entre dois cubos:
              </p>
              <p>
                a) x³ - 64
              </p>

							<p>Temos o cubo de 'x' e o cubo de '4', com isto</p>
							<p>x³ - 64 = (x - 4)(x² + 4x + 4²)</p>
						
              <p>
                b) 8a³ - 1
              </p>
							<p>Temos o cubo de '2x' e o cubo de '1', com isto</p>
							<p>8x³ -1 = (8x - 1)((2x)² + 2x.1 + 1²) = (4x² + 2x + 1) </p>
						
              <p>
                c) 27x³ - 125y³
              </p>
							<p>Temos o cubo de '3x e o cubo de '5y', com isto</p>
							<p>(27x³ - 125y³) = (3x - 5y)((3x)² + 3x.5y + (5y)²) = (3x - 5y)(9x² +15xy + 25y²)</p>
						
					
				
			      </li>

            <li>
              <h4>7° caso de fatoração: fatoração de expressões quadráticas</h4>
              <p>
                Quando multiplicamos (x + 3) por (x + 2) obtemos x² + 5x + 6 , ou seja: 
              </p>
              <p className="formula">(x + 3)(x + 2) = x² + 5x + 6</p>
              <p>
                O processo inverso, ou seja, partindo de x² + 5x + 6 para chegar a (x + 3)(x + 2),
                é chamado <i> fatoração da expressão quadrática</i> x² + 5x + 6.
              </p>
              <p>Veja alguns exemplos de fatoração de expressãoes quadráticas:</p>
              <ul>
                <li>
                  x² + 6x + 8
                  <p>Devemos encontrar dois números cujo produto é 8 e cuja soma é 6. Esses números são 4 e 2. Então,</p>
                  <p>x² + 6x + 8 = (x + 2)(x + 4)</p>
                </li>
                <li>
                  x² - 6x + 8
                  <p>
                    Devemos encontrar dois números cujo produto é 8 e cuja soma é -6.
                    Esses números são -2 e -4. Então,
                  </p>
                  <p>x² - 6x + 8 = (x - 2)(x - 4)</p>
                </li>
              </ul>
              <p>Exercício proposto resolvido</p>
              <p>
                Fatore as expressões quadráticas:
              </p>
              <p>
                a) x² + 7x + 10
              </p>
              <p>
                Devemos encontrar dois números cujo produto é 10 e cuja soma é 7.
                Esses números são 5 e 2. Então, 
              </p>
              <p>x² + 7x + 10 = (x + 5)(x + 2)</p>
              

              <p>
                b) x² + 3x - 10
              </p>
              <p>
                Devemos encontrar dois números cujo produto é -10 e cuja soma é 3.
                Esses números são 5 e -2. Então,
              </p>
              <p>
                x² + 3x - 10 = (x + 5)(x -2) 
              </p>
					
              <p>
                c) b² - 4b - 21
              </p>
                <p>
                  Devemos encontrar dois números cujo produto é -21 e cuja soma é -4.
                  Esses números são -7 e 3. Então,
                </p>
                <p>
                  b² - 4b - 21 = (b - 7)(b + 3)
                </p>
					
				
			      </li>
          </ul>
			
      </div>
    </div>
  )
}

export default Factorization;