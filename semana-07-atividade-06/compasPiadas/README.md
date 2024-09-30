# Projeto Compass Piadas

Este projeto é uma aplicação React que permite ao usuário adicionar, listar e deletar piadas de um banco de dados local. As piadas são carregadas de uma API local, e o usuário pode interagir com elas em tempo real.

## Funcionalidades

- Listagem de piadas.
- Adição de novas piadas com pergunta e resposta.
- Deleção de piadas existentes.
- Indicadores visuais de carregamento durante o envio e a exclusão de piadas.

## Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina as seguintes ferramentas:

- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [Git](https://git-scm.com/)

Além disso, será necessário ter um editor para trabalhar com o código, como o [VSCode](https://code.visualstudio.com/).

## Instalação

### 1. Clonando o repositório

Primeiro, clone o repositório do GitHub em sua máquina local. No terminal, execute o seguinte comando:

```bash
git clone https://github.com/Alexverissimo/alex-verissimo-estudos/tree/main/semana-07-atividade-06/compass-piadas
```

### 2. Acessando o diretório do projeto

Navegue até o diretório do projeto clonado:

```bash
cd seu-repositorio
```

### 3. Instalando as dependências

Após navegar até a pasta do projeto, você precisará instalar as dependências necessárias para rodar a aplicação. No terminal, execute:

```bash
npm install
```

Isso irá baixar e instalar todas as bibliotecas mencionadas no arquivo `package.json`, incluindo o **React** e o **Axios**.

### 4. Rodando o servidor local

Antes de iniciar a aplicação, será necessário rodar uma API local que servirá os dados das piadas. Para isso, você pode utilizar o [json-server](https://www.npmjs.com/package/json-server). Siga os passos abaixo:

1. Instale o `json-server` globalmente:

   ```bash
   npm install -g json-server
   ```

2. Inicie o servidor JSON:

   ```bash
   json-server --watch db.json --port 3100
   ```

### 5. Iniciando a aplicação

Após instalar as dependências e rodar o servidor local, você pode iniciar a aplicação React:

```bash
npm start
```

A aplicação estará disponível no endereço: `http://localhost:3000`.

## Estrutura do Projeto

Abaixo está uma visão geral da estrutura de pastas e arquivos do projeto:

## Tecnologias Utilizadas

As principais tecnologias utilizadas neste projeto são:

- **React**: Framework para construir a interface de usuário.
- **Axios**: Biblioteca para realizar requisições HTTP.
- **json-server**: Simulação de uma API RESTful para gerenciar as piadas.

## Como Contribuir

Se você quiser contribuir com este projeto:

1. Faça um fork do repositório.
2. Crie uma nova branch com a sua feature: `git checkout -b minha-feature`.
3. Faça commit das suas alterações: `git commit -m 'Minha nova feature'`.
4. Envie para a branch principal: `git push origin minha-feature`.
5. Abra um Pull Request.

---

### Contato

Se você tiver dúvidas ou sugestões sobre o projeto, entre em contato através de `alexverissimo98@gmail.com`.

---
