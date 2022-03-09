const buttons = Array.from(document.querySelectorAll("button"));
const display = document.querySelector(".result");

buttons.map(button=>{
    button.addEventListener("click", e=>{
        switch(e.target.innerText){
            case 'C':
                display.innerText = ''
                break
            case 'dlt':
                display.innerText = display.innerText.slice(0,-1)
                break
            case '=':
                // const solution = eval(display.innerText);
                const solution = Function('"use strict";return (' + display.innerText + ')')();
                if((solution - Math.floor(solution)) !== 0){
                    display.innerText = solution.toFixed(2);
                }else{
                    display.innerText = solution;
                }
                break;
            default:
                display.innerText += e.target.value;
        }
    })
})
