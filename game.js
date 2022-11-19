const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const reset = document.querySelector('.button');
const score = document.querySelector('.score');
var numScore = 0;

    const jump = () => {
        mario.classList.add('jump');
        setTimeout(() => {
            mario.classList.remove('jump');    
        }, 500);
    }

    const loop = setInterval(()=> {

        const temp = setInterval(1000); 
        score.innerHTML = `score: ${temp}`;  

        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
        //é possível peg ar qualquer propriedade css do mario



        if(pipePosition <= 120 && pipePosition > 0   && marioPosition < 80 ){
            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;

            mario.style.animation = 'none';
            mario .style.bottom= `${marioPosition}px`;

            mario.src = './img/game-over.png';
            mario.style.width = '75px';
            mario.style.marginLeft = '50px';

            clearInterval(loop);

            reset.src = './img/reset.png';
            reset.addEventListener("click", function(){
                location.reload();           
            });
        } 
        
 
    }, 10);

    document.addEventListener('keydown', jump);

