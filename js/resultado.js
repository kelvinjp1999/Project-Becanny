const hamburguer = document.querySelector('.hamburguer');
const nav = document.querySelector('.botoes-header');
const params = new URLSearchParams(window.location.search);
const racoesString = params.get('racoes');

if (racoesString) {
    try {
        const racoes = JSON.parse(racoesString);
        const container = document.getElementById('resultado');

        if (racoes.length > 0) {
          racoes.forEach(produto => {
            const div = document.createElement('div');
            div.innerHTML = `
              <img src="${produto.img}" alt="${produto.name}" width="150px" height="150px">
              <p>${produto.name} ${produto.size}</p>
              <p>Preço: R$ ${produto.price}</p>
            `;
            container.appendChild(div);
          });
        } else {
          container.innerText = 'Nenhum produto encontrado.';
        }
      } catch (err) {
        console.error('Erro ao parsear JSON:', err);
        document.getElementById('resultados').innerText = 'Erro ao carregar os resultados.';
      }
    } else {
      document.getElementById('resultados').innerText = 'Nenhum resultado recebido.';
    }

