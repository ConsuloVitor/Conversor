<h1 align = "center">Conversor de Moedas</h1>

![image](https://github.com/user-attachments/assets/fb1f477c-22ae-46ca-9dff-743061d6e36a)

Este é um projeto simples de um Conversor de Moedas desenvolvido com HTML, CSS e JavaScript. Ele permite que os usuários insiram um valor e convertam entre três moedas: Dólar (USD), Euro (EUR) e Real (BRL).

## Funcionalidades

- Conversão de valores entre USD, EUR e BRL usando taxas de câmbio fixas.
- Interface interativa onde o usuário pode selecionar a moeda de origem e a moeda de destino.
- Exibição do resultado da conversão com precisão de duas casas decimais.
- Botão de reset para limpar os valores inseridos e os resultados.

## Estrutura do Projeto

O projeto é composto pelos seguintes arquivos:

- `index.html`: Estrutura HTML da página, incluindo o formulário e os campos de entrada.
- `index.css`: (Opcional) Arquivo de estilos para personalizar a aparência da interface.
- `index.js`: Script JavaScript responsável pela lógica de conversão de moedas.

## Como Usar

1. Clone o repositório para o seu ambiente local.
2. Abra o arquivo `index.html` em um navegador.
3. Insira o valor a ser convertido, selecione a moeda de origem e a moeda de destino.
4. Clique em "Converter" para ver o resultado da conversão.

## Explicação do Código

O JavaScript no arquivo `index.js` faz o seguinte:

- Captura os valores inseridos pelo usuário (valor a ser convertido, moeda de origem e moeda de destino).
- Usa um objeto `exchangeRates` para armazenar taxas de câmbio fixas entre as moedas.
- Realiza a conversão com base nas moedas selecionadas e exibe o resultado na página.

## Exemplo de Uso

Para converter 100 BRL para USD, insira "100" no campo de valor, selecione "BRL" como moeda de origem e "USD" como moeda de destino. Clique em "Converter" para ver o resultado.

## Tecnologias Utilizadas

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

## Observações

As taxas de câmbio são fixas e podem não refletir as taxas reais de mercado.

## Contribuição

Sinta-se à vontade para contribuir com melhorias para o projeto! Faça um fork e submeta um pull request com suas modificações.
