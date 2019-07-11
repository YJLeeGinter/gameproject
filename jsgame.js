const startButton = document.querySelector('button');
startButton.addEventListener('click', colorChange);

function colorChange(){
    const elems = document.getElementsByClassName('first');
    for(let i =0; i < 3; i++){
        elems[i].className = 'second';
    }
  for(let i =4; i < 7; i++){
        elems[i].className = 'third';
    }
}
