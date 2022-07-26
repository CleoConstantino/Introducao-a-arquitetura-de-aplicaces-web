Pós graduação em desenvolvimento full stack de sistemas modernos para nuvem -> Aula de introdução a arquitetura de aplicações web

Resumo:

Conhecimentos adquiridos: atribuições de um arquiteto de software, caracteristicas de arquitetura de desenvolvimento de um sistema e estilos de arquitetura.

Criado uma aplicação MVP do zero onde a stack utilizada foi MERN (Mongo, Express, React, Node):
- criado um Cluster no MongoDB;
- realizado instalação e configuração do NodeJS;
- o editor utilizado foi o Visual Studio;
- utilizado o git para versionar o código que foi escrito;
- instalado o Express como uma dependência;
- configurado o drive de conexão do MongoDB;
- realizado conexão com o Cluster do MongoBD;
- instalado e configurado o React;
- instalado o CORS como dependência;
- realizado a conexão do frontend com o backend;
- realizado conexão do backend com o banco de dados;

**Atribuições de um arquiteto de software**

 - Tomar decisões de arquitetura;
 - Analisar de forma contínua a arquitetura;
 - Manter-se atualizado com as útimas tendências - Técnica dos 20 min (ler sobre algo diferente, cases, tecnologias, para aprender algo diferente - "abrir a cabeça").;
 - Garantir que as decisões são seguidas;
 - Diversificar conhecimento;
 - Ter conhecimento da lógica de negócio;
 - Possuir habilidades interpessoais;
 - Entender e navegar em politica;

Caracteristicas que devem ser levadas em consideração quando pensamos na arquiterura de desenvolvimento de um sistema:

 - Availability;
 - Reliability;
 - Testability;
 - Scalability;
 - Security;
 - Agility;
 - Faul tolerance;
 - Elasticity;
 - Recoverability;
 - Performance;
 - Deployability;
 - Learnability;

**Estilos de arquitetura**

**Monólito ou monolito:** se refere ao tipo de implantação (Deploy único). Tem uma implantação só, é necessário utilizar uma aplicação só. Aguns que utilizam: StackOverFlow, ShopFy, BasiCamp. Complexidade menor, tem uma aplicação única. Não é sinônimo de uma aplicação ruim.

**Distribuido:** tem implantações separadas, em momentos diferente, não precisam acontecer ao mesmo tempo, não precisam depender entre si. Trás uma complexidade maior. Ao utilizar arquiteturas distribuidas, é melhor automatizar ao máximo a implantação e para que possa facilitar a aplicação.

**Exemplos de arquitetura:**

*Arquitetura em camadas:* Apresentação/Negócio/Banco de dados
*Microserviços:* distribui em vários pedacinhos. É uma arquitetura de estilo distribuido, pois a implantação é feita de forma separada. 

**Introdução ao Mongo DB:** é banco de dados orientado a documentos, não é uma estrutura de tabelas igual o PostgreSQL ou MySQL. É um banco de dados escalável, é pago mas tem um plano gratuito. JSON JavaScript Object Notation. Tem uma estrutura de escalabilidade e elasticidade, monitoramento, alertas. Cluster é um conjunto de máquinas que vai funcionar como nosso banco de dados.

**Introdução ao NodeJS:** dentro do Node tem o 'npm'(node package manager) que é o gerenciador de pacotes do Node, é possivel instalar várias bibliotecas/dependencias, podem acelerar o processo de criação da aplicação

Quando se trabalha com microserviços é possivel trabalhar com versões do Node diferentes e quando precisar fazer alguma atualização é possível ter isso mais encapsulado e não corre tanto risco de quebrar o código.

Diferente do que pode ocorrer com o monolito, poder ter Breanking Change (mudança de ruptura) pode ter modificações nessa biblioteca/dependencias que quebram o funcionamento em relação as versoes anteriores, tem que ter o cuidado de quando atualizar uma dependencia, verificar todos os lugares onde aquela dependencia está sendo utilizada corre o risco de quebrar o código.

É um responsabilidade do arquiteto verificar se as dependencias estão sendo atualizadas e garantir que essas atualizaçõesnão vão quebrar a aplicação. É muito bom ter Testes automatizados que garantem o comportamento da aplicação mesmo quando modifica ou altera uma funcionalidade. 

**Introdução ao Express:** será utilizado o Express em cimado Node. É um framework para desenvolvimento de aplicações web. O 'npm' vai ajudar a instalar uma das ferramentas que vai facilitar o desenv. web utilizando o Express(Back End - lado servidor da aplicação). O Express é muito bom em desenvolver API's também pois precisamos de uma forma para se comunicar com a camada cliente/front end, e a melhor forma é utilizando API (tipos de API: REST, GRAPH);

Introdução do React: é amplamente utilizado no mercado de trabalho. 

Configurando o ambiente:
MongoDB: criado o primeiro Cluster, criado o primeiro banco de dados, adicionado o edereçode IP na lista de acessos.

NodeJS: realizado instalação do NodeJS 16.16.0, e o VSCode.

    const  http = require('http');     
    const  hostname = '127.0.0.1';
    const  port = 3000;
    
    const  server = http.createServer((_,res) => {
        res.end('Hello Node');
    });
    
    server.listen(3000, '127.0.0.1');

**Atalhos utilizados no terminal:** 
- abrir a pasta escolhida = cd + nome da pasta = exemplo -> cd server 
- para voltar a pasta anterior = cd.. 
- para executar a aplicação = node server.js 
- verificar a versão do node = node -v 
- git init = para inicializar o git 
- git status = para verifcar o status das modificações 
- git commit -m "texto" = comitar uma alteração 
- git log --oneline = verificar o retorno do log

**Configuração do Express:** o Express vai rodas "em cima" do Node, vamos utilizar o npm para instalar o Express.

- npm init -y = esta 'flag' (-y) vai dar ok para toda a instalação
- rm package.jason = remove o arquivo
- ls = mostra os arquivos dentro da pasta
- npm install express - vai instalar os pacotes do express

**Configurar o Drive no Mongo:**
Por padrão o Node não vem nada configurado para se conectar com banco de dados Mongo, existem ferramentas prontas para fazermos essa conexão.
O driver oficial do MongoDB Node.js permite que aplicativos Node.js se conectem ao MongoDB e trabalhem com dados. O driver possui uma API assíncrona que permite interagir com o MongoDB usando Promises ou por meio de callbacks tradicionais - [site oficial](https://mongodb.github.io/node-mongodb-native/).

**Executar o comando:**

    npm install mongodb
Fazer o login na conta do [MongoDB](https://account.mongodb.com/account/login) e clicar em conect, selecionar a conexãocom aplicação.

**Criar um arquivo mongo.js:*
  

**Configurando o React:**

[Site da documentação.](https://pt-br.reactjs.org/docs/create-a-new-react-app.html)

Executar o comando:

    npx create-react-app my-app
    cd my-app
    npm start


Esta aplicação utiliza uma arquitetura em camadas, divida em: *Client, Server, Database.*

**Client:** camada de FrontEnd, parte que vai rodar no navegador do usuário, vai ver e interagir com nossa aplicação.

**Server:** camada de servidor, camada de BackEnd, lógica de negócio, trabalhar com dados, ter regras de negócio e responável por conectar com o banco de dados.

**Database:** camada de banco de dados.
