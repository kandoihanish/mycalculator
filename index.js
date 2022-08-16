let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenstring = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            screenstring += buttonText;
            screen.value = screenstring;
        }
        else if (buttonText == 'C') {
            screenstring = "";
            screen.value = screenstring;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenstring);
            screenstring = "";
        }
       
        else {
            screenstring += buttonText;
            screen.value = screenstring;
        }
    })
}






























































































