let buttons = document.querySelectorAll("button");
let display = document.getElementById("display");
let result = "";
buttons.forEach(btn =>{
    btn.addEventListener("click",()=>{
        let btnvalue = btn.innerText;
        if(btnvalue === "AC"){
            result ="";
            display.value = result;
        } else if(btnvalue ==="DEL"){
            result = result.slice(0,-1);
            display.value = result;
        }else if(btnvalue==="="){
            display.value = eval(result);
            result = display.value;
        } else {
            result += btnvalue;
            display.value = result;
        }
    })
} )
