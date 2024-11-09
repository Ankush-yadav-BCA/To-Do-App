let inp = document.querySelector(".inp");
let btn = document.querySelector(".btn");

let list = document.querySelector(".list");

inp.addEventListener("input",()=>{
    if(inp.value != ""){
        btn.classList.add("active");
    }else{
        btn.classList.remove("active");
    }
})

//----------------to add Item in list form
btn.addEventListener("click",()=>{
    if(inp.value != ""){
        let item = document.createElement("li");
        item.innerText = (`${inp.value}   `);
        item.classList.add("items");
        list.appendChild(item);

        let deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Remove";
        deleteBtn.classList.add("delete");
        item.appendChild(deleteBtn);

        inp.value = "";
        btn.classList.remove("active");
    }else{
        alert("Enter the task first");
    }
})
//----------------to remove item from list
list.addEventListener("click",(ev)=>{
    if(ev.target.nodeName == "BUTTON"){//to add click event add only on button element
        let lstItem = ev.target.parentElement; // to access that list item in list of items
        lstItem.classList.add("delete");
        setTimeout(() => {
            lstItem.remove(); 
        }, 150);
    }
})
