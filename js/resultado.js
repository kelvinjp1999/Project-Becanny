const hamburguer = document.querySelector('.hamburguer');
const nav = document.querySelector('.botoes-header');
const params = new URLSearchParams(window.location.search);
const racoesString = params.get('racoes');

hamburguer.addEventListener('click', () => {
    nav.classList.toggle('ativo');
    hamburguer.classList.toggle('ativo');
});


if (racoesString) {
    try {
        const racoes = JSON.parse(racoesString);
        const container = document.getElementById('resultado');

        if (racoes.length > 0) {
          racoes.forEach(produto => {
            const div = document.createElement('div');
            div.classList.add('product-card');
            
            div.innerHTML = `
              <img src="${produto.img}" alt="${produto.name}" class="product-card-img" width="150px" height="150px">
              <div class="product-card-content">
                <p class="product-card-name">${produto.name} ${produto.size}</p>
                <p class="product-card-price">Preço: R$ ${produto.price}</p>
              </div>
            `;
            container.appendChild(div);
          });
        } else {
          container.innerText = 'Nenhum produto encontrado.';
        }
      } catch (err) {
        console.error('Erro ao passar JSON:', err);
        document.getElementById('resultados').innerText = 'Erro ao carregar os resultados.';
      }
    } else {
      document.getElementById('resultados').innerText = 'Nenhum resultado recebido.';
    }

