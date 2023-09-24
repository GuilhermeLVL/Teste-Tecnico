# GuilhermePinheiro-Teste_Pratico


# 

## **Documentação JavaScript para README**

### **Variáveis Globais**

- **`currentPage`**:
    - **Tipo**: Número inteiro
    - **Descrição**: Armazena o número da página atual que está sendo carregada.
- **`currentCategory`**:
    - **Tipo**: String
    - **Descrição**: Armazena a categoria atual de dados a ser carregada.
- **`maxItemsToShow`**:
    - **Tipo**: Número inteiro
    - **Descrição**: Define o número máximo de itens a serem exibidos por página.

### **Funções**

### **`loadData(category)`**

- **Parâmetros**:
    - **`category`** (String): A categoria de dados a ser carregada.
- **Descrição**: Inicializa a carga de dados para uma categoria especificada, reiniciando a página atual para a primeira página.

### **`loadNextPage()`**

- **Descrição**: Carrega a próxima página de dados para a categoria atual.

### **`loadPreviousPage()`**

- **Descrição**: Carrega a página anterior de dados para a categoria atual, desde que não seja a primeira página.

### **`fetchData(category, page)`**

- **Parâmetros**:
    - **`category`** (String): A categoria de dados a ser carregada.
    - **`page`** (Número inteiro): O número da página a ser carregada.
- **Descrição**: Realiza uma requisição assíncrona para a API SWAPI para obter os dados da categoria e página especificadas.

### **`displayData(data, category)`**

- **Parâmetros**:
    - **`data`** (Array): Os dados a serem exibidos.
    - **`category`** (String): A categoria de dados a ser exibida.
- **Descrição**: Exibe os dados obtidos na interface do usuário, criando elementos HTML para cada item de dados e controlando a exibição das informações.

### **`generateCardContent(item, category, collapseId)`**

- **Parâmetros**:
    - **`item`** (Objeto): O item de dados a partir do qual o conteúdo será gerado.
    - **`category`** (String): A categoria de dados do item.
    - **`collapseId`** (String): O identificador único para o elemento de colapso HTML.
- **Descrição**: Gera o conteúdo HTML que será exibido para cada item de dados com base na categoria.

## **Documentação HTML**

### **Estrutura Geral**

- **DOCTYPE**: **`<!DOCTYPE html>`** especifica a versão do HTML sendo usada (HTML5).
- **Tag HTML**: **`<html lang="en">`** define o início e o fim do documento HTML.

### **Cabeçalho (Head)**

- **Meta Tags**: Contêm informações sobre a codificação de caracteres e a configuração da viewport para dispositivos móveis.
- **Link para CSS Bootstrap**: Importa o arquivo CSS Bootstrap para estilizar a página.
- **Link para CSS Personalizado (style.css)**: Importa um arquivo CSS personalizado para aplicar estilos adicionais.
- **Título**: **`<title>`** define o título da página.

### **Corpo (Body)**

- **Classe de Fundo**: **`<body class="bg-image">`** define uma classe para aplicar um fundo à página.

### Barra de Navegação (Navbar)

- **Classe Bootstrap**: **`navbar`** define uma barra de navegação.
- **Botão Toggle**: **`<button class="navbar-toggler">`** é um botão para alternar a visibilidade dos itens de navegação em dispositivos móveis.
- **Itens de Navegação**: **`<li>`** são os itens da barra de navegação que contêm links para diferentes categorias.
- **Links de Categoria**: **`<a class="nav-link">`** são os links para as categorias "Films", "People", "Planets", "Species", "Starships" e "Vehicles".
- **Texto Adicional**: Um texto adicional "Que a Força esteja com você" é exibido.

### Conteúdo Principal

- **Div do Card Principal**: **`<div class="card card border-warning mb-3 bg-transparent">`** contém o conteúdo principal.
- **Imagem do Card**: **`<img src="..." class="card-img-top" alt="...">`** exibe uma imagem no topo do card.
- **Título do Card**: **`<h5 class="card-title">`** é o título do card.
- **Texto do Card**: **`<p class="card-text">`** contém o texto principal do card.
- **Lista de Dados**: **`<ul class="list-group list-group-flush">`** é uma lista que conterá os dados das categorias.
- **Conteúdo Dinâmico de Dados**: **`<div class="container" id="dados">`** é a área onde os dados serão exibidos dinamicamente.
- **Conteúdo de Carregamento**: **`<div id="loading-container">`** é a área onde o ícone de carregamento será exibido.
- **Botões de Paginação**: **`<div class="card-body d-flex justify-content-between" id="btn-dados">`** é a área onde os botões de página anterior e próxima serão exibidos.

### **Scripts JavaScript**

- **Scripts Externos**: São importados os scripts JavaScript do jQuery, Bootstrap e o script personalizado (**`script.js`**) para funcionalidades interativas e manipulação de dados.

### **Fim da Página**

- A estrutura HTML é fechada com **`</html>`**.

## **Documentação CSS**

### **Estilos Gerais**

### Transição de Fundo para Botão

- **Classe**: **`.my-button`**
- **Descrição**: Define uma transição suave para a mudança de cor de fundo dos botões, bem como o tamanho da fonte e o raio da borda.

### Efeito de Hover para Botão

- **Classe**: **`.my-button:hover`**
- **Descrição**: Define o efeito de hover para os botões, alterando a cor e aplicando um texto de sombra.

### Fundo da Página

- **Classe**: **`.bg-image`**
- **Descrição**: Define uma imagem de fundo para a página, cobrindo a área inteira da tela e ajustando a cor do texto.

### Fundo do Card

- **Classe**: **`.bg-card`**
- **Descrição**: Define um fundo animado para o card principal, cobrindo a área inteira do card.

### Fundo Transparente

- **Classe**: **`.transparent-bg`**
- **Descrição**: Adiciona uma cor de fundo com 50% de opacidade ao card.

### **Estilos para Elementos Específicos**

### Efeito Hover para Ícone de Navegação

- **Classe**: **`.nav-gif`**
- **Descrição**: Adiciona um efeito de sombra ao ícone de navegação quando hover.

### Estilo de Fonte para Navegação

- **Classe**: **`.nav-fonts`**
- **Descrição**: Define a fonte "Bebas Neue" para a navegação.

### Estilo de Texto para Card

- **Classe**: **`.card-text`**
- **Descrição**: Define o estilo do texto dentro dos cards, incluindo a cor e o padding superior.

### Efeito Hover para Texto do Card

- **Seletor**: **`.card-text:hover`**
- **Descrição**: Altera a cor do texto do card quando hover.

### Estilo de Contêiner de Carregamento

- **ID**: **`#loading-container`**
- **Descrição**: Define a posição e o estilo para o contêiner de carregamento que é exibido ao carregar os dados.