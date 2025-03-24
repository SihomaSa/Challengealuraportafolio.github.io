import { infos } from '../../Infos.js'
import { montarElemento } from "../../Functions.js";


export function Voluntariado() {
  
  const section = montarElemento('section','sobre-mim');
  section.classList.add('voluntariado')

  const h2 = montarElemento('h2', 'voluntariado__titulo');
  h2.textContent = 'Voluntariado';
  h2.setAttribute('id','Voluntariado')

  section.appendChild(h2);

  const divContainer = montarElemento('div', 'voluntariado__container');
  section.appendChild(divContainer);

  infos.voluntariado.map((element)=>{
    const divContainerCard = montarElemento('div', 'voluntariado__card');
    const divContainerImg = montarElemento('div', 'voluntariado__container--img');
    const img = montarElemento('img', 'voluntariado__img');
    img.src = element.imagem;
    img.alt = element.acessibilidade;
    divContainerImg.appendChild(img);
    divContainerCard.appendChild(divContainerImg);
    const paragrafo1 = montarElemento('p', 'voluntariado__info');
    paragrafo1.textContent = element.nome
    const paragrafo2 = montarElemento('p', 'voluntariado__ano');
    paragrafo2.textContent = element.status;
    divContainerCard.appendChild(paragrafo1);
    divContainerCard.appendChild(paragrafo2);

    divContainer.appendChild(divContainerCard)
  })

  var root = document.getElementById('root')
  root.appendChild(section); 

}
