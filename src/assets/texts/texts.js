export default {
    en: {
        appInfo: {
            description: 'This website was created with VueJS',
            projectLink: 'Project in GitHub',
        },
        knowledge: {
            title: 'Knowledge',
            text: `I'm always looking for learning, improving myself in technologies I already know and learning new technologies necessary for my daily routines. My role today is with an emphasis on the backend, but I have already worked as a fullstack. Below are the technologies I use the most.`,
            areas: [
                { text: 'All', value: 'all' },
                { text: 'Back-end', value: 'backend' },
                { text: 'DevOps/Infrastructure', value: 'devops' },
                { text: 'Front-end', value: 'frontend' }
            ],
            techs: [
                {
                    id: 'csharp',
                    title: "C Sharp",
                    description: "Knowledge in classes, OOP (objects, encapsulation, inheritance, polymorphism, abstraction, etc.), partial classes, interfaces, exception handling. Use of Entity Framework working code first (or not), inherited classes, with creation and maintenance of CRUD's, tables, link between tables 1:1, N:1, N:N; Use of LINQ, with performative projections in databases and several other uses. SignalR for seamless connections and real-time updates. Use of external libraries in the projects worked on, etc. API projects, class libraries, console, windows forms, etc.",
                    imgSrc: "https://i.imgur.com/S8I0J4D.png",
                    area: "backend",
                },
                {
                    id: 'vuejs',
                    title: "VueJS",
                    description: "Component creation and maintenance, route management, HTTP requests, conditional rendering, dynamic components, component styling, properties, methods, directives, vuex, and other integrations with the backend; Daily use of CompositionAPI and OptionsAPI; Vue2 and knowledge in Vue3;",
                    imgSrc: "https://i.imgur.com/hkyOatn.png",
                    area: "frontend"
                },
                {
                    id: 'sql',
                    title: "SQL",
                    description: "Database manipulations, tables, columns and data. Filters in general, table relationships, primary and foreign keys, joins, etc.",
                    imgSrc: "https://i.imgur.com/49NGDKg.png",
                    area: "backend",
                },
                {
                    id: 'awsservices',
                    title: "AWS Services",
                    description: "Knowledge in RDS and EC2, managing user groups, roles, VPC's, subnets, security groups and more.",
                    imgSrc: "https://i.imgur.com/w1sr2tW.png",
                    area: "devops"
                },
                {
                    id: 'docker',
                    title: "Docker",
                    description: "Knowledge in creating Docker Compose, Dockerfile, shell scripts for container automation, etc.",
                    imgSrc: "https://i.imgur.com/zHfIPsI.png",
                    area: "devops"
                },
                {
                    id: 'react',
                    title: "React",
                    description: "Knowledge in components, props, conditional rendering, events, hooks, contextAPI, react-router-dom, forms with formik, yup, etc.",
                    imgSrc: "https://i.imgur.com/UiiNh2d.png",
                    area: "frontend"
                },
                {
                    id: 'javascript',
                    title: "JavaScript",
                    description: "Functions, classes, loops, conditions, destructuring, DOM manipulations, axios and other general uses along with the frameworks I use.",
                    imgSrc: "https://i.imgur.com/N5M2V1h.png",
                    area: "frontend"
                },
                {
                    id: 'bootstrap',
                    title: "Bootstrap",
                    description: "Using bootstrap elements, styling single elements, using bootstrap classes for document styling, using joint libraries (vue-bootstrap, angular-bootstrap), etc.",
                    imgSrc: "https://i.imgur.com/yX555KZ.png",
                    area: "frontend"
                },
                {
                    id: 'html',
                    title: "HTML",
                    description: "Structures with semantic tags, form creations, accessibility, etc.",
                    imgSrc: "https://i.imgur.com/un10rGr.png",
                    area: "frontend"
                },
                {
                    id: 'css',
                    title: "CSS",
                    description: "Element styling, animations, pseudo-elements, advanced selectors, media queries, etc.",
                    imgSrc: "https://i.imgur.com/TBdHWr3.png",
                    area: "frontend"
                },
                {
                    id: 'typescript',
                    title: "TypeScript",
                    description: "Uses with Angular with component management, method creations, etc.",
                    imgSrc: "https://i.imgur.com/2AYM02p.png",
                    area: "frontend"
                },
                {
                    id: 'angular',
                    title: "Angular",
                    description: "Knowledge in component creation and maintenance, route management, SPA, HTTP requests, ngModel, etc.",
                    imgSrc: "https://i.imgur.com/si2CcC2.png",
                    area: "frontend"
                }
            ]
        },
        home: {
            profession: 'Software Developer',
            sectionTitle: 'Hello!',
            sectionSubtitle: 'Welcome to my portfolio!',
            introTitle: 'About me',
            introText: `My name is Vinícius, I'm 20 years old and I live in Blumenau, Santa Catarina, Brazil. As a software developer, I have experience in both backend and frontend, covering different technologies and frameworks. I have solid knowledge in React, Angular and Vue.js, applied in the development of attractive, responsive and well-structured interfaces. In the backend, I highlight my experience in C#, implementing services from the API to the database connection efficiently, with Entity Framework and Dapper, using the available resources in the best way, with high scalability. I am driven by the constant search for improvement and I see each new challenge as an opportunity for learning and professional growth. I am currently doing a bachelors degree in computer Science at FURB.`,
            introCollege: 'Course curriculum'
        },
        presentation: {
          introduction: 'Hi, I am',
          title1: 'Fullstack',
          title2: 'Developer',
          description1: 'Software Developer with more',
          description2: 'than 2 years of solid experience.'
        },
        projects: {
            title: 'My projects',
            description: `Some of my most notable projects`,
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
            areas: [
                { text: 'Todas', value: 'all' },
                { text: 'Back-end', value: 'backend' },
                { text: 'DevOps/Infraestrutura', value: 'devops' },
                { text: 'Front-end', value: 'frontend' }
            ],
            techs: [
                {
                    id: 'csharp',
                    title: "C Sharp",
                    description: "Conhecimento em classes, POO (objetos, encapsulamento, herança, polimorfismo, abstração, etc), partial classes, interfaces, tratamento de exceções. Uso do Entity Framework trabalhando code first(ou não), classes herdadas, com criação e manutenção de CRUD's, tabelas, vínculo entre tabelas 1:1, N:1, N:N; Uso do LINQ, com projeções performáticas em bancos de dados e diversos outros usos. SignalR para conexões contínuas e atualizações em tempo real. Uso de bibliotecas externas nos projetos trabalhados, etc. Projetos de API, bibliotecas de classes, console, windows forms, etc.",
                    imgSrc: "https://i.imgur.com/S8I0J4D.png",
                    area: "backend",
                },
                {
                    id: 'vuejs',
                    title: "VueJS",
                    description: "Criação e manutenção de componentes, gerenciamento de rotas, requisições HTTP, renderizações condicionais, componentes dinâmicos, estilizações de componentes, propriedades, métodos, diretivas, vuex, e demais integrações com o backend; Uso diário de CompositionAPI e OptionsAPI; Vue2 e conhecimentos em Vue3;",
                    imgSrc: "https://i.imgur.com/hkyOatn.png",
                    area: "frontend"
                },
                {
                    id: 'sql',
                    title: "SQL",
                    description: "Manipulações de banco de dados, tabelas, colunas e dados. Filtros em geral, relacionamento de tabelas, chaves primárias e estrangeiras, joins, etc",
                    imgSrc: "https://i.imgur.com/49NGDKg.png",
                    area: "backend",
                },
                {
                    id: 'awsservices',
                    title: "AWS Services",
                    description: "Conhecimentos em RDS e EC2, gerenciando grupos de usuários, roles, VPC's, subnets, grupos de segurança e mais.",
                    imgSrc: "https://i.imgur.com/w1sr2tW.png",
                    area: "devops"
                },
                {
                    id: 'docker',
                    title: "Docker",
                    description: "Conhecimentos em criações de Docker Compose, Dockerfile, scripts shell para automação de containers, etc.",
                    imgSrc: "https://i.imgur.com/zHfIPsI.png",
                    area: "devops"
                },
                {
                    id: 'react',
                    title: "React",
                    description: "Conhecimento em componentes, props, renderização condicional, eventos, hooks, contextAPI, react-router-dom, formulários com formik, yup, etc.",
                    imgSrc: "https://i.imgur.com/UiiNh2d.png",
                    area: "frontend"
                },
                {
                    id: 'javascript',
                    title: "JavaScript",
                    description: "Funções, classes, loops, condições, destructuring, manipulações de DOM, axios e outros usos gerais juntamente com os frameworks que utilizo.",
                    imgSrc: "https://i.imgur.com/N5M2V1h.png",
                    area: "frontend"
                },
                {
                    id: 'bootstrap',
                    title: "Bootstrap",
                    description: "Utilização de elementos bootstrap, estilizações de elementos únicos, utilização de classes bootstrap para estilização do documento, utilização de bibliotecas conjuntas (vue-bootstrap, angular-bootstrap), etc.",
                    imgSrc: "https://i.imgur.com/yX555KZ.png",
                    area: "frontend"
                },
                {
                    id: 'html',
                    title: "HTML",
                    description: "Estruturas com tags semânticas, criações de formulários, acessibilidade, etc.",
                    imgSrc: "https://i.imgur.com/un10rGr.png",
                    area: "frontend"
                },
                {
                    id: 'css',
                    title: "CSS",
                    description: "Estilizações de elementos, animações, pseudo-elementos, seletores avançados, media queries, etc.",
                    imgSrc: "https://i.imgur.com/TBdHWr3.png",
                    area: "frontend"
                },
                {
                    id: 'typescript',
                    title: "TypeScript",
                    description: "Usos junto ao Angular com gerenciamento de componentes, criações de métodos, etc.",
                    imgSrc: "https://i.imgur.com/2AYM02p.png",
                    area: "frontend"
                },
                {
                    id: 'angular',
                    title: "Angular",
                    description: "Conhecimento em criação e manutenção de componentes, gerenciamento de rotas, SPA, requisições HTTP, ngModel, etc.",
                    imgSrc: "https://i.imgur.com/si2CcC2.png",
                    area: "frontend"
                }
            ]
        },
        home: {
            profession: 'Desenvolvedor de Software',
            sectionTitle: 'Olá!',
            sectionSubtitle: 'Bem-vindo ao meu portfólio!',
            introTitle: 'Sobre mim',
            introText: 'Meu nome é Vinícius, tenho 20 anos e moro em Blumenau/SC. Como desenvolvedor de software, possuo experiência tanto no backend quanto no frontend, abrangendo diversas tecnologias e frameworks. Tenho conhecimentos sólidos em React, Angular e Vue.js, aplicados no desenvolvimento de interfaces atraentes, responsivas e bem estruturadas. No backend, destaco minha experiência em C#, implementando serviços desde a API até a conexão ao banco de dados de forma eficiente, com Entity Framework e Dapper, utilizando os recursos disponibilizados da melhor forma, com alta escalabilidade. Sou movido pela busca constante de aprimoramento e encaro cada novo desafio como uma oportunidade de aprendizado e crescimento profissional. Atualmente estou cursando bacharelado em Ciências da Computação na FURB.',
            introCollege: 'Grade curricular do curso'
        },
        presentation: {
          introduction: 'Olá, eu sou o',
          title1: 'Fullstack',
          title2: 'Developer',
          description1: 'Desenvolvedor de software com mais',
          description2: 'de 2 anos de sólida experiência.'
        },
        projects: {
            title: 'Meus Projetos',
            description: 'Alguns dos meus projetos mais notáveis',
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