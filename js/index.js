const hamburguer = document.querySelector('.hamburguer');
const nav = document.querySelector('.botoes-header');
const saleMessage = document.querySelector('#sale-message')
const sale = document.querySelector('.sale')

hamburguer.addEventListener('click', () => {
    nav.classList.toggle('ativo');
    hamburguer.classList.toggle('ativo');
});

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

ChangeOffer()