import { infos } from '../../Infos.js'
import { montarElemento } from "../../Functions.js";


export function SkillsAndHobbies(text) {  
  var obj = chooseData(text)
  
  var section = montarElemento('section','card');
  const h3 = montarElemento('h3','card__titulo');  
  h3.innerHTML = text;  
  h3.setAttribute('id', text)

  section.appendChild(h3);

  const divContainer = montarElemento('div','card__container');
  section.appendChild(divContainer)

  obj.forEach((element) => {    

    const cardContainer = montarElemento('div','card__cards');
    cardContainer.innerHTML = element.svg;

    cardContainer.firstElementChild.classList.add('cards__img')

    const paragrafo = montarElemento('p','cards__info');
    paragrafo.innerHTML = element.name;

    divContainer.appendChild(cardContainer)
    cardContainer.appendChild(paragrafo);

  });

  section.appendChild(divContainer);

  var root = document.getElementById('root')
  root.appendChild(section);

}


function chooseData(text){
  if(text.toLocaleLowerCase() == 'skills'){
    return infos.cards.skills
  }  
    return infos.cards.hobbies  
}