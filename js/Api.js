const URL = "https://api.thedogapi.com/v1/breeds/search?q=";
const queryDog = ['pug', 'shih tzu', 'lhasa', 'golden retriever', 'belgian', 'pit bull'];
const card = document.querySelector('#cards-dinamicos');

export async function fetchDogfacts() {
    const promises = queryDog.map(async (breedName) => {
        const resp = await fetch(`${URL}${breedName}`);
        
        if (resp.ok) {
            const data = await resp.json();

            if (data.length > 0) {
                const dog = data[0];

                const div = document.createElement('div');
                div.innerHTML = `
                    <div class="card-dica">
                        <img src="${dog.img}" alt="${dog.name}" />
                        <div class="conteudo-card">
                            <h3>${dog.name}</h3>
                            <p><strong>Temperamento:</strong> ${dog.temperament || 'Não informado'}</p>
                            <p><strong>Vida média:</strong> ${dog.life_span || 'Não informado'}</p>
                            <a href="pagina-da-raca.html" target="_blank">Ler mais &rarr;</a>
                        </div>
                    </div>
                `;
                div.id=dog.id

                card.appendChild(div);
            }
        } else {
            alert('Erro: ' + resp.statusText);
        }
    });

    await Promise.all(promises);
}

document.addEventListener("DOMContentLoaded", () => {
  fetchDogfacts();
});