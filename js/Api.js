const URL_BREEDS = "https://api.thedogapi.com/v1/breeds/search?q=";
const URL_IMAGES = "https://api.thedogapi.com/v1/images/search?breed_id=";
const queryDog = ['pug', 'shih tzu', 'lhasa', 'golden retriever', 'pit bull'];
const card = document.querySelector('#cards-dinamicos');

export async function fetchDogfacts() {
    const promises = queryDog.map(async (breedName) => {
        try {

            // 1. Buscar informações da raça
            const resp = await fetch(`${URL_BREEDS}${breedName}`);
            if (!resp.ok) throw new Error(`Erro na busca da raça: ${resp.statusText}`);
            
            const data = await resp.json();
            if (data.length === 0) return;

            const dog = data[0];

            // 2. Buscar imagem com base no breed id
            const imageResp = await fetch(`${URL_IMAGES}${dog.id}`);
            let imgUrl = 'https://via.placeholder.com/300x200?text=Sem+imagem'; // imagem padrão

            if (imageResp.ok) {
                const imageData = await imageResp.json();
                if (imageData.length > 0) {
                    imgUrl = imageData[0].url;
                }
            }

            // 3. Criar card com os dados
            const div = document.createElement('div');
            div.innerHTML = `
                <div class="card-dica">
                    <img src="${imgUrl}" alt="${dog.name}" />
                    <div class="conteudo-card">
                        <h3>${dog.name}</h3>
                        <p><strong>Temperamento:</strong> ${dog.temperament || 'Não informado'}</p>
                        <p><strong>Vida média:</strong> ${dog.life_span || 'Não informado'}</p>
                        <a href="pagina-da-raca.html" target="_blank">Ler mais &rarr;</a>
                    </div>
                </div>
            `;
            div.id = dog.id;

            card.appendChild(div);
        } catch (err) {
            console.error(err);
            alert(`Erro ao carregar dados da raça ${breedName}: ${err.message}`);
        }
    });

    await Promise.all(promises);
}

document.addEventListener("DOMContentLoaded", () => {
    fetchDogfacts();
});
