let display = document.querySelector("#inputBox");
let buttons = document.querySelectorAll("button");

let buttonArray = Array.from(buttons); 
let string = '';


buttonArray.forEach(btn => {
    btn.addEventListener("click", (event) => {
        if (event.target.textContent === 'DEL') {
            string = string.slice(0, -1);
            display.value = string;
        } else if (event.target.textContent === 'AC') {
            string = '';
            display.value = string;
        } else if (event.target.textContent === '=') {
            string = eval(string)
            display.value = string
        } else {
            string += event.target.textContent;
            display.value = string;
        }
    })
})

// document.addEventListener("DOMContentLoaded", function() {
//     let display = document.querySelector("#inputBox");
//     let buttons = document.querySelectorAll("button");
//     let string = '';

//     buttons.forEach(btn => {
//         btn.addEventListener("click", (event) => {
//             let btnValue = event.target.textContent.trim();

//             switch (btnValue) {
//                 case 'DEL':
//                     string = string.slice(0, -1);
//                     display.value = string;
//                     break;
//                 case 'AC':
//                     string = '';
//                     break;
//                 case '=':
//                     try {
//                         string = eval(string);
//                     } catch {
//                         string = "Error";
//                     }
//                     break;
//                 default:
//                     string += btnValue;
//                     break;
//             }

//             // Update the display after every button press
//             display.value = string;
//         });
//     });
// });







// Handle keyboard input

// let display = document.querySelector("#inputBox");
// let string = '';

// document.addEventListener("keyup", (event) => {
//     let key = event.key;

//     if (key === 'Backspace') {
//         string = string.slice(0, -1);
//         display.value = string;
//     } else if (key === 'Escape') {
//         string = '';
//         display.value = string;
//     } else if (key === 'Enter') {
//         try {
//             string = eval(string);
//             display.value = string;
//         } catch {
//             display.value = 'Error';
//         }
//     } else if (/^[0-9+\-*/.%]$/.test(key)) {
//         string += key;
//         display.value = string;
//     }
// });



