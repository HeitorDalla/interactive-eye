# 👀 Olhos Interativos
Este projeto é uma animação divertida feita com HTML, CSS e JavaScript, onde dois olhos interativos seguem o movimento do cursor do mouse em tempo real. O efeito visual simula uma face que observa o usuário, sendo ideal para fins didáticos ou como elemento criativo em páginas web.

## 🔧 Tecnologias Utilizadas
O projeto foi desenvolvido com as seguintes tecnologias:
- ✅ HTML: Responsável pela estrutura básica da página.
- ✅ CSS: Utilizado para a estilização visual dos olhos e pupilas.
- ✅ JavaScript: Implementa a lógica de movimento das pupilas com base na posição do cursor do mouse.

## 🎯 Funcionalidades
- Dois olhos animados na tela.
- Pupilas seguem o movimento do cursor do mouse.
- Movimento limitado das pupilas dentro da área dos olhos, criando um efeito realista.
- Responsividade básica (funciona em diferentes tamanhos de tela).

## 🧠 Como Funciona
- O JavaScript detecta o movimento do mouse através do evento mousemove.
- A posição central de cada olho é calculada com getBoundingClientRect().
- Utiliza-se Math.atan2 para obter o ângulo entre o centro do olho e o cursor.
- Com Math.cos e Math.sin, calcula-se a posição da pupila em relação ao centro do olho, limitando o movimento com um fator de distância máxima.
- A pupila é então reposicionada dinamicamente com style.left e style.top.

## ✅ Como Usar
- Clone ou baixe este repositório.
- Abra o arquivo index.html em seu navegador.
- Mova o cursor do mouse pela tela e observe as pupilas acompanharem o movimento.

## 🖼️ Visual do Projeto
Os olhos ficarão centralizados na tela e as pupilas se moverão levemente em direção ao cursor, mantendo-se dentro de um limite circular de deslocamento.

## 📌 Possíveis Melhorias
- Tornar os olhos responsivos a toques (touch) em dispositivos móveis.
- Adicionar mais expressões ou elementos faciais.
- Suporte a múltiplos pares de olhos.
- Criar uma personagem interativa.

## 🤝 Contribuindo
Contribuições são bem-vindas!

Você pode:
- Corrigir bugs ou problemas.
- Melhorar a lógica JavaScript ou o estilo visual com CSS.
- Adicionar novas funcionalidades como piscadas, expressões faciais, etc.

## 👤 Autor
- Criado por Heitor Giussani Dalla Villa
- E-mail: heitorvillavilla@gmail.com
- Linkedin: https://www.linkedin.com/in/heitordallavilla
