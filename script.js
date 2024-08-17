let button = document.querySelectorAll("button");
let string = "";
let arr = Array.from(button);
for(let elements of arr) {
    elements.addEventListener("click", () => {
        if(elements.innerText == "=") {
            try {
                string = eval(string.replace(/x/g, '*'));
                if(string % 1 == 0) {
                    result.value = string;
                }
                else {
                    string = string.toFixed(3);
                    result.value = string;
                }
            }
            catch(error) {
                result.value = "Error";
            }
        }
        else {
            if(elements.innerText == "DEL") {
                string = string.toString();
                string = string.slice(0, -1);
                result.value = string;
            }
            else if(elements.innerText == "RESET") {
                string = "";
                result.value = string;
            }
            else if(elements.innerText == "+") {
                string += " "+ elements.innerText + " ";
                result.value = string;
            }
            else if(elements.innerText == "-") {
                string += " "+ elements.innerText + " ";
                result.value = string;
            }
            else if(elements.innerText == "x") {
                string += " "+ elements.innerText + " ";
                result.value = string;
            }
            else if(elements.innerText == "/") {
                string += " "+ elements.innerText + " ";
                result.value = string;
            }
            else {
                string += elements.innerText;
                result.value = string;
            }
        }
    });
}