
# Desfudência API

Missão dada, é missão cumprida! 🚀




## Os desafios
01 - Calculo da média

    ✔️ Precisamos fazer o cálculo da média de 2 números, para isto será necessário ter um endpoint que receba esses 2 números e nos retorne a média dos mesmos.

    ✔️ O resultado precisa estar arredondado em duas casas decimais utilizando a estratégia de arredondamento Half Round Up.

    ✔️ O mesmo precisará rodar num docker, para isto o projeto tem que estar corretamente conteinerizado/dockerizado.

    ✔️ Temos que ter tratamento de erro caso os parâmetros estejam errados, inválidos ou inexistentes.

    ✔️ Precisamos implementar Log para saber o que está acontecendo, ou seja, que cálculos estão sendo feitos neste componente.

    ✔️ Comite seu código.

02 - Consulta de CEP

    ✔️ Precisamos criar um outro endPoint que receba um cep e que o mesmo faça uma consulta deste CEP na viaCEP (https://viacep.com.br/)

    ✔️ O Serviço que precisa ser chamado no ViaCEP é o seguinte: https://viacep.com.br/ws/XXXXXXXX/json

    ✔️ Onde o XXXXXXXX é um Cep válido.

    ✔️ Este endereço tem que ser retornado para o chamador, caso o Bairro não seja encontrado na ViaCEP, além do resto das informações, uma mensagem tem que ser retornada para o cliente informando que não foi possível encontrar o Bairro deste CEP. Exemplo de CEP sem Bairro :18150000

    ✔️ Comite seu código.

    ✔️ Divida em camadas de responsabilidade única, com classes e métodos coesos. Vá pela simplicidade do código.

    ✔️ Implemente testes automatizados.
## Rodando a aplicação com o docker
Certifique-se de ter o docker na sua maquina e rode o comando:

Obs: Mude o nome do arquivo .env.exemple para .env

```bash
docker-compose up
```
## Como foi o desenvolvimento
Para garantir a simplicidade do projeto sem perder a escalabilidade, foram usados alguns padrões de projetos,
de forma a garantir um alto nível de desacoplamento entre os componentes, facilitando assim mudanças e um 
possível crescimento posterior da aplicação.
Por se tratar de uma aplicação pequena, estou ciente de que o código poderia estar mais simples, porém a aplicação
foi construída pensando na possibilidade de ser escalável, reutilizável e testável, seguindo critérios do SOLID e da
clean architecture.
## Rodando os testes

Para rodar testes, rode o seguinte comando:

```bash
  npm run test
```
## Cobertura de testes


--------------------------------------|---------|----------|---------|---------|
File                                  | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
--------------------------------------|---------|----------|---------|---------|-------------------
All files                             |   95.52 |    84.93 |   96.87 |   95.52 |  

        

## Demo

Para ter uma demonstração das rotas, com a aplicação rodando, acesse
    http://localhost:3330/doc



## Authors

- [@gi-asc](https://www.github.com/gi-asc)

