// Alterar Tema

const chk = document.getElementById('chk');
chk.addEventListener('change', ()=>{
document.body.classList.toggle('dark')
})

// Alterar Tema

// Slide Java Script

const imgs = document.getElementById('img');
const img = document.querySelectorAll('#img img');

let idx = 0;

function carrossel() {
    idx++;
    if(idx >  img.length - 1){
        idx = 0
    }
   imgs.style.transform = `translateX(${-idx * 900}px)`
}

setInterval(carrossel, 4000);
// Slide Java Script

// Slide Java Script 500px
const imgss = document.getElementById('imgg');
const imgg = document.querySelectorAll('#imgg imgg');

let idxx = 0;

function carrossell() {
    idxx++;
    if(idxx >  img.length - 1){
        idxx = 0
    }
   imgss.style.transform = `translateX(${-idxx * 340}px)`
}

setInterval(carrossell, 2000);

// Slide Java Script 500px



// botão abrir menu

function clickMenu(){
    if( items.style.display == 'block'){
     items.style.display = 'none'
    }else{
        items.style.display = 'block'
    }
}

// botão abrir menu