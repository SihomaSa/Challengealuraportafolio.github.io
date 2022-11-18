  import { infos } from '../../Infos.js'
  import { montarElemento } from "../../Functions.js"; 

  // import img from '../../../assets/img/seta'
    
  export function Header() {
    
    const section = montarElemento('header','header');
  
    const divSobre = montarElemento('div', 'sobre');
    const h1 = montarElemento('h1', 'sobre__titulo');
    h1.textContent = `Hola, mi nombre es ${infos.nome} y estoy aprendiendo a construir páginas webs`;

    const paragrafo = montarElemento('p', 'sobre__infos');
    paragrafo.textContent = ``;

    section.appendChild(divSobre);
    divSobre.appendChild(h1)
    divSobre.appendChild(paragrafo)
    

    const divLinks = montarElemento('div', 'sobre__links'); 

    infos.redesSociais.forEach((element) => {
      
      const containerSpan = montarElemento('span', 'sobre__social');
      const link = montarElemento('a', 'sobre__social--link');
      link.href= element.link
      link.target="_blank"
      link.textContent=element.redeSocial
  
      const imgLink = montarElemento('img', 'sobre__social--img');
      imgLink.src =  `assets/img/seta.png`
      imgLink.alt =  `Clique para acessar o meu ${element.redeSocial}`
  
      divLinks.appendChild(containerSpan)
      containerSpan.appendChild(link)
      link.appendChild(imgLink)
    }) 
    divSobre.appendChild(divLinks)
    
    const divAvatar = montarElemento('div', 'sobre__avatar');
    const imgAvatar = montarElemento('img', 'sobre__avatar--img');
    imgAvatar.src =  infos.imgPerfil;
    imgAvatar.alt =  `Foto do rosto de um homem sorridente, de pele negra e cabelo raspado.`;
    
    section.appendChild(divAvatar)
    divAvatar.appendChild(imgAvatar)
    
    var root = document.getElementById('root')
    root.appendChild(section);

  }
  
   
  
  