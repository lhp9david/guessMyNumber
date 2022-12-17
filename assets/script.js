
/*******************************************Generer nombre aleatoire entre 1 et 100 ********************************************/
let randomNumber = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
let number = document.querySelector('#number');
number.innerHTML = randomNumber;


let input = document.querySelector('input');

let vie = 6;



let valider = document.querySelector('button');

valider.addEventListener('click', ()=> {
    
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
    
    input.value = ''
    input.focus();
    vie--
    document.querySelector('.life-content').removeChild(document.querySelector('img'))
    if(vie == 0){
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
})
// window.addEventListener('keypress', e => {
//     if ( e.key == 'Enter'){
//         if (input.value == randomNumber.textContent) {

//             let message = document.querySelector('#message');
//             message.innerText = 'Bravo'
//             randomNumber.style.filter = 'none'
//             let rejouer = document.createElement('button');
//             rejouer.innerText = 'rejouer';
//             document.querySelector('.proposition').appendChild(rejouer)
//             rejouer.addEventListener('click', ()=>{
//                 window.location.reload();
//             })
            
//         } else if (input.value < randomNumber.textContent){
//             message.innerText = "c'est plus"
//             let proposition = document.createElement('p');
//             proposition.innerText = `${input.value}-`;
//             document.querySelector('.proposition').appendChild(proposition)
    
            
//         } else if (input.value > randomNumber.textContent){
//             message.innerText = "c'est moins"
//             let proposition = document.createElement('p');
//             proposition.innerText = input.value;
//             document.querySelector('.proposition').appendChild(proposition)
//         }
//         input.value = ''
        
//     }
// })

