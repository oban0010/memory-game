
bt = document.getElementsByClassName("bt");

window.addEventListener('load',function(){
  bt[2].addEventListener('click',function(){
    count =0; 
   let randomPos
  
diffcutHtml = '<h1>Memory Game</h1>';
for(i=0; i<6; i++){
   randomPos = Math.floor(Math.random() * 12);
  diffcutHtml +='<div class="memory-card" onclick="flipCard(this,6)" data-framework="'+images[i]+'" style="order:'+randomPos+'"><img class="front-face" src="img/'+images[i]+'.jpg" /></div>';
   randomPos = Math.floor(Math.random() * 12);
  diffcutHtml +='<div class="memory-card" onclick="flipCard(this,6)" data-framework="'+images[i]+'" style="order:'+randomPos+'"><img class="front-face" src="img/'+images[i]+'.jpg" /></div>';

}
document.getElementById("popup").style.display= 'none';
document.getElementsByClassName("memory-game")[0].style.display ='flex';
document.getElementsByClassName("memory-game")[0].innerHTML = diffcutHtml;
})
  bt[1].addEventListener('click',function(){
    count =0; 
   let randomPos
  
diffcutHtml = '<h1>Memory Game</h1>';
for(i=0; i<4; i++){
   randomPos = Math.floor(Math.random() * 8);
  diffcutHtml +='<div class="memory-card" onclick="flipCard(this,4)" data-framework="'+images[i]+'" style="order:'+randomPos+'"><img class="front-face" src="img/'+images[i]+'.jpg" /></div>';
   randomPos = Math.floor(Math.random() * 8);
  diffcutHtml +='<div class="memory-card" onclick="flipCard(this,4)" data-framework="'+images[i]+'" style="order:'+randomPos+'"><img class="front-face" src="img/'+images[i]+'.jpg" /></div>';

}
document.getElementById("popup").style.display= 'none';
document.getElementsByClassName("memory-game")[0].style.display ='flex';
document.getElementsByClassName("memory-game")[0].innerHTML = diffcutHtml;
})

  bt[0].addEventListener('click',function(){
    count =0; 
   let randomPos
  
diffcutHtml = '<h1>Memory Game</h1>';
for(i=0; i<3; i++){
   randomPos = Math.floor(Math.random() * 6);
  diffcutHtml +='<div  class="memory-card" onclick="flipCard(this,3)" data-framework="'+images[i]+'" style="width:calc(33% - 10px); order:'+randomPos+'"><img class="front-face" src="img/'+images[i]+'.jpg" /></div>';
   randomPos = Math.floor(Math.random() * 6);
  diffcutHtml +='<div class="memory-card" onclick="flipCard(this,3)" data-framework="'+images[i]+'" style="width:calc(33% - 10px); order:'+randomPos+'"><img class="front-face" src="img/'+images[i]+'.jpg" /></div>';

}
document.getElementById("popup").style.display= 'none';
document.getElementsByClassName("memory-game")[0].style.display ='flex';
document.getElementsByClassName("memory-game")[0].innerHTML = diffcutHtml;
})





})


    function newgame(){
      
      document.getElementsByClassName("memory-game")[0].style.display ='none';
        document.getElementById("popup").style.display= 'block';
   document.getElementById("won").style.display= 'none';
     
      }

const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard(el,total) {
  if (lockBoard) return;
  if (el === firstCard) return;

  el.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = el;

    return;
  }

  secondCard = el;
  checkForMatch(total);
}

function checkForMatch(total) {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  isMatch ? disableCards(total) : unflipCards();
}


function disableCards(total) {
  count++;

  firstCard.classList.add("match");
  secondCard.classList.add("match");
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
   if(count == total){
      setTimeout(() => {
   document.getElementById("popup").style.display= 'none';
   document.getElementById("won").style.display= 'block';
 },700);
  }

  resetBoard();
}



function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 500);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}



cards.forEach(card => card.addEventListener('click', flipCard));

images =['cat','dog','antler','butterfuly','parrot','leapord']

