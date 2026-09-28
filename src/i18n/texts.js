// Every visible string lives here. Both languages must keep the same shape
// (enforced by texts.test.js).

const links = {
  github: 'https://github.com/ViniiSouza',
  linkedin: 'https://www.linkedin.com/in/vinicius-gabriel-de-souza/',
  whatsapp: 'https://wa.me/5547996458019',
  source: 'https://github.com/ViniiSouza/my-portfolio',
}

const resume = {
  pt: 'https://drive.google.com/file/d/17qtNu3I_ipZLUlbefznrRozJGI4a2Nwv/view?usp=sharing',
  en: 'https://drive.google.com/file/d/1XOa4Or4heizqa4aWNHwvkqRCGL4BTOwj/view?usp=sharing',
}

export const contact = {
  email: 'contact@souzavinicius.com',
  phone: '+55 47 99645-8019',
  links,
}

export const texts = {
  pt: {
    meta: {
      htmlLang: 'pt-BR',
      resumeUrl: resume.pt,
    },
    nav: {
      skip: 'Pular para o conteúdo',
      label: 'Navegação principal',
      projects: 'Projetos',
      stack: 'Stack',
      about: 'Sobre',
      contact: 'Contato',
      language: 'Idioma',
    },
    hero: {
      name: 'Vinícius Souza',
      role: 'Backend Engineer,',
      roleHighlight: 'C# e .NET',
      lead: 'Há 4 anos construo sistemas críticos de negócio, da API ao banco de dados. Gosto de entender o problema antes de abrir o editor.',
      ctaProjects: 'Ver projetos',
      ctaResume: 'Baixar currículo',
      aside: 'Moro em Blumenau (UTC-3) e trabalho remoto, em português ou inglês. Aberto a vagas de backend e full stack.',
    },
    projects: {
      title: 'Projetos',
      lead: 'Projetos pessoais e acadêmicos, todos com código aberto. Os trechos de código abaixo foram tirados direto dos repositórios.',
      repoLabel: 'Ver no GitHub',
      codeLabel: 'Trecho de código',
      featured: {
        title: 'Maritime Flow',
        kind: 'Sistemas distribuídos',
        description: 'Controle de tráfego marítimo simulado por seis serviços em Go, C#, Python e Node. Torres de controle elegem um líder, coordenam a reserva de vagas e continuam operando quando um nó cai.',
        points: [
          'Eleição de líder no estilo Bully, com o uptime como critério',
          'Lock com lease e fencing: um líder que caiu pode ser substituído',
          'Saga com compensação quando o lock no líder falha',
          'Escala via GitOps: criar uma torre gera os manifests e o Kubernetes sobe o pod',
        ],
        techs: ['Go', 'C# / .NET 8', 'Python', 'RabbitMQ', 'PostgreSQL', 'Kubernetes', 'Prometheus', 'OpenSearch'],
        repo: 'https://github.com/ViniiSouza/maritime_flow',
        tabs: {
          architecture: 'Arquitetura',
          election: 'Eleição de líder',
          saga: 'Compensação',
        },
      },
      cards: [
        {
          id: 'face',
          title: 'Face Recognition',
          kind: 'Visão computacional na AWS',
          description: 'Cadastro e identificação 1:N de pessoas com Amazon Rekognition, fotos no S3 e metadados no PostgreSQL. Frontend em Next.js com captura pela câmera.',
          techs: ['.NET 8', 'AWS Rekognition', 'S3', 'PostgreSQL', 'JWT', 'Next.js'],
          repo: 'https://github.com/ViniiSouza/FaceRecognitionBackend',
          file: 'FaceRecognition.Shared/Services/RekognitionService.cs',
        },
        {
          id: 'chitchat',
          title: 'ChitChat',
          kind: 'Tempo real',
          description: 'Chat com SignalR: conversas privadas, presença online, solicitações de mensagem e autenticação JWT, com limite de conexões simultâneas por usuário.',
          techs: ['C#', '.NET 8', 'SignalR', 'Vue.js'],
          repo: 'https://github.com/ViniiSouza/ChitChatBackend',
          file: 'Chat/Hubs/ChatHub.cs',
        },
      ],
      othersTitle: 'Outros projetos',
      others: [
        {
          title: 'Big Data Sweden',
          description: 'Pipeline de Machine Learning distribuído com PySpark, feito em grupo no intercâmbio na Suécia. Mede como núcleos e partições afetam o tempo de treino sem mudar a qualidade do modelo.',
          techs: ['Python', 'PySpark', 'Spark ML'],
          repo: 'https://github.com/ViniiSouza/big_data_sweden',
        },
        {
          title: 'CPU Blaze',
          description: 'Ferramenta de estresse de CPU: engine em C com threads por núcleo e afinidade de CPU, controlada por uma interface em C#.',
          techs: ['C', 'C# / .NET 8'],
          repo: 'https://github.com/ViniiSouza/cpu-blaze',
        },
        {
          title: 'Compiler App',
          description: 'Compilador de uma linguagem própria, com análise léxica, sintática e semântica.',
          techs: ['Java'],
          repo: 'https://github.com/ViniiSouza/compiler-app',
        },
      ],
    },
    stack: {
      title: 'Stack',
      groups: [
        {
          title: 'Uso no dia a dia',
          items: ['C#', '.NET / ASP.NET Core', 'Entity Framework', 'Dapper', 'SQL Server', 'PostgreSQL', 'React', 'TypeScript'],
        },
        {
          title: 'Bom conhecimento',
          items: ['Node.js', 'Vue.js', 'Redis', 'Docker', 'AWS', 'SignalR'],
        },
        {
          title: 'Familiaridade',
          items: ['Kubernetes', 'Terraform', 'Go', 'Python'],
        },
      ],
    },
    about: {
      title: 'Sobre',
      paragraphs: [
        'Sou Backend Engineer em Blumenau, SC, especializado em C#/.NET. Projeto e implemento serviços da API ao banco de dados com Entity Framework e Dapper, e procuro entender o problema e o contexto de negócio antes da primeira linha de código. A experiência full stack com React, TypeScript e Vue.js me permite atuar de ponta a ponta quando precisa.',
        'Em 4 anos construí e modernizei ERPs multi-tenant, autenticação biométrica com AWS Rekognition, recursos em tempo real com SignalR e plataformas industriais. Numa rotina de processamento de documentos, reestruturei as consultas SQL e o tempo caiu de 120 para 40 segundos. Também atuei como referência técnica de um time de três desenvolvedores, com cerca de 20 revisões de PR por semana.',
      ],
      educationTitle: 'Formação',
      education: [
        { title: 'Ciência da Computação, FURB', meta: 'Bacharelado, conclusão prevista em jun/2027' },
        { title: 'Halmstad University, Suécia', meta: 'Intercâmbio acadêmico, jan a jun/2026' },
        { title: 'AWS Certified AI Practitioner', meta: 'Certificação AWS, 2026' },
      ],
    },
    contact: {
      title: 'Contato',
      lead: 'O jeito mais rápido de falar comigo é por e-mail ou LinkedIn.',
      copy: 'Copiar e-mail',
      copied: 'E-mail copiado',
      resume: 'Baixar currículo',
    },
    footer: {
      source: 'Código deste site',
    },
  },

  en: {
    meta: {
      htmlLang: 'en',
      resumeUrl: resume.en,
    },
    nav: {
      skip: 'Skip to Content',
      label: 'Main navigation',
      projects: 'Projects',
      stack: 'Stack',
      about: 'About',
      contact: 'Contact',
      language: 'Language',
    },
    hero: {
      name: 'Vinícius Souza',
      role: 'Backend Engineer,',
      roleHighlight: 'C# and .NET',
      lead: "For 4 years I've built business-critical systems, from the API down to the database. I like to understand the problem before opening the editor.",
      ctaProjects: 'View Projects',
      ctaResume: 'Download Resume',
      aside: "Based in Blumenau, Brazil (UTC-3). I work remotely, in Portuguese or English, and I'm open to backend and full stack roles.",
    },
    projects: {
      title: 'Projects',
      lead: 'Personal and academic projects, all open source. The code snippets below come straight from the repositories.',
      repoLabel: 'View on GitHub',
      codeLabel: 'Code snippet',
      featured: {
        title: 'Maritime Flow',
        kind: 'Distributed systems',
        description: 'Maritime traffic control simulated by six services in Go, C#, Python and Node. Control towers elect a leader, coordinate slot reservations and keep running when a node goes down.',
        points: [
          'Bully-style leader election, using uptime as the metric',
          'Lease-based locking with fencing, so a crashed leader can be replaced',
          'Saga with a compensating step when the leader lock fails',
          'GitOps scaling: creating a tower renders manifests and Kubernetes starts the pod',
        ],
        techs: ['Go', 'C# / .NET 8', 'Python', 'RabbitMQ', 'PostgreSQL', 'Kubernetes', 'Prometheus', 'OpenSearch'],
        repo: 'https://github.com/ViniiSouza/maritime_flow',
        tabs: {
          architecture: 'Architecture',
          election: 'Leader election',
          saga: 'Compensation',
        },
      },
      cards: [
        {
          id: 'face',
          title: 'Face Recognition',
          kind: 'Computer vision on AWS',
          description: '1:N face registration and identification with Amazon Rekognition, photos on S3 and metadata in PostgreSQL. Next.js frontend with camera capture.',
          techs: ['.NET 8', 'AWS Rekognition', 'S3', 'PostgreSQL', 'JWT', 'Next.js'],
          repo: 'https://github.com/ViniiSouza/FaceRecognitionBackend',
          file: 'FaceRecognition.Shared/Services/RekognitionService.cs',
        },
        {
          id: 'chitchat',
          title: 'ChitChat',
          kind: 'Real-time',
          description: 'SignalR chat: private conversations, presence tracking, message requests and JWT authentication, with a per-user limit on concurrent connections.',
          techs: ['C#', '.NET 8', 'SignalR', 'Vue.js'],
          repo: 'https://github.com/ViniiSouza/ChitChatBackend',
          file: 'Chat/Hubs/ChatHub.cs',
        },
      ],
      othersTitle: 'More Projects',
      others: [
        {
          title: 'Big Data Sweden',
          description: 'Distributed Machine Learning pipeline with PySpark, built as a group project during my exchange in Sweden. Measures how cores and partitions affect training time without changing model quality.',
          techs: ['Python', 'PySpark', 'Spark ML'],
          repo: 'https://github.com/ViniiSouza/big_data_sweden',
        },
        {
          title: 'CPU Blaze',
          description: 'CPU stress-testing tool: a C engine with per-core threads and CPU affinity, driven by a C# interface.',
          techs: ['C', 'C# / .NET 8'],
          repo: 'https://github.com/ViniiSouza/cpu-blaze',
        },
        {
          title: 'Compiler App',
          description: 'Compiler for a custom language, with lexical, syntactic and semantic analysis.',
          techs: ['Java'],
          repo: 'https://github.com/ViniiSouza/compiler-app',
        },
      ],
    },
    stack: {
      title: 'Stack',
      groups: [
        {
          title: 'Daily drivers',
          items: ['C#', '.NET / ASP.NET Core', 'Entity Framework', 'Dapper', 'SQL Server', 'PostgreSQL', 'React', 'TypeScript'],
        },
        {
          title: 'Solid working knowledge',
          items: ['Node.js', 'Vue.js', 'Redis', 'Docker', 'AWS', 'SignalR'],
        },
        {
          title: 'Familiar with',
          items: ['Kubernetes', 'Terraform', 'Go', 'Python'],
        },
      ],
    },
    about: {
      title: 'About',
      paragraphs: [
        "I'm a Backend Engineer based in Blumenau, Brazil, specialized in C#/.NET. I design and build services from the API to the database with Entity Framework and Dapper, and I make a point of understanding the problem and its business context before writing the first line of code. Full stack experience with React, TypeScript and Vue.js lets me work end to end when needed.",
        'Over 4 years I have built and modernized multi-tenant ERPs, biometric authentication with AWS Rekognition, real-time features with SignalR and industrial platforms. On a document processing routine, I restructured the SQL queries and cut the run time from 120 to 40 seconds. I was also the technical reference for a team of three developers, reviewing around 20 pull requests a week.',
      ],
      educationTitle: 'Education',
      education: [
        { title: 'B.Sc. Computer Science, FURB', meta: 'Expected June 2027' },
        { title: 'Halmstad University, Sweden', meta: 'Academic exchange, Jan to Jun 2026' },
        { title: 'AWS Certified AI Practitioner', meta: 'AWS certification, 2026' },
      ],
    },
    contact: {
      title: 'Contact',
      lead: 'The fastest way to reach me is e-mail or LinkedIn.',
      copy: 'Copy E-mail',
      copied: 'E-mail copied',
      resume: 'Download Resume',
    },
    footer: {
      source: 'Source Code',
    },
  },
}
