let btn= document.querySelector('button');
let input= document.querySelector('input');
let ul = document.querySelector('ul');

btn.addEventListener('click', function()
{
    let items = document.createElement('li');
    items.innerText= input.value;

    if(input.value === ''){
        alert("please enter your task")
    }
    else{
        let delBtn= document.createElement('button')    ;
        delBtn.innerText= "Delete";
        delBtn.classList.add("delete");
    

        items.appendChild(delBtn);
        ul.appendChild(items);
        input.value="";
    }
});


ul.addEventListener('click',function (event) 
{
    if(event.target.tagName=="BUTTON")
    {
        let listItem = event.target.parentElement;
        listItem.remove();
    }
   
});


