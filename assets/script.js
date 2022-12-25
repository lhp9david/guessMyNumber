
/*******************************************Generer nombre aleatoire entre 1 et 100 ********************************************/
let randomNumber = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
let number = document.querySelector('#number');
number.innerHTML = randomNumber;


let input = document.querySelector('input');

let vie = 6;

function jouer(){
    if (input.value == randomNumber) {

        let message = document.querySelector('#message');
        message.innerText = 'Bravo'
        message.style.color = 'green'
        number.style.filter = 'none'
        number.style.color = 'green'
        let rejouer = document.createElement('button');
                    rejouer.innerText = 'rejouer';
                    document.querySelector('.proposition').appendChild(rejouer)
                    rejouer.addEventListener('click', ()=>{
                        window.location.reload();
                    })
        
    } else if (input.value < randomNumber){
        message.innerText = "c'est plus"
        message.style.color = 'red';
        let proposition = document.createElement('p');
        proposition.innerText = input.value ;
        document.querySelector('.proposition').appendChild(proposition)
        
    } else if (input.value > randomNumber){
        message.innerText = "c'est moins"
        message.style.color = 'red'
        let proposition = document.createElement('p');
        proposition.innerText = input.value ;
        document.querySelector('.proposition').appendChild(proposition);
    }
    if(vie == 1){
       
        message.innerText = 'perdu'
        document.querySelector('.champs').style.display = 'none'
        number.style.filter = 'none'
        let rejouer = document.createElement('button');
                    rejouer.innerText = 'rejouer';
                    document.querySelector('.proposition').appendChild(rejouer)
                    rejouer.addEventListener('click', ()=>{
                        window.location.reload();
                    })
    }
    
    input.value = ''
    input.focus();
    vie--
    console.log(vie)
    document.querySelector('.life-content').removeChild(document.querySelector('img'))



}

let valider = document.querySelector('button');

valider.addEventListener('click', jouer)

window.addEventListener('keypress', e => {
    if ( e.key == 'Enter'){
        jouer();
        console.log(vie)
    }})
