import { dogItens,catItens,variablesItens } from "./produtos.js";

const hamburguer = document.querySelector('.hamburguer');
const nav = document.querySelector('.botoes-header');

const saleMessage = document.querySelector('#sale-message')
const sale = document.querySelector('.sale')

const slides = document.querySelectorAll('.slide')
const anteriorBtn=document.getElementById('anterior')
const proximoBtn = document.getElementById('proximo')
let slideAtual = 0

const btnSearch = document.querySelector('#btn-search');
const cart = []


hamburguer.addEventListener('click', () => {
    nav.classList.toggle('ativo');
    hamburguer.classList.toggle('ativo');
});

// Função para a busca de produtos
btnSearch.addEventListener('click', () => {
    const searchTerm = document.querySelector('#search-input').value.toLowerCase();

    const filteredProducts = [...dogItens,...catItens,...variablesItens].filter((product)=>{
        return product.name.toLowerCase().includes(searchTerm) || product.size.toLowerCase().includes(searchTerm);
    })

    if(filteredProducts.length > 0){
        const params = new URLSearchParams();
        params.append('racoes',JSON.stringify(filteredProducts));
        window.location.href = `../Resultado/Resultado.html?${params.toString()}`;
    } else {
        alert('Nenhum produto encontrado com esse termo de busca.');
    }
});


//Função pra mudar a frase de novidades

function ChangeOffer(){
    let i=0
    const offers= ['Entregamos na sua casa apartir das 19:00','Entrega Gratis em Toda Regiao Leste de SJC','Outra frase que ainda nao pensei']
    const collors = ['rgb(0,183, 255)', '#1F2937','#F56B00']

    setInterval(()=>{
        if(i == offers.length - 1){
            i=0
            saleMessage.innerHTML = offers[i]
            sale.style.backgroundColor = collors[i]
        } else {
            i++
            saleMessage.innerHTML = offers[i]
            sale.style.backgroundColor = collors[i]
        }
    },4000)
}

//Função do Carrossel

function ChangeSlide(index){
    slides.forEach(slide => slide.classList.remove('ativo'))
    slides[index].classList.add('ativo')
}

anteriorBtn.addEventListener('click',() =>{
    slideAtual = (slideAtual -1 + slides.length) % slides.length;
    ChangeSlide(slideAtual)
})

proximoBtn.addEventListener('click', () => {
  slideAtual = (slideAtual + 1) % slides.length;
  ChangeSlide(slideAtual);
});

// Função para adicionar ao carrinho

function addToCar(e){
    const productIndex = e.target.parentNode.id
    const productToAdd =  [...dogItens,...catItens,...variablesItens].filter((item) => item.id == productIndex)


    if(productIndex === dogItens.find((item) => item.id) || catItens.find((item) => item.id) || variablesItens.find((item) => item.id)){
        cart.push(productToAdd)
        cart.forEach((item) =>{
            console.log(item.forEach((item) => console.log(item.name)))
        })
        localStorage.setItem("carrinho",cart)
    }else {
       console.log("Nao encontrou o produto") 
    }
}

//Função Listar produtos

const ShowDogProducts = () => {
    const productsDog = document.querySelector('#dog-products')


    dogItens.forEach((product) =>{

        if(product.id <= 4){
            const productDiv = document.createElement('div')
            productDiv.id=product.id
            productDiv.classList.add("produto-card") // <-- Adiciona classe para centralizar

            productDiv.innerHTML = `
                <img src=${product.img} alt="" width="150px" height="150px">
                <p><span class="Ração">${product.name} ${product.size}</span></p>
                <p><span class="preco">R$ ${product.price}</span></p>
            `

            const btn = document.createElement('button')
            btn.textContent="Comprar"
            btn.addEventListener('click',addToCar)

            productDiv.appendChild(btn)
            productsDog.appendChild(productDiv)
        }
        
    })
}

const ShowCatProducts = () => {
    const productsCat = document.querySelector('#cat-products')
    

    catItens.forEach((product) =>{

        if(product.id <= 10) {
            const productDiv = document.createElement('div')
            productDiv.id=product.id
            productDiv.classList.add("produto-card") // <-- Adiciona classe para centralizar


            productDiv.innerHTML = `
                <img src=${product.img} alt="Cat-product" width="150px" height="150px">
                <p><span class="Ração">${product.name} ${product.size}</span></p>
                <p><span class="preco">R$ ${product.price}</span></p>
                
            `
            const btn = document.createElement('button')
            btn.textContent="Comprar"
            btn.addEventListener('click',addToCar)

            productDiv.appendChild(btn)
            productsCat.appendChild(productDiv)
            
        }
        
    })
}

const showVariablesItems = () => {
    const variables = document.querySelector('#variables-products')

    variablesItens.forEach((product) =>{

        if(product.id <= 16){
            const productDiv = document.createElement('div')
            productDiv.id=product.id
            productDiv.classList.add("produto-card") // <-- Adiciona classe para centralizar

            productDiv.innerHTML = `
                <img src=${product.img} alt="" width="150px" height="150px">
                <p><span class="Ração">${product.name} ${product.size}</span></p>
                <p><span class="preco">R$ ${product.price}</span></p>
            `
            const btn = document.createElement('button')
            btn.textContent="Comprar"
            btn.addEventListener('click',addToCar)

            productDiv.appendChild(btn)
            variables.appendChild(productDiv)
        }
        
    })
}

// Fim da Função Listar produtos

showVariablesItems()
ShowDogProducts()
ShowCatProducts()
ChangeOffer()