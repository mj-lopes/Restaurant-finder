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
 <a href="#autor">Autor</a> •
 <a href="#licenc-a">Licença</a> 
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
Antes de iniciar este aplicativo você irá precisar de uma API KEY da [OpenWeather](https://openweathermap.org/api/). Escolha um dos planos e cadastre-se no site para conseguir uma chave ( existe um plano gratuito ).

Você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).

Além disto é bom ter um editor de texto para trabalhar com o código, recomendo o [VSCode](https://code.visualstudio.com/).

<h2 id='instalacao'> Instalação 🔧</h2>

``` 
No cmd, gitbash ou terminal de preferência: 

# Clone esse repositório:
$ git clone https://github.com/mj-lopes/Restaurant-finder

# Navegue para o diretório raiz do projeto
$ cd Restaurant-finder

# Instale as dependências do projeto
$ npm install
```

<h2 id='funcionando'> Funcionando 💨 </h2>

Ainda na pasta raiz do projeto, no terminal, execute o comando: ``` $ npm start ```.<br/>
O navegador irá abrir em uma nova janela o app já rodando, do contrário, abra em [http://localhost:3000](http://localhost:3000).

Na pasta raíz do projeto, crie um arquivo: ```.env.local```.<br/>Abra este arquivo com um editor de texto e escreva ```REACT_APP_GOOGLE_API_KEY=SUA_CHAVE_DO_GOOGLEAPI```

</p>

<h2 id='tecnologias'> Tecnologias 🛠 </h2>

As seguintes ferramentas foram usadas na construção deste projeto:

- [React](https://pt-br.reactjs.org/)
- [Redux](https://react-redux.js.org/)
- [Styled Components](https://styled-components.com/)


<h2 id='autor'> Autor </h2>

<img src='https://user-images.githubusercontent.com/56007721/140599522-58255910-aa8e-4045-9cf9-2f061d6dd472.png' style="width: 120px;">
<p>Feito com 🧡 por <a href='https://github.com/mj-lopes'>Marcos Júnior</a>. </p><br/>
<p>Entre em contato 👇

[![Gmail Badge](https://img.shields.io/badge/-mlrj.junior%40gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:mlrj.junior@gmail.com)](mailto:mlrj.junior@gmail.com)
[![Linkedin Badge](https://img.shields.io/badge/-Marcos_Junior-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/mlrjunior/)](https://www.linkedin.com/in/mlrjunior/) 
</p>

<!-- # Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
 -->
