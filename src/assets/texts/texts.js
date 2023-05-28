export default {
    en: {
        appInfo: {
            description: 'This website was created with VueJS',
            projectLink: 'Project in GitHub',
        },
        knowledge: {
            title: 'Knowledge',
            text: `I'm always looking for learning, improving myself in technologies I already know and learning new technologies necessary for my daily routines. My role today is with an emphasis on the backend, but I have already worked as a fullstack. Below are the technologies I use the most.`,
            techs: [
                {
                  title: "C Sharp",
                  description: "Knowledge in classes, OOP (objects, encapsulation, inheritance, polymorphism, abstraction, etc.), partial classes, interfaces, exception handling. Use of Entity Framework working code first (or not), inherited classes, with creation and maintenance of CRUD's, tables, link between tables 1:1, N:1, N:N; Use of LINQ, with performative projections in databases and several other uses. SignalR for seamless connections and real-time updates. Use of external libraries in the projects worked on, etc. API projects, class libraries, console, windows forms, etc.",
                  imgSrc: "https://i.imgur.com/FXkCnmH.png"
                },
                {
                  title: "VueJS",
                  description: "Component creation and maintenance, route management, HTTP requests, conditional rendering, dynamic components, component styling, properties, methods, directives, vuex, and other integrations with the backend; Daily use of CompositionAPI and OptionsAPI; Vue2 and knowledge in Vue3;",
                  imgSrc: "https://i.imgur.com/VOQvATc.png"
                },
                {
                  title: "JavaScript",
                  description: "Functions, classes, loops, conditions, destructuring, DOM manipulations, axios and other general uses along with the frameworks I use.",
                  imgSrc: "https://i.imgur.com/pSYaNdY.png"
                },
                {
                  title: "SQL",
                  description: "Database manipulations, tables, columns and data. Filters in general, table relationships, primary and foreign keys, joins, etc.",
                  imgSrc: "https://i.imgur.com/esMeynM.png"
                },
                {
                  title: "React",
                  description: "Knowledge in components, props, conditional rendering, events, hooks, contextAPI, react-router-dom, forms with formik, yup, etc.",
                  imgSrc: "https://i.imgur.com/iUV9fDa.png"
                },
                {
                  title: "Bootstrap",
                  description: "Using bootstrap elements, styling single elements, using bootstrap classes for document styling, using joint libraries (vue-bootstrap, angular-bootstrap), etc.",
                  imgSrc: "https://i.imgur.com/QcoruCz.png"
                },
                {
                  title: "HTML",
                  description: "Structures with semantic tags, form creations, accessibility, etc.",
                  imgSrc: "https://i.imgur.com/UKCDmJf.png"
                },
                {
                  title: "CSS",
                  description: "Element styling, animations, pseudo-elements, advanced selectors, media queries, etc.",
                  imgSrc: "https://i.imgur.com/QyM1XAK.png"
                },
                {
                  title: "TypeScript",
                  description: "Uses with Angular with component management, method creations, etc.",
                  imgSrc: "https://i.imgur.com/t4grEz4.png"
                },
                {
                  title: "Angular",
                  description: "Knowledge in component creation and maintenance, route management, SPA, HTTP requests, ngModel, etc.",
                  imgSrc: "https://i.imgur.com/nxWWeEy.png"
                }
              ]
        },
        home: {
            profession: 'Software Developer',
            sectionTitle: 'Hello!',
            sectionSubtitle: 'Welcome to my portfolio!',
            introTitle: 'About me',
            introText: `My name is Vinícius, I'm 20 years old and I live in Blumenau/SC. I always liked computers and technology. I found an area where I can turn something I enjoy into work. I've been studying programming since the beginning of 2021. Since then, I've always tried to learn new technologies to be ready for the job market. I'm a little shy, but with 5 minutes of conversation I can already let go. I am currently studying Bachelor of Computer Science at FURB. I am always looking for evolution and new knowledge.`,
            introCollege: 'Course curriculum'
        },
        projects: {
            title: 'My projects',
            description: `Below are some of the projects I've done, by clicking on the card you can preview the project or access the website where it's hosted`,
            chat: {
                name: 'Insta chat',
                description: `Instant messaging system, where it's possible to chat with other users with synchronous chat updated in real time. The demo is performed on only one device, but it's implemented for use among multiple devices and in different places. Project made with Vue 3, C Sharp and SignalR.`,
                concepts: `Use of SignalR for real-time message updates, configured in .NET 6 environment. FrontEnd with VueJS 3, SignalR integration, Bootstrap for styles, and SweetAlert for stylized alerts.`
            },
            mercadoMania: {
                name: 'MarketMania',
                description: `Inventory control system for a market. It's possible to add products, categories, and update inventory. Products can be linked to categories. Project made with Angular and C Sharp (Entity Framework).`,
                concepts: `Use of Entity Framework for database connections and part of the API with REST requests for frontend relationships. FrontEnd made with Angular and Bootstrap library.`
            },
            toDoList: {
                name: 'To Do List',
                description: `Project from DevInHouse course, To-do list. System to include and remove activities, mark them as completed, etc.`,
                concepts: `Use of localStorage to store tasks even after closing/reloading the tab.`
            },
            credit: {
                name: 'Credit to all',
                description: `Profile analysis system for credit availability. Depending on the user's score, a loan approval rate is generated for the requested loan. The user has the option to provide a payment guarantee, increasing the chance of loan approval.`,
                concepts: `Logic made with javascript and frontend made with HTML + Bootstrap.`
            },
            mmo: {
                name: 'DEVINMMO',
                description: `Project from DevInHouse course, game information and news website. Created using React and receiving information from an API with games and news. Word search and pagination system. Comment system stored in localStorage.`,
                concepts: `Revised the use of REST requests, making requests from an external API for use in the project. Comment storage in localStorage. Creation of 3 different themes for the website.`
            },
        }
    },
    pt: {
        appInfo: {
            description: 'Este site foi desenvolvido com VueJS',
            projectLink: 'Projeto no GitHub',
        },
        knowledge: {
            title: 'Conhecimento',
            text: 'Estou sempre em busca de aprendizado, me aprimorando em tecnologias que já conheço e aprendendo novas tecnologias necessárias para o meu dia a dia. Minha atuação hoje é com ênfase em backend, mas já trabalhei como fullstack. Abaixo estão as tecnologias que mais utilizo.',
            techs: [
                {
                  title: "C Sharp",
                  description: "Conhecimento em classes, POO (objetos, encapsulamento, herança, polimorfismo, abstração, etc), partial classes, interfaces, tratamento de exceções. Uso do Entity Framework trabalhando code first(ou não), classes herdadas, com criação e manutenção de CRUD's, tabelas, vínculo entre tabelas 1:1, N:1, N:N; Uso do LINQ, com projeções performáticas em bancos de dados e diversos outros usos. SignalR para conexões contínuas e atualizações em tempo real. Uso de bibliotecas externas nos projetos trabalhados, etc. Projetos de API, bibliotecas de classes, console, windows forms, etc.",
                  imgSrc: "https://i.imgur.com/FXkCnmH.png"
                },
                {
                  title: "VueJS",
                  description: "Criação e manutenção de componentes, gerenciamento de rotas, requisições HTTP, renderizações condicionais, componentes dinâmicos, estilizações de componentes, propriedades, métodos, diretivas, vuex, e demais integrações com o backend; Uso diário de CompositionAPI e OptionsAPI; Vue2 e conhecimentos em Vue3;",
                  imgSrc: "https://i.imgur.com/VOQvATc.png"
                },
                {
                  title: "JavaScript",
                  description: "Funções, classes, loops, condições, destructuring, manipulações de DOM, axios e outros usos gerais juntamente com os frameworks que utilizo.",
                  imgSrc: "https://i.imgur.com/pSYaNdY.png"
                },
                {
                  title: "SQL",
                  description: "Manipulações de banco de dados, tabelas, colunas e dados. Filtros em geral, relacionamento de tabelas, chaves primárias e estrangeiras, joins, etc",
                  imgSrc: "https://i.imgur.com/esMeynM.png"
                },
                {
                  title: "React",
                  description: "Conhecimento em componentes, props, renderização condicional, eventos, hooks, contextAPI, react-router-dom, formulários com formik, yup, etc.",
                  imgSrc: "https://i.imgur.com/iUV9fDa.png"
                },
                {
                  title: "Bootstrap",
                  description: "Utilização de elementos bootstrap, estilizações de elementos únicos, utilização de classes bootstrap para estilização do documento, utilização de bibliotecas conjuntas (vue-bootstrap, angular-bootstrap), etc.",
                  imgSrc: "https://i.imgur.com/QcoruCz.png"
                },
                {
                  title: "HTML",
                  description: "Estruturas com tags semânticas, criações de formulários, acessibilidade, etc.",
                  imgSrc: "https://i.imgur.com/UKCDmJf.png"
                },
                {
                  title: "CSS",
                  description: "Estilizações de elementos, animações, pseudo-elementos, seletores avançados, media queries, etc.",
                  imgSrc: "https://i.imgur.com/QyM1XAK.png"
                },
                {
                  title: "TypeScript",
                  description: "Usos junto ao Angular com gerenciamento de componentes, criações de métodos, etc.",
                  imgSrc: "https://i.imgur.com/t4grEz4.png"
                },
                {
                  title: "Angular",
                  description: "Conhecimento em criação e manutenção de componentes, gerenciamento de rotas, SPA, requisições HTTP, ngModel, etc.",
                  imgSrc: "https://i.imgur.com/nxWWeEy.png"
                }
              ]
        },
        home: {
            profession: 'Desenvolvedor de Software',
            sectionTitle: 'Olá!',
            sectionSubtitle: 'Bem-vindo ao meu portfólio!',
            introTitle: 'Sobre mim',
            introText: 'Meu nome é Vinícius, tenho 20 anos e moro em Blumenau/SC. Sempre gostei de computadores e tecnologia. Encontrei uma área em que posso transformar algo que gosto em trabalho. Estudo programação desde o início de 2021. Desde lá, procuro sempre aprender tecnologias novas para estar pronto para o mercado de trabalho. Sou um pouco tímido, mas com 5 minutos de conversa já consigo me soltar. Atualmente estou cursando Bacharelado em Ciências da Computação, na FURB. Estou sempre em busca de evolução e de novos conhecimentos.',
            introCollege: 'Grade curricular do curso'
        },
        projects: {
            title: 'Meus Projetos',
            description: 'Abaixo estão alguns dos projetos que fiz, ao clicar no card, você pode visualizar uma prévia do projeto ou acessar o site em que ele está hospedado',
            chat: {
                name: 'Chat instantâneo',
                description: `Sistema de chat instantâneo, onde é possível conversar com outros usuários, com um bate-papo síncrono e atualizado em tempo real. A demonstração é feita em apenas um dispositivo, mas é implementado para o uso entre vários dispositivos e em diferentes lugares. Projeto feito com Vue 3, C Sharp e SignalR.`,
                concepts: `Uso do SignalR para a atualização das mensagens em tempo real, configurado no ambiente .NET 6. FrontEnd com VueJS 3, integração do SignalR, bootstrap para estilos e sweetalert para alertas estilizados.`
            },
            mercadoMania: {
                name: 'MercadoMania',
                description: `Sistema de controle de estoque de um mercado. É possível adicionar produtos, categorias e alterar estoque. Os produtos podem ser vinculados às categorias. Projeto feito com Angular e C Sharp (Entity Framework).`,
                concepts: `Uso do Entity Framework para conexões com o banco e parte de API com requisições REST para relacionamento com o frontend. FrontEnd feito com Angular e biblioteca Bootstrap.`
            },
            toDoList: {
                name: 'To Do List',
                description: `Projeto do curso DevInHouse, To-do list. Sistema para incluir e remover atividades, marcá-las como concluídas, etc.`,
                concepts: `Uso do localStorage para armazenar tarefas mesmo após fechar/recarregar a guia.`
            },
            credit: {
                name: 'Crédito para todxs',
                description: `Sistema de análise de perfil para disponibilização de crédito. Conforme pontuação do usuário, é gerada uma taxa de aprovação do empréstimo solicitado. Usuário tem a opção de fornecer uma garantia de pagamento, aumentando a chance de aprovação do empréstimo.`,
                concepts: `Lógica feita com javascript e frontend feito com HTML + Boostrap.`
            },
            mmo: {
                name: 'DEVINMMO',
                description: `Projeto do curso DevInHouse, site de informações de jogos e notícias sobre jogos. Criado utilizando React e recebendo informações de uma API com os jogos e notícias. Sistema de busca por palavras e paginação. Sistema de comentários armazenados em localStorage.`,
                concepts: `Revisado o uso das requisições REST, fazendo requisições de uma API externa para uso no projeto. Armazenamento de comentários em localStorage. Criação de 3 temas diferentes para o site.`
            },
        }
    }
}