let minus = document.querySelector('.minus');
let plus = document.querySelector('.plus');
let total = document.querySelector('.total');
let brGost = document.querySelector('.br-gost');

let sum = 0;

minus.setAttribute('disabled', 'disabled');
minus.style.cursor = 'not-allowed';

plus.addEventListener('click', () => {
    sum += 1;
    total.innerHTML = sum;
    brGost.innerHTML = sum;
    if(sum > 0) {
        minus.style.cursor = 'pointer';
        minus.removeAttribute('disabled', 'disabled');
    }
})

minus.addEventListener('click', () => {
    sum -= 1;
    total.innerHTML = sum;
    brGost.innerHTML = sum;
    if(sum === 1) {
        minus.setAttribute('disabled', 'disabled');
        minus.style.cursor = 'not-allowed';
    }
}) 

console.log(sum);

