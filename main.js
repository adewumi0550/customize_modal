var modal = document.getElementById('simpleModal');



var modalBtn = document.getElementById('modalBtn');

var closeBtn = document.getElementsByClassName('closeBtn')[0];
//create a function modal popup on click
modalBtn.addEventListener('click', openModal);
//Close the  modal
closeBtn.addEventListener('click', closeModal);


//Out sie the modal
window.addEventListener('click', outsideCLick)
function openModal() {
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}

function outsideCLick(e) {
   if(e.target == modal){
       modal.style.display = 'none';
   } 
}
