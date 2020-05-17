# Be The Hero
<div class="container">
    <div class="web">
        <img height="330" src="BeTheHeroWeb.gif">
    </div>
    <div class="mobile">
        <img height="330" src="BeTheHeroMobile.gif">
    </div>
</div>

<p align="center">
    <a href="https://back-end-bethehero.herokuapp.com/ongs">API Backend</a> |
    <a href="https://imahero.netlify.app/">Frontend Web</a> |
    Frontend Mobile
</p>

> Projeto resultado da Semana OmniStack #11 🚀  
O Be The Hero é um projeto desenvolvido para conectar pessoas e empresas com organizações sem fins lucrativos (ONG's).  
Ele possui uma interface web criada para registrar as organizações e seus casos, e um aplicativo móvel simples usado para conectar pessoas e empresas que gostariam de ajudar essas organizações.

---

## Tecnologias Utilizadas 🎯

- **[NodeJS](https://nodejs.org) <img src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/233_Node_Js_logo-16.png">** - Web framework que permite utilizar javascript tanto no frontend quanto no backend;
- **[ReactJS](https://reactjs.org) <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-16.png">** - Biblioteca Javascript para construção de interfaces de usuário em páginas web;
- **[React Native](https://reactnative.dev) <img src="https://cdn2.iconfinder.com/data/icons/science-162/512/486_Physics_React_Science-16.png">** - Biblioteca que provê uma maneira eficiente de criar aplicações nativas para Android e iOS;

---

## Instalação 📦

1. Abra o terminal do seu computador. Se estiver no Windows pode ser o CMD ou Powershell.
2. Altere o diretório de trabalho atual para o local em que deseja ter o código do módulo salvo no seu computador.
3. Faça [um clone](https://help.github.com/pt/github/creating-cloning-and-archiving-repositories/cloning-a-repository) desse repositório rodando:
```sh
# Clonar o repositório
$ git clone https://github.com/isabelailma/Be-The-Hero.git
```

**Backend**  
Entre na pasta rodando pelo terminal:
```sh
# Entrar na subpasta do diretório
$ cd Be-The-Hero/backend
# Instalar as dependências
$ npm install
# Iniciar servidor backend
$ npm start
```
Para testar a API do Be The Hero, baixe e instale o [Insomnia](https://insomnia.rest/download/) e em seguida clique na Workspace → `Import/Export` → `Import Data` → `From File` → e selecione o arquivo ` 	Insomnia_export.json` deste repositório.

 Para rodar o teste unitário e o teste de integração utilizar o comando:
 ```sh
$ npm test
 ```

**Frontend Web**  
Para iniciar o Frontend do React utilize os comandos:
```sh
# Entrar na subpasta do diretório
$ cd Be-The-Hero/frontend
# Instalar as dependências
$ npm install
#Iniciar frontend
$ npm start
```
Assim que o processo terminar, automaticamente será aberta no seu navegador a página `localhost:3000`

**Frontend Mobile**  
Para ver a aplicação mobile com o React Native, primeiro é necessário colocar o IP do seu servidor (ou computador) no arquivo `src/services/api.js`, e depois executar os comandos:
```sh
# Entrar na subpasta do diretório
$ cd Be-The-Hero/mobile
# Instalar as dependências
$ npm install
# iniciar expo
$ npm start
```
Assim que o processo terminar, automaticamente será aberta no seu navegador a página `localhost:19002`. Conecte seu emulador, ou teste o aplicativo por `LAN`: baixe o aplicativo Expo da Play Store ou App Store e em seguida escaneie o código QR.

> 💡 Para baixar todas as dependências automaticamente sem que seja necessário entrar pasta a pasta, na raiz do projeto utilizar o comando :
> ```sh
> $ npm run install:npm
> ```

---

## Como Contribuir 🧩

Se quiser contribuir para esse repositório, seja corrigindo algum problema, adicionando comentários ou melhorando a documentação, você pode seguir o tutorial abaixo:

1. Faça [um fork](https://help.github.com/pt/github/getting-started-with-github/fork-a-repo) desse repositório (<https://github.com/isabelailma/Be-The-Hero/fork>);
2. Entre no seu perfil no GitHub e faça um clone do repositório que você fez um fork;
3. Faça as alterações necessárias no código ou documentação, crie uma _branch_ com a sua alteração:
```sh
$ git checkout -b feature/minha-alteracao
```
4. Faça o _commit_ das suas alterações:
```sh
$ git commit -m 'Minha alteração'
```
5. Faça _push_ para a sua _branch_:
```sh
$ git push origin feature/minha-alteração
```
6. Crie um novo _pull request_ no repositório que você fez o fork

> 🚩 Depois que o merge da sua pull request for feito, você pode deletar a sua branch.