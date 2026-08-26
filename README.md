# Conversor de Moedas

Converte um valor em Real para Dólar, Euro, Libra ou Bitcoin. Foi o meu primeiro projeto em JavaScript de verdade — o ponto em que a linguagem deixou de ser sintaxe e virou ferramenta.

**[▶ Ver no ar](https://guilhermeoliveira337.github.io/Conversor-de-moeda/)**

![Preview do conversor](./preview.png)

## O que faz

- Converte **de Real para quatro moedas**: Dólar, Euro, Libra e Bitcoin
- Troca **bandeira e nome da moeda** na hora em que a seleção muda, sem recarregar a página
- Formata cada resultado **no padrão do país de destino**, com `Intl.NumberFormat` — o dólar sai `US$ 1,234.56`, o euro sai `1.234,56 €` e o real sai `R$ 1.234,56`
- Recalcula automaticamente ao trocar de moeda, sem precisar clicar de novo em Converter

## Limitação conhecida

**As cotações estão fixas no código**, não vêm de uma API. Isso foi deliberado: o objetivo aqui era manipulação de DOM e eventos, não integração. Os valores estão desatualizados e o projeto não serve para conversão real.

O próximo passo natural seria trocar as constantes por uma chamada a uma API de câmbio e tratar os quatro estados da requisição — que é exatamente o que fui fazer depois no [Vitrine](https://github.com/GuilhermeOliveira337/vitrine-react).

## O que eu aprendi aqui

Foi onde caíram as fichas de manipulação de DOM: selecionar elemento, escutar evento, ler o valor de um input, calcular e escrever o resultado de volta na tela. Parece pouco hoje; na época era a diferença entre saber a sintaxe do JavaScript e conseguir fazer alguma coisa acontecer com ela.

Também foi a primeira vez que segui um layout do Figma em vez de inventar o design enquanto codava — a diferença no resultado final foi grande o bastante para virar método.

## Tecnologias

`HTML5` · `CSS3` · `JavaScript (Vanilla)` · `Intl.NumberFormat` · `Figma`

## Rodando localmente

```bash
git clone https://github.com/GuilhermeOliveira337/Conversor-de-moeda.git
cd Conversor-de-moeda
```

Abra o `index.html` no navegador — não há dependências nem build.

---

Desenvolvido por **Guilherme Oliveira** · [LinkedIn](https://www.linkedin.com/in/guilherme-oliveira-frontend)
