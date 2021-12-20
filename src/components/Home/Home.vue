<template>
  <div id="home-content">
    <div id="author-section">
      <p id="author-name">Vinícius G. de Souza</p>
      <p id="author-subtitle">Desenvolvedor de Software</p>
    </div>
    <div id="header-section">
      <h1 id="header-title">Olá!</h1>
      <h3 id="header-subtitle">Bem-vindo ao meu portfólio!</h3>
    </div>
    <div id="intro-section">
      <h3 id="intro-title">Introdução</h3>
      <p id="intro-text">
        Meu nome é Vinícius, tenho 19 anos e moro em Blumenau/SC. Sempre gostei
        de computadores e tecnologia. Encontrei uma área em que posso
        transformar um gosto em trabalho. Estudo programação desde o início de
        2021. Desde lá, procuro sempre aprender tecnologias novas para estar
        pronto para o mercado de trabalho. Sou um pouco tímido, mas
        com 5 minutos de conversa já consigo me soltar. Sou engraçado, parceiro
        e amigo para todas as horas. Atualmente estou fazendo um curso
        full-stack de extensão profissional pelo SENAI, o DevInHouse. Até o fim
        do curso irei aprender React, C-Sharp, Docker e mensageria. Estou sempre
        em busca de evolução e de novos conhecimentos.
      </p>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
#home-content {
  font-family: Calibri, sans-serif;
}
#author-section {
  font-family: "Staatliches", sans-serif;
  text-align: center;
  transition: 1.5s;
}
#author-section:hover {
  color: white;
  background-color: #212529;
  transition: color 2s;
  transition: background-color 0.8s;
}
#author-name {
  font-size: 15rem;
}

#author-subtitle {
  font-family: "Raleway", sans-serif;
  font-style: italic;
  font-size: 4rem;
  margin-top: -100px;
}
#header-section {
  text-align: center;
  color: white;
  background-color: rebeccapurple;
  padding: 10rem 0 10rem 0;
}
#header-title {
  font-family: "Raleway", sans-serif;
  font-size: 7rem;
  font-weight: bold;
}
#header-subtitle {
  font-family: "Raleway", sans-serif;
  font-style: italic;
  font-size: 4rem;
}

#intro-section {
  background-color: white;
  color: rebeccapurple;
  transition: 1.5s;
  padding: 6rem 0 6rem 0;
}
#intro-section:hover {
  background-color: #9f76c752;
  transition: 1.5s;
}
#intro-title {
  font-family: "Staatliches", sans-serif;
  font-size: 3rem;
  text-align: center;
}
#intro-text {
  font-family: "Montserrat", sans-serif;
  text-align: justify;
  margin: 0 8rem 0 8rem;
  font-size: 1.2rem;
}
</style>