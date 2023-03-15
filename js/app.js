const borgir = document.getElementById('burgare')
const länkLista = document.getElementById('länk_lista')

function toggleMeny() {

    länkLista.classList.toggle('länk_lista_synlig')

    borgir.classList.toggle('burgare_i_x_form')

}

borgir.addEventListener('click', toggleMeny)

//----------------------------------------

function initMap() {
  
    const prastgarden = { lat: 57.68072913961839, lng: 12.20877225925624 };
    
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 14,
      center: prastgarden,
    });
    
    const marker = new google.maps.Marker({
      position: prastgarden,
      map: map,
    });
  }
  
  window.initMap = initMap; 