const mapa = [
        "WWWWWWWWWWWWWWWWWWWWW",
        "W   W     W     W W W",            
        "W W W WWW WWWWW W W W",
        "W W W   W     W W   W",
        "W WWWWWWW W WWW W W W",
        "W         W     W W W",
        "W WWW WWWWW WWWWW W W",
        "W W   W   W W     W W",
        "W WWWWW W W W WWW W F",
        "S     W W W W W W WWW",
        "WWWWW W W W W W W W W",
        "W     W W W   W W W W",
        "W WWWWWWW WWWWW W W W",
        "W       W       W   W",
        "WWWWWWWWWWWWWWWWWWWWW",
];

//175 W (paredes)
//1 S (comeco)
//1 F (fim)

// 177 letras


// console.log(map)
//para cada linha  criar uma div e atribuir um display flex
//para cada W criar uma div atribuir uma classe de cor azul
//para cada espaço em branco criar uma div e atribuir uma classe cor branca



const lab = document.getElementById('lab')
let player = document.createElement('div')
player.classList.add('playerCurrent')
player.classList.add('imgPlayer')

const burro = document.createElement('div')
burro.classList.add('cuboEnd')
burro.classList.add('imgBurro')

function gerarLab(mapa){
    

    for(let i = 0; i < mapa.length;i++){
        const linha = document.createElement('section')
     
        linha.classList.add('linha')
        lab.appendChild(linha)

        for(let j = 0; j < mapa[i].length; j++){    
            const cubo = document.createElement('div') 
       
          cubo.classList.add('cuboLab')
          cubo.id = `${i}-${j}`
        

            if(mapa[i][j] === 'W'){
                cubo.classList.add('cuboParede')
                cubo.setAttribute('data-type','Wall')
             }

             if(mapa[i][j] === ' '){
                cubo.classList.add('cuboCaminho')
                cubo.setAttribute('data-type','Path')
             }

            if(mapa[i][j] === 'S'){
              cubo.classList.add('cuboStart')  
                cubo.classList.add('cuboCaminho')       
                cubo.setAttribute('data-type','Start')
                cubo.appendChild(player)
               }

             if(mapa[i][j] === 'F'){
                cubo.classList.add('cuboCaminho')
                cubo.setAttribute('data-type','Final', 'Path') 
                cubo.appendChild(burro)
              }
    
             linha.appendChild(cubo)

        }
    }

}

gerarLab(mapa);



const objectPlayer = {
    r:9,
    c:0
}

win();

document.addEventListener('keydown', (evt) =>{
  
    let currentBloco = document.getElementById(`${objectPlayer.r}-${objectPlayer.c}`)

    const keyName = evt.key

    if(keyName === 'd'){
       
    let nextBloco = document.getElementById(`${objectPlayer.r}-${objectPlayer.c+1}`)
   
    if(nextBloco.dataset.type === "Path" || nextBloco.dataset.type === "Final" ){
        currentBloco.firstChild.classList.add('espelhar')   
    nextBloco.appendChild(currentBloco.firstChild)
    objectPlayer.c++
    win();
    }
    
    }
    if(keyName === 'a'){

        let nextBloco = document.getElementById(`${objectPlayer.r}-${objectPlayer.c-1}`) 
        if(nextBloco.dataset.type === "Path" || nextBloco.dataset.type === "Start"){ 
        currentBloco.firstChild.classList.remove('espelhar')    
        nextBloco.appendChild(currentBloco.firstChild)
        objectPlayer.c--
        win();
        }
    }
    if(keyName === 'w'){
        let nextBloco = document.getElementById(`${objectPlayer.r-1}-${objectPlayer.c}`)
        if(nextBloco.dataset.type === "Path"){
        nextBloco.appendChild(currentBloco.firstChild)
        objectPlayer.r--
        win();
        }
    }
    if(keyName === 's'){
        
        let nextBloco = document.getElementById(`${objectPlayer.r+1}-${objectPlayer.c}`)
        if(nextBloco.dataset.type === "Path"){
        nextBloco.appendChild(currentBloco.firstChild)
        objectPlayer.r++
        win();
        }
    }
 

})

function win (){

    if(objectPlayer.r === 8 && objectPlayer.c === 20){
        mostrarVitoria();
        image();
        objectPlayer.c = 0
        objectPlayer.r = 0
    }

}

const corpo = document.getElementsByTagName('body')[0]
const sectionWin = document.getElementById('textWinner')
const textVitoria = document.getElementById('text')

const buttonReset = document.createElement('button')
function mostrarVitoria (){

   
   
    buttonReset.innerText = 'Jogar Novamente'
    buttonReset.classList.add('reset')

    
    textVitoria.classList.add('divWinner')
    textVitoria.style.opacity = '1'
    textVitoria.innerText = "Parabens voce conseguiu"
    buttonReset.style.display = 'block'

   
    corpo.appendChild(buttonReset)
}

buttonReset.addEventListener('click', () =>{
   

objectPlayer.r = 9
objectPlayer.c = 0


imageEnd.classList.add('imgBurro')
   
imageStart.classList.add('imgPlayer');
imageStart.classList.remove('imgEnd')

const startPlayer = document.getElementById('9-0')
const player = document.getElementsByClassName('playerCurrent')[0]
startPlayer.appendChild(player)

textVitoria.style.opacity = '0'
buttonReset.style.display = 'none'

})


const imageEnd = document.querySelector('.cuboEnd')
const imageStart =  document.querySelector('.playerCurrent')

function image (){

    imageEnd.classList.remove('imgBurro')
   
    imageStart.classList.remove('imgPlayer');
    imageStart.classList.add('imgEnd')
  
}



