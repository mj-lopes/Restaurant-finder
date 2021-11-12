<p align='center'>  
<a href='https://nice-weather.vercel.app' > 
  <img src='https://user-images.githubusercontent.com/56007721/141053064-67e1d891-059e-4582-b740-0f542104d153.png' alt='Logo da Restaurant finder'> 
</a>
</p>


<h1 align='center'>Restaurant Finder</h1> 
<p align='center'>  
RF é uma aplicação web para a realização de buscas de restaurantes/lanchonetes na próximidade da localização do usuário.

<p align="center">
 <a href="#requisitos">Pré-requisitos</a> •
 <a href="#instalacao">Instalação</a> •
 <a href="#funcionando">Funcionando</a> •
 <a href="#tecnologias">Tecnologias</a> •   
 <a href="#autor">Autor</a> 
</p>

<h2> Features 🥘</h2>

- Mapa na geolocalização do usuário
- Busca automatica de restaurantes próximos 
- Lista lateral com os resultados das buscas
- Estrelas com as classificações das localidades
- Seach bar para a realização de buscas especificas
- Marcadores no mapa na posição dos restaurantes
- Modal com informações dos restaurantes
- Status para informar se o local se encontra fechado ou não

</br>

<div align='center'> 
<img src='https://user-images.githubusercontent.com/56007721/141054586-6a633a51-129b-466d-86b2-12d320f469fb.png'/ style="width: 720px;" />   
  
<a href='https://restaurant-finder-ecru.vercel.app'> <h3> Faça um teste online 🥞</h3> </a>

</div>


<h2 id='requisitos'> Pré-requisitos ⚙</h2>

Antes de iniciar este aplicativo você irá precisar de uma API KEY da [Google](https://cloud.google.com/).
- Resgatando a key: 
  - Acesse o [link](https://cloud.google.com/).
  - Caso não a tenha, crie uma conta de desenvolvedor, e logue na sua conta.
  - Abra a página de console de desenvolvedo acessando este [link](https://console.cloud.google.com/), ou na página principal do link anterior, clicando no botão azul logo de inicio.   
  - Crie um novo projeto. 
  - Na págida do console, vá em 'menu' na esquerda da página, depois em 'APIs e serviços', e por fim em 'Biblioteca'.
  - Nela, busque por 'Maps JavaScript API', e adicione ao projeto.
  - Faça o mesmo para 'Places API'.
  - Vá na mesma 'APIs e serviços' e depois em 'Credenciais'.
  - Click em 'Criar Credenciais' e em 'Chave de API'.
  - Vai ser gerada uma key nova que você já pode usar no projeto. 


Você também vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).

Além disto é bom ter um editor de texto para trabalhar com o código, recomendo o [VSCode](https://code.visualstudio.com/).

<h2 id='instalacao'> Instalação 🔧</h2>

``` 
No cmd, gitbash ou terminal de preferência: 

# Clone esse repositório:
$ git clone https://github.com/mj-lopes/Restaurant-finder

# Navegue para o diretório raiz
$ cd Restaurant-finder

# Instale as dependências
$ npm install
```

<h2 id='funcionando'> Funcionando 💨 </h2>

Ainda na pasta raiz do projeto, no terminal, execute o comando: ``` $ npm start ```.<br/>
O navegador irá abrir em uma nova janela o app já rodando, do contrário, abra em [http://localhost:3000](http://localhost:3000).

Na pasta raíz do projeto, crie um arquivo: ```.env.local```.<br/>Abra este arquivo com um editor de texto e escreva ```REACT_APP_GOOGLE_API_KEY=SUA_CHAVE_DO_GOOGLE```.

</p>

<h2 id='tecnologias'> Tecnologias 🛠 </h2>

As seguintes ferramentas foram usadas na construção deste projeto:

- [React](https://pt-br.reactjs.org/)
- [Redux](https://react-redux.js.org/)
- [Styled Components](https://styled-components.com/)

<h2> TODO? 📝 </h2>

- [x] Troca da lib do Maps
- [ ] Layout responsivo

<h2 id='autor'> Autor </h2>

<img src='https://user-images.githubusercontent.com/56007721/140599522-58255910-aa8e-4045-9cf9-2f061d6dd472.png' style="width: 120px;">
<p>Feito com 🧡 por <a href='https://github.com/mj-lopes'>Marcos Júnior</a>. </p><br/>
<p>Entre em contato 👇

[![Gmail Badge](https://img.shields.io/badge/-mlrj.junior%40gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:mlrj.junior@gmail.com)](mailto:mlrj.junior@gmail.com)
[![Linkedin Badge](https://img.shields.io/badge/-Marcos_Junior-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/mlrjunior/)](https://www.linkedin.com/in/mlrjunior/) 
</p>
