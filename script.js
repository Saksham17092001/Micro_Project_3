let string = '';
let buttons = document.querySelectorAll(".btn");
let display = document.querySelector("#display");
Array.from(buttons).forEach((btn) => {
btn.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
    string = eval(string);
    display.innerHTML = string;
    } 
    else if (e.target.innerHTML == "RESET") {
    display.innerHTML = '0';
    } 
    else if (e.target.innerHTML == "DEL") {
    string = string.slice(0, -1) || '0';
    display.innerHTML = string;
    } 
    else {
    if (e.target.innerHTML === "X") {
        string =string + "*";
    }
    else {
        string = string + e.target.innerHTML;
    }
    display.innerHTML = string;
    }
});
});

