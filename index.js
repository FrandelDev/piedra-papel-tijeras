
let electionEnemiga
let election

let piedra = document.querySelector('#piedra')
let papel = document.querySelector('#papel')
let tijeras = document.querySelector('#tijeras')
let msg = document.querySelector('#msg')
let msgEnemy = document.querySelector('#msg-enemigo')

piedra.addEventListener('click',()=>{
    msg.innerHTML ='Elejiste piedra'
    election = 1
    combate()
})
papel.addEventListener('click',()=>{
msg.innerHTML ='Elejiste papel'
election = 2
combate()
})
tijeras.addEventListener('click',()=>{
    msg.innerHTML ='Elejiste tijeras'
    election = 3
    combate()
})
function aleatorio(){
    return Math.floor(Math.random() * (3-1+1)+1)
}
function combate(){
    electionEnemiga = aleatorio()
    let pickEnemy = ['Piedra','Papel','Tijeras']
    if(electionEnemiga === 1 && election === 3){
        msgEnemy.innerHTML = 'Yo eleji piedra✊ PERDISTEEE!!!'
    }else if(electionEnemiga === 2 && election === 1){
        msgEnemy.innerHTML = 'Yo eleji papel🖐 PERDISTEEE!!!'
    }else if(electionEnemiga === 3 && election === 2){
        msgEnemy.innerHTML = 'Yo eleji tijeras✌ PERDISTEEE!!!'
    }else if(election === electionEnemiga){
        msgEnemy.innerHTML = `😁 eleji ${pickEnemy[electionEnemiga-1]} EMPATE!`
    }else{
        msgEnemy.innerHTML = `😖 Nooo eleji ${pickEnemy[electionEnemiga-1]} ME GANASTE!!`
    }

}