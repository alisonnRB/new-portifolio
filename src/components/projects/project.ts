import ihm from '../../assets/projects/ihm_page.png';
import ihmB from '../../assets/projects/ihm_layout.png';

import palabraria from '../../assets/projects/palabraria_page.png';
import palabrariaB from '../../assets/projects/palabraria_layout.png';

import ligths from '../../assets/projects/ligths_page.png';

import myQuest from '../../assets/projects/myQuest_page.png';

import colorAnalist from '../../assets/projects/colorAnalist_page.png';
import colorAnalistB from '../../assets/projects/colorAnalist_layout.png';


const listProj = 
[
    {
        name: "IHM",
        tag: "front",
        describe: "O IHM É UM REDE SOCIAL LITERARIA QUE PERMITE A INTERAÇÃO ENTRE OS LEITORES E ESCRITORES, PERMITINDO A CRIAÇÃO DE LIVROS, POSTS E CHATS. COM DIVERSOS SISTEMAS DE EDIÇÃO E CUSTOMIZAÇÃO",
        describeEn: "IHM IS A LITERARY SOCIAL NETWORK THAT ALLOWS INTERACTION BETWEEN READERS AND WRITERS, ALLOWING THE CREATION OF BOOKS, POSTS AND CHATS. WITH VARIOUS EDITING AND CUSTOMIZATION SYSTEMS",
        site: "https://literary-ihm.com/",
        repository: "https://github.com/alisonnRB/IHM",
        more: ['REACT', "JAVASCRIPT", "RESTFULL", "WEBSOCKET", "TOKEN AUTH", "GOOGLE AUTH", "HTML", "CSS"],
        img: ihm,
    },
    {
        name: "IHM-SERVER",
        tag: "back",
        describe: "O IHM SERVER É UM SERVIDOR DESENVOLVIDO PARA ADMINISRAR AS INFORMAÇÔES DO PROJETO IHM, UMA REDE SOCIAL LITERARIA QUE PERMITE A INTERAÇÃO ENTRE OS LEITORES E ESCRITORES, PERMITINDO A CRIAÇÃO DE LIVROS, POSTS E CHATS.",
        describeEn: "IHM SERVER IS A SERVER DEVELOPED TO MANAGE INFORMATION FROM THE IHM PROJECT, A LITERARY SOCIAL NETWORK THAT ALLOWS INTERACTION BETWEEN READERS AND WRITERS, ALLOWING THE CREATION OF BOOKS, POSTS AND CHATS.",
        site: "",
        repository: "https://github.com/alisonnRB/Server-IHM",
        more: ["PHP", "SQL", "RESTFULL", "WEBSOCKET", "TOKEN AUTH", "GOOGLE AUTH", "HASH"],
        img: ihmB,
    },
    {
        name: "PALABRARIA",
        tag: "front",
        describe: "O PROJETO PALAVRAS É DICIONÁRIO ILUSTRADO VIRTUAL E GRATUITO DA LÍNGUA ESPANHOLA, COM O OBJETIVO DE AMPLIAR O REPERTÓRIO LINGUÍSTICO DE MANEIRA COLABORATIVA COM AS INSTITUIÇÕES EDUCACIONAIS.",
        describeEn: "THE WORDS PROJECT IS A FREE VIRTUAL ILLUSTRATED DICTIONARY OF THE SPANISH LANGUAGE, WITH THE AIM OF EXPANDING THE LINGUISTIC REPERTOIRE IN A COLLABORATIVE WAY WITH EDUCATIONAL INSTITUTIONS.",
        site: "",
        repository: "https://github.com/alisonnRB/new-palabraria",
        more: ["REACT", "JAVASCRIPT", "RESTFULL", "TOKEN AUTH", "SASS", "HTML"],
        img: palabraria,
    },
    {
        name: "PALABRARIA SERVER",
        tag: "back",
        describe: "O PALABRARIA SERVER É UM SERVIDOR PROJETO PARA CATALOGAR E GERENCIAR AS PALAVRAS DO DICIONÁRIO PALABRIA, RESPONSAVEL POR GERENCIAR A HIERARQUIA DE MODERAÇÃO",
        describeEn: "THE PALABRARIA SERVER IS A SERVER DESIGNED TO CATALOG AND MANAGE THE WORDS IN THE PALABRARIA DICTIONARY, RESPONSIBLE FOR MANAGING THE MODERATION HIERARCHY",
        site: "",
        repository: "https://github.com/alisonnRB/Palabraria-server-POO",
        more: ["PHP", "SQL", "POO", "RESTFULL", "TOKEN AUTH", "HASH"],
        img: palabrariaB,
    },
    {
        name: "MY QUEST",
        tag: "front",
        describe: "O MYQUEST É UM FERRAMENTA CRIADA PARA AUXILIAR NO ESTUDO DAS MAIS DIVERSAS ÁREAS, UTILIZANDO DE INTELIGENCIA ARTIFICIAL PARA GERAR UM QUIS DE PERGUNTAS SOBRE QUALQUER TEMA.",
        describeEn: "THE MYQUEST IS A TOOL CREATED TO ASSIST IN THE STUDY OF THE MOST DIVERSE AREAS, USING ARTIFICIAL INTELLIGENCE TO GENERATE A SERIES OF QUESTIONS ON ANY TOPIC.",
        site: "https://my-quest-sigma.vercel.app/",
        repository: "https://github.com/alisonnRB/myQuest",
        more: ["ANGULAR", "TYPESCRIPT", "POO", "RESTFULL", "TAILWIND", "HTML"],
        img: myQuest,
    },
    {
        name: "COLOR-ANALIST",
        tag: "front",
        describe: "O PROJETO ANALIST-COLOR É UMA INTERFACE CRIADA PARA INTEGRAR COM A API ANALIST-COLOR E DEMONSTRAR A SUA CAPACIDADE DE IDENTIFICAR CORES DE IMAGENS, SENDO UMA FERRAMENTA PARA DEVS E DESIGNERS.",
        describeEn: "THE ANALIST-COLOR PROJECT IS AN INTERFACE CREATED TO INTEGRATE WITH THE ANALIST-COLOR API AND DEMONSTRATE ITS ABILITY TO IDENTIFY IMAGE COLORS, BEING A TOOL FOR DEVS AND DESIGNERS",
        site: "https://analist-color.vercel.app/",
        repository: "https://github.com/alisonnRB/Interface-analist-color",
        more: ["VUE", "JAVASCRIPT", "RESTFULL", "POO", "HTML", "SASS"],
        img: colorAnalist,
    },
    {
        name: "COLOR-ANALIST API",
        tag: "back",
        describe: "O PROJETO COLO-ANALIST É UMA API CAPAZ DE IDENTIFICAR CORES E PALETAS DE UMA IMAGEM E RETONAR SEUS VALORES HRX E RGB PARA SER UTILIZADO EM DESIGNS MAIS CUSTOMIZADOS DE PÁGINAS WEB.",
        describeEn: "THE COLO-ANALIST PROJECT IS AN API CAPABLE OF IDENTIFYING COLORS AND PALETTES OF AN IMAGE AND RETURNING THEIR HRX AND RGB VALUES TO BE USED IN MORE CUSTOMIZED WEB PAGE DESIGNS.",
        site: "",
        repository: "https://github.com/alisonnRB/Color-Analist-laravel",
        more: ["LARAVEL", "PHP", "RESTFULL", "POO"],
        img: colorAnalistB,
    },
    {
        name: "LIGHTS",
        tag: "front",
        describe: "LIGHTS É UMA JOGO DE MEMORIZAÇAO BASEADA EM LUZES, QUE GERA VARIAÇÕES E DIFICULDADES DIFERENTES.",
        describeEn: "LIGHTS IS A MEMORIZATION GAME BASED ON LIGHTS, WHICH GENERATES DIFFERENT VARIATIONS AND DIFFICULTIES.",
        site: "https://portifolio-nu-azure.vercel.app/",
        repository: "https://github.com/alisonnRB/Portifolio",
        more: ["REACT", "JAVASCRIPT", "SASS", "HTML"],
        img: ligths,
    },
];

export {listProj};