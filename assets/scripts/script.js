const inputDemo = document.querySelector('#input-demo');
const btnDemoIf = document.querySelector('#btn-demo-01');
const btnDemoSwitch = document.querySelector('#btn-demo-02');
const displayResult = document.querySelector('#display-result');

// L'utilisateur encode une valeur (de 1 à 7) -> Indiquer le jour de la semaine
// Demo avec des "if ... else if ... else"
btnDemoIf.addEventListener('click', () => {

    const inputValue = parseInt(inputDemo.value);

    if (inputValue === 1) {
        displayResult.innerText = 'Lundi';
    }
    else if (inputValue === 2 || inputValue === 3) {
        displayResult.innerText = 'Mardi ou Mercredi';
    }
    else if (inputValue === 4) {
        displayResult.innerText = 'Jeudi';
    }
    else if (inputValue === 5) {
        displayResult.innerText = 'Vendredi';
    }
    else if (inputValue === 6) {
        displayResult.innerText = 'Samedi';
    }
    else if (inputValue === 7) {
        displayResult.innerText = 'Dimanche';
    }
    else {
        displayResult.innerText = 'Erreur :o';
    }
});

btnDemoSwitch.addEventListener('click', () => {

    const inputValue = parseInt(inputDemo.value);

    switch (inputValue) {
        case 1:
            displayResult.innerText = 'Lundi';
            break;
        case 2:
        case 3:
            displayResult.innerText = 'Mardi ou Mercredi';
            break;
        case 4:
            displayResult.innerText = 'Jeudi';
            break;
        case 5:
            displayResult.innerText = 'Vendredi';
            break;
        case 6:
            displayResult.innerText = 'Samedi';
            break;
        case 7:
            displayResult.innerText = 'Dimanche';
            break;
        default:
            displayResult.innerText = 'Erreur :o';
            break;
    }
});