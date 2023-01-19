

var youWin
let electionEnemiga


let piedra = document.querySelector('#piedra')
let papel = document.querySelector('#papel')
let tijeras = document.querySelector('#tijeras')
let msg = document.querySelector('#msg')
piedra.addEventListener('click',()=>{
    msg.innerHTML ='clickeaste piedra'
    electionEnemiga = aleatorio()
})
papel.addEventListener('click',()=>{
msg.innerHTML ='clickeaste papel'
    electionEnemiga = aleatorio()
})
tijeras.addEventListener('click',()=>{
    msg.innerHTML ='cickeaste tijeras'
    electionEnemiga = aleatorio()
})
function aleatorio(){
    return Math.floor(Math.random() * (3-1+1)+1)
}
