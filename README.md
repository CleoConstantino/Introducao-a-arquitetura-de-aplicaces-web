Pós graduação em desenvolvimento full stack de sistemas modernos para nuvem -> Aula de introdução a arquitetura de aplicações web

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

**Configuração do Express:** o Express vai rodar "em cima" do Node, vamos utilizar o npm para instalar o Express.

npm init -y = esta 'flag' (-y) vai dar ok para toda a instalação
rm package.jason = remove o arquivo
ls = mostra os arquivos dentro da pasta
npm install express - vai instalar os pacotes do express

**Configurar o Drive no Mongo:**
