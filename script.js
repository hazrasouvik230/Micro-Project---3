let button = document.querySelectorAll("button");
let string = "";
let arr = Array.from(button);
for(let i of arr) {
    i.addEventListener("click", () => {
        if(i.innerHTML == "=") {
            string = eval(string);
            if(string % 1 === 0) {
                result.value = string;
            }
            else {
                result.value = string.toFixed(2);
            }
        }
        else {
            if(i.innerHTML == "RESET") {
                string = "";
                result.value = string;
            }
            else if(i.innerHTML == "DEL") {
                string = string.slice(0, string.length-1);
                result.value = string;
            }
            else if(i.innerHTML == "+") {
                string += " "+i.innerText+" ";
                result.value = string;
            }
            else if(i.innerHTML == "-") {
                string += " "+i.innerText+" ";
                result.value = string;
            }
            else if(i.innerHTML == "*") {
                string += " "+i.innerText+" ";
                result.value = string;
            }
            else if(i.innerHTML == "/") {
                string += " "+i.innerText+" ";
                result.value = string;
            }
            else {
                string += i.innerText;
                result.value = string;
            }
        }
    })
}

