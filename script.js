const button = document.querySelector('button');
const popup = document.querySelector('.popup-wrapper');
const closePopup = document.querySelector('.popup-close');

button.addEventListener('click' , e=>{
  popup.style.display = 'block'
});

closePopup.addEventListener('click' , e=>{
  popup.style.display = 'none'
})

popup.addEventListener('click' , e=>{
  popup.style.display = 'none'
})