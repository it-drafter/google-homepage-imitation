const input = document.querySelector('#inputfield');
const del = document.querySelector('#del');
const vertbar = document.querySelector('#vertbar');

const prikazi = () => {
    !!input.value ? 
    (del.style.visibility = 'visible') && (vertbar.style.visibility = 'visible') : 
    (del.style.visibility = 'hidden') && (vertbar.style.visibility = 'hidden');
}

const obrisi = () => {
    input.value = '';
    del.style.visibility = 'hidden';
    vertbar.style.visibility = 'hidden';
    input.focus();
}

input.addEventListener("keyup", prikazi, false);
del.addEventListener("click", obrisi, false);
