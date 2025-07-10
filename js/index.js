import { dogItens,catItens,variablesItens } from "./produtos.js";

const hamburguer = document.querySelector('.hamburguer');
const nav = document.querySelector('.botoes-header');
const saleMessage = document.querySelector('#sale-message')
const sale = document.querySelector('.sale')
const slides = document.querySelectorAll('.slide')
const anteriorBtn=document.getElementById('anterior')
const proximoBtn = document.getElementById('proximo')
let slideAtual = 0

hamburguer.addEventListener('click', () => {
    nav.classList.toggle('ativo');
    hamburguer.classList.toggle('ativo');
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


for(let i=0;i < dogItens.length;i++){
    console.log(`${i+1}- Nome:${dogItens[i].name} de ${dogItens[i].size} no valor de R$:${dogItens[i].price}`)
}


ChangeOffer()