const URL = "https://api.thedogapi.com/v1/breeds/search?q="
const queryDog = [ 'pug','shih tzu','lhasa','golden retriever','belgian','pit bull']

export async function fetchDogfacts() {
    const promises = queryDog.map(async (breedName) => {
        const resp =await fetch(`${URL}${breedName}`)
        if(resp.ok){
            const data = await resp.json()
            if(data.length > 0) {
                const dog = data[0]
                console.log(`${dog.name}`)
                console.log(`  🧠 Temperamento: ${dog.temperament}`)
                console.log(`  ⏳ Vida média: ${dog.life_span}`)
                console.log('---')
            }
        }
    })

    await Promise.all(promises)
}

fetchDogfacts()