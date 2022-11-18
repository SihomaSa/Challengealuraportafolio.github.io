import { montarElemento } from "../../Functions.js";

export function Sobre() {
  
  const section = montarElemento('section','sobre-mim');
  const h2 = montarElemento('h2','sobre-mim__titulo');
  const paragrafo1 = montarElemento('p','sobre-mim__texto');
  const paragrafo2 = montarElemento('p','sobre-mim__texto');
  const paragrafo3 = montarElemento('p','sobre-mim__texto');
  h2.textContent = 'Sobre mí'
  h2.setAttribute('id','Sobre mí')
  
  paragrafo1.textContent = 'Empecé mis estudios con programación a inicios de 2022. Comenzando con HTML y CSS, desarrollado en un curso de la universidad. Esto despertó mi interés por el desarrollo.'

  paragrafo2.textContent = 'En agosto del 2022, gané dos becas para ser desarrolladora FullStack y FrontEnd en Becas Bicentenario y en Alura ONE Education respectivamente, estoy aprendiendo más sobre HTML, CSS, Javascript y JAVA, Spring, Angular y entre otros. Con mucho esmero espero lograr la meta  y trabajar como desarrolladora.';
  paragrafo3.textContent = "SSOC"

  section.appendChild(h2)
  section.appendChild(paragrafo1)
  section.appendChild(paragrafo2)
  section.appendChild(paragrafo3)

  
  var root = document.getElementById('root')
  root.appendChild(section);

}

 