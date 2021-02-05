window.addEventListener('DOMContentLoaded', () =>{
    const colorSelect = document.querySelector('#colorID'),
      widthSelect = document.querySelector('#widthID'),
      heightSelect = document.querySelector('#heightID'),
      btn = document.querySelector('#btn'),
      box = document.querySelector('.box');


btn.addEventListener('click', ()=>{
    box.style.background = colorSelect.value;
    box.style.width = widthSelect.value;
    box.style.height = heightSelect.value;
    box.style.transition = 'all 0.5s';
});
});