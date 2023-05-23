const borgir = document.getElementById('burgare');
const länkLista = document.getElementById('länk_lista');

function toggleMeny() {

    länkLista.classList.toggle('länk_lista_synlig');

    borgir.classList.toggle('burgare_i_x_form');

}

borgir.addEventListener('click', toggleMeny);


