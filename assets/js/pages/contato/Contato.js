import { infos } from '../../Infos.js'
import { montarElemento } from "../../Functions.js";

export function Contato(){
  var root = document.getElementById('root')
  var section = montarElemento('section', 'contato')  
  var conteudo =  `
  <div class="contato__img">
    ${infos.contact.imagem}
    </div>
    <form action="" class="contato__form" data-form>
    <fieldset>
    <legend class="contato__titulo">${infos.contact.titulo}</legend>
    <p class="contato__subtitulo">${infos.contact.texto1}</p>
    <p class="contato__subtitulo">${infos.contact.texto2}</p>
    <input class="contato__input contato__nome" type="text" name="nome" id="name" placeholder="Digite seu nome" required>
    <label class="contato__input--label" for="name">Digite su nombre</label>
    <input class="contato__input contato__email" type="email" name="email" id="email" placeholder="digite seu email" required>
    <label class="contato__input--label" for="email">Digite su email</label>
    <input class="contato__input contato__assunto" type="text" name="assunto" id="honeypot" placeholder="assunto" required>
    <label class="contato__input--label" for="honeypot">Asunto</label>
    <textarea class="contato__input contato__texto" name="mensagem" required placeholder="Mensaje"/></textarea>
    <input class="experiencia__container--btn dark contato__input" type="submit" value="Enviar mensaje" data-enviar>
    </fieldset>
    </form>
    `
    section.innerHTML = conteudo;
    root.appendChild(section); 
  }

  