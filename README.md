<h1 align="center"> Introdução : </h1>
<p>Este projeto tem como objetivo a criação de uma cópia simples do site Hacker News. </p>
<br/>
<h1 align="center"> Instalação : </h1>


```bash
# Clone este repositório
$ git clone https://github.com/gustavofont/Hack_News.git

# Acesse a pasta do projeto no terminal/cmd
$ cd Hack-News

# Instale as dependências
$ npm install

# Crie um Banco de dados no mysql para o repositorio
$mysql> CREATE DATABASE nome_do_banco;

# Crie um arquivo .env com as segintes variáveis
$DBNAME='nome_do_bando_de_dados'
$DBUSER='usuário_com_privilégios_ao_DB'
$DBPASSWORD='senha_do_usuário'

# Execute a aplicação 
$ nodemon index.js

# O servidor inciará na porta:8080 - acesse <http://localhost:8080>
```
<h1 align="center"> Funcionalidades : </h1>

* A página inicial exibe as Threads inseridas no sistema;
* Cada Thread possui um botão de detalhes que direciona o usuário à página com a descrição da Thread e os comentários para a mesma;
* O usuário pode inserir novos comentarios a qualquer Thread ;
* O usuário pode inserir novas Threads com o botão na home ou o botão na navbar, estes, o direcionaram para o para a página com o form de inserção;

<h1 align="center"> Documentação : </h1>

* O sistema foi criado seguindo o padão MVC(Model View Controller);
* Os 'Models' responsáveis pelo gerenciamento do banco estão localizados no diretório 'database', foi usado o sequelize como ORM para o desenvolvimento com o mysql
* As 'views' que possuem a resposabilidade de "desenhar" o html estão localizadas no diretório 'views' e são compostas por arquivos ejs
* Os "Controlles" do Sistemas estão localizados no diretório 'controllers', e são compostos 100% por javaScrip, estes cumprem com o papel da lógica do site
* O arquivo principal deste sistema é o 'index.js', que gerencia as três partes do nosso sistema(Models, Views e Cotrollers).


