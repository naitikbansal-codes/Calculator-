let buttons = document.querySelectorAll("button");
let display = document.getElementById("display");
let string = "";
buttons.forEach(btn => {
    btn.addEventListener("click" , ()=>{
        let btnvalue=btn.innerText;
        if(btnvalue === "AC") {
            string = "";
            display.value = string;
        } else if(btnvalue === "="){
            string = eval(string);
            display.value = string;
        } else if(btnvalue === "DEL"){
            string = string.slice(0,-1);
            display.value = string;
        } else{
            string += btnvalue;
            display.value = string;
        }
        
    })
})