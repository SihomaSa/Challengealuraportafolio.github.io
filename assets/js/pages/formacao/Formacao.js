import { infos } from '../../Infos.js'
import { montarElemento } from "../../Functions.js";


export function Formacao() {
  
  const section = montarElemento('section','sobre-mim');
  section.classList.add('formacao')

  const h2 = montarElemento('h2', 'formacao__titulo');
  h2.textContent = 'Formación Académica';
  h2.setAttribute('id','Formación')

  section.appendChild(h2);

  const divContainer = montarElemento('div', 'formacao__container');
  section.appendChild(divContainer);

  infos.formacao.map((element)=>{
    const divContainerCard = montarElemento('div', 'formacao__card');
    const divContainerImg = montarElemento('div', 'formacao__container--img');
    const img = montarElemento('img', 'formacao__img');
    img.src = element.imagem;
    img.alt = element.acessibilidade;
    divContainerImg.appendChild(img);
    divContainerCard.appendChild(divContainerImg);
    const paragrafo1 = montarElemento('p', 'formacao__info');
    paragrafo1.textContent = element.nome
    const paragrafo2 = montarElemento('p', 'formacao__ano');
    paragrafo2.textContent = element.status;
    divContainerCard.appendChild(paragrafo1);
    divContainerCard.appendChild(paragrafo2);

    divContainer.appendChild(divContainerCard)
  })

  var root = document.getElementById('root')
  root.appendChild(section); 

}
