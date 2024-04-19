import react from '../../assets/tecs/react_logo.png';
import vue from '../../assets/tecs/vue_logo.png';
import angular from '../../assets/tecs/angular_logo.png';
import javascript from '../../assets/tecs/javascript_logo.png';
import typescript from '../../assets/tecs/typescript_logo.png';
import laravel from '../../assets/tecs/laravel_logo.png';
import php from '../../assets/tecs/php_logo.png';
import html from '../../assets/tecs/html_logo.png';
import css from '../../assets/tecs/css_logo.png';
import native from '../../assets/tecs/reactNative_logo.png';
import sass from '../../assets/tecs/sass_logo.png';
import git from '../../assets/tecs/git_logo.png';
import python from '../../assets/tecs/python_logo.png';
import sql from '../../assets/tecs/sql_logo.png';
import styled from '../../assets/tecs/styledComponent_logo.png';
import figma from '../../assets/tecs/figma_logo.png';
import tailwind from '../../assets/tecs/tailwind_logo.png';

const tecList =
[
    {
        Name: "REACT",
        logo: react,
        description: "React é uma biblioteca de JavaScript popular para construir interfaces de usuário (UI). Desenvolvida pela Meta, ela é usada para criar componentes reutilizáveis e interativos para páginas web.",
        descriptionEn: "React is a popular JavaScript library for building user interfaces (UI). Developed by Meta, it is used to create reusable and interactive components for web pages.",
        color: "#61DAFB",
    },
    {
        Name: "VUEJS",
        logo: vue,
        description: "Vue é um framework de JavaScript popular para construir interfaces de usuário (UI) interativas e dinâmicas. O Vue é usado para criar componentes reutilizáveis que compõem a interface de uma aplicação web.",
        descriptionEn: "Vue is a popular JavaScript framework for building interactive and dynamic user interfaces (UI). Vue is used to create reusable components that make up the interface of a web application.",
        color: "#41B883",
    },
    {
        Name: "ANGULAR",
        logo: angular,
        description: "Angular é um framework de desenvolvimento de aplicações web mantido pelo Google. Ele permite a criação de aplicativos web robustos, de única página (Single Page Applications - SPAs), com uma arquitetura bem estruturada e baseada em componentes.",
        descriptionEn: "Angular is a web application development framework maintained by Google. It allows the creation of robust, single-page web applications (Single Page Applications - SPAs), with a well-structured, component-based architecture.",
        color: "#DD1B16"
    },
    {
        Name: "JAVASCRIPT",
        logo: javascript,
        description: "JavaScript é uma linguagem de programação de alto nível, leve e interpretada. Ela é uma das tecnologias mais amplamente utilizadas na web, permitindo interatividade e dinamismo em páginas web.",
        descriptionEn: "JavaScript is a high-level, lightweight, interpreted programming language. It is one of the most widely used technologies on the web, allowing interactivity and dynamism on web pages.",
        color: "#F9DC5C"
    },
    {
        Name: "TYPESCRIPT",
        logo: typescript,
        description: "TypeScript é um superconjunto da linguagem JavaScript que adiciona recursos de tipagem estática, ou seja, permite que você defina tipos para suas variáveis, parâmetros de função e retornos de função. Desenvolvido pela Microsoft, o TypeScript foi projetado para facilitar o desenvolvimento de aplicações JavaScript em larga escala.",
        descriptionEn: "TypeScript is a superset of the JavaScript language that adds static typing capabilities, that is, it allows you to define types for your variables, function parameters, and function returns. Developed by Microsoft, TypeScript is designed to facilitate the development of large-scale JavaScript applications.",
        color: "#3178C6",
    },
    {
        Name: "LARAVEL",
        logo: laravel,
        description: "Laravel é um framework de desenvolvimento web em PHP, projetado para facilitar o desenvolvimento de aplicações web robustas e seguras. Desenvolvido por Taylor Otwell, o Laravel é conhecido por sua elegância, simplicidade e riqueza de recursos.",
        descriptionEn: "Laravel is a PHP web development framework designed to facilitate the development of robust and secure web applications. Developed by Taylor Otwell, Laravel is known for its elegance, simplicity, and feature-richness.",
        color: "#FF2D20"
    },
    {
        Name: "PHP",
        logo: php,
        description: "PHP é uma linguagem de programação de script amplamente usada para o desenvolvimento de aplicações web dinâmicas. Ela é especialmente adequada para o desenvolvimento de sites e aplicações web do lado do servidor.",
        descriptionEn: "PHP is a scripting programming language widely used for developing dynamic web applications. It is especially suitable for developing server-side websites and web applications.",
        color: "#FFFFFF",
    },
    {
        Name: "HTML",
        logo: html,
        description: "HTML (Hypertext Markup Language) é a linguagem padrão para criação e estruturação de páginas web. É uma linguagem de marcação que define a estrutura e o conteúdo de uma página web, incluindo texto, imagens, vídeos, links e outros elementos.",
        descriptionEn: "HTML (Hypertext Markup Language) is the standard language for creating and structuring web pages. It is a markup language that defines the structure and content of a web page, including text, images, videos, links and other elements.",
        color: "#EF642A",
    },
    {
        Name: "CSS",
        logo: css,
        description: "CSS (Cascading Style Sheets) é uma linguagem de estilo utilizada para descrever a apresentação de um documento HTML (ou XML). Em outras palavras, o CSS define como os elementos HTML devem ser exibidos na página web, incluindo layout, cores, fontes e outros aspectos visuais.",
        descriptionEn: "CSS (Cascading Style Sheets) is a style language used to describe the presentation of an HTML (or XML) document. In other words, CSS defines how HTML elements should be displayed on the web page, including layout, colors , fonts and other visual aspects.",
        color: "#2962F1"
    },
    {
        Name: "REACT NATIVE",
        logo: native,
        description: "React Native é um framework de código aberto desenvolvido pelo Facebook que permite criar aplicativos móveis nativos para iOS e Android usando JavaScript e React. Ele permite que os desenvolvedores usem uma única base de código para criar aplicativos para múltiplas plataformas.",
        descriptionEn: "React Native is an open source framework developed by Facebook that allows you to create native mobile applications for iOS and Android using JavaScript and React. It allows developers to use a single codebase to create applications for multiple platforms.",
        color: "#61DAFB",
    },
    {
        Name: "SASS",
        logo: sass,
        description: "Sass (Syntactically Awesome Stylesheets) é um pré-processador de CSS que estende a sintaxe do CSS padrão, oferecendo funcionalidades adicionais e facilitando a criação e manutenção de folhas de estilo para páginas web.",
        descriptionEn: "Sass (Syntactically Awesome Stylesheets) is a CSS preprocessor that extends the syntax of standard CSS, offering additional functionality and making it easier to create and maintain stylesheets for web pages.",
        color: "#CD6799"
    },
    {
        Name: "GIT",
        logo: git,
        description: "Git é um sistema de controle de versão distribuído amplamente utilizado para rastrear as mudanças no código fonte durante o desenvolvimento de software.",
        descriptionEn: "Git is a distributed version control system widely used to track changes to source code during software development.",
        color: "#F05030",
    },
    {
        Name: "PYTHON",
        logo: python,
        description: "Python é uma linguagem de programação de alto nível, interpretada, dinâmica e multiparadigma, é conhecida por sua simplicidade, legibilidade e uma vasta gama de aplicações.",
        descriptionEn: "Python is a high-level, interpreted, dynamic, and multi-paradigm programming language that is known for its simplicity, readability, and wide range of applications.",
        color: "#FFDD54",
    },
    {
        Name: "SQL",
        logo: sql,
        description: "SQL (Structured Query Language) é uma linguagem de programação utilizada para gerenciar e manipular dados em bancos de dados relacionais.",
        descriptionEn: "SQL (Structured Query Language) is a programming language used to manage and manipulate data in relational databases.",
        color: "#0079D6",
    },
    {
        Name: "STYLED COMP.",
        logo: styled,
        description: "Styled Components é uma biblioteca popular de estilização em React. Ela permite que os desenvolvedores criem componentes React com estilos CSS encapsulados, utilizando uma sintaxe baseada em JavaScript e CSS.",
        descriptionEn: "Styled Components is a popular React styling library. It allows developers to create React components with encapsulated CSS styles, using a syntax based on JavaScript and CSS.",
        color: "#8257E6",
    },
    {
        Name: "FIGMA",
        logo: figma,
        description: "Figma é uma ferramenta de design de interfaces de usuário (UI) e experiência do usuário (UX) baseada na nuvem. ",
        descriptionEn: "Figma is a cloud-based user interface (UI) and user experience (UX) design tool.",
        color: "#FF7262"
    },
    {
        Name: "TAILWIND",
        logo: tailwind,
        description: 'Tailwind CSS é um framework de design de código aberto para criação de interfaces de usuário em sites e aplicativos web. Ele difere de outros frameworks CSS, como Bootstrap e Foundation, em sua abordagem "utility-first" (utilitária em primeiro lugar).',
        descriptionEn: 'Tailwind CSS is an open source design framework for creating user interfaces in websites and web applications. It differs from other CSS frameworks such as Bootstrap and Foundation in its "utility-first" approach.',
        color: "#4CB2B5",
    },
];

export {tecList};