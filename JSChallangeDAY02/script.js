const input = document.querySelector("#add"),
      btn = document.querySelector("#btn"),
      list = document.querySelector("#list");


function addElems(){
    let userText = input.value;
    if(userText ==''){
        alert('Zəhmət olmasa iş əlavə edin');
    }else{
        const li = document.createElement('li');
            li.textContent = userText;
            list.insertBefore(li,list.childNodes[0]);
            input.value = '';
    }
}

btn.addEventListener('click', addElems);


list.addEventListener('click', (e)=>{
    if(e.target.tagName == 'LI'){
        e.target.classList.toggle('checked');
   }
});