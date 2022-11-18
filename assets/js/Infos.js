import { vba, js, react, html, css, java, violao, correr, leitura, programar, cantar, viajar, contato } from "./Icons.js"

export const dataBase = (cor) => {
  return {
    nome: "Sihomara Ochoa",
    email: "sihomi2620@gmail.com",
    imgPerfil: 'assets/img/me.png',
    redesSociais: [{
      redeSocial: "Github ",
      link: "https://github.com/SihomaSa",
    },
    {
      redeSocial: "Linkedin ",
      link: "https://www.linkedin.com/in/sihomara-sandy-ochoa-cisneros/",
    },
    {
      redeSocial: "Instagram ",
      link: "https://www.instagram.com/sihomaochoa/",
    },
    {
      redeSocial: "Currículum ",
      link: "https://drive.google.com/file/d/1yHgoikKSymXmhIw1Tw1ZtdFUnePSQGCR/view?usp=share_link",
    }],
    seta: "assets/img/seta.png",
    cards: {
      skills: [
        {
          name: "Javascript",
          svg: js(),
        },
        {
          name: "Html",
          svg: html(),
        },
        {
          name: "Css",
          svg: css(),
        },
        {
          name: "Java",
          svg: java(),
        },
      ],
      hobbies: [
        {
          name: "Deportes",
          svg: correr(),
        },
        {
          name: "Lectura",
          svg: leitura(),
        },
        {
          name: "Cantar",
          svg: cantar(),
        },
        {
          name: "Programar",
          svg: programar(),
        }

      ]
    },
    formacao: [
      {
        imagem: 'https://www.unsch.edu.pe/identidad/assets/images/logo-horizontal-png-600x333.png',
        nome: 'Ingeniería de Sistemas',
        status: '2018 - Dejado temporalmente',
        acessibilidade: 'Texto com a palavra: Descomplica! Descomplica é uma faculdade digital.'
      },
      {
        imagem: 'https://www.certus.edu.pe/wp-content/uploads/2018/12/certus-logo-1-01-copy-3@2x.png',
        nome: 'Beca Bicentenario - FullStack',
        status: '2022 - En curso',
        acessibilidade: 'Imagem de um certificado de conclusão de curso da instituição, Danki Code.'
      },
      {
        imagem: 'https://www.alura.com.br/assets/img/challenges/oracle-one/share_image.1647533644.jpg',
        nome: 'Front-End',
        status: '2022 - En curso',
        acessibilidade: 'Imagem de um certificado de conclusão de curso da instituição Alura.'
      }
    ],
    experiencia: [
      {
        imagem: '/img/',
        titulo: 'Certus Ahorcado',
        subtitulo: '2022 - Proyecto de Selección',
        demo: "https://github.com/SihomaSa/CERTUS_AHORCADO.github.io",
        repositorio: "https://github.com/SihomaSa/CERTUS_AHORCADO.github.io",
        acessibilidade: 'Imagen de Certus ahorcado.'
      },
      {
        imagem: 'https://drive.google.com/uc?export=view&id=1JIq9sZeo87WMxVwP7oXu2k1k4SYwOThO',
        titulo: 'Alura Challenge 1',
        subtitulo: '2022 - Encriptador',
        demo: "https://sihomasa.github.io/Encriptador-ONE-G3.github.io/",
        repositorio: "https://github.com/SihomaSa/Encriptador-ONE-G3.github.io",
        acessibilidade: 'Página de venda de produtos'
      },
      {
        imagem: 'https://drive.google.com/uc?export=view&id=1TWxpIF8tj6SIgjes5bCytDm3AAApm07A',
        titulo: 'Alura Challenge 2',
        subtitulo: '2022 - Reto del Ahorcado',
        demo: "https://sihomasa.github.io/ChalengeAluraAhorcado/",
        repositorio: "https://github.com/SihomaSa/ChalengeAluraAhorcado",
        acessibilidade: 'Imagem de animais fictícios do desenho pokémon.'
      },



    ],
    contact: {
      imagem: contato(),
      titulo: 'Contáctame',
      texto1: '¿Quieres comunicarte  conmigo?',
      texto2: 'Escribe el  formulario, estaré en contacto lo más pronto posible'
    }

  }
}

export const infos = dataBase();
