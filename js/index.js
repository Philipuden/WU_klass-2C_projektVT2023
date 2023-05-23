const mybutton = document.getElementById('knapp_index');

function tomRuta() {
  document.getElementById("text_ruta1").value = "";
  document.getElementById("text_ruta2").value = "";
  document.getElementById("text_ruta3").value = "";

  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");    
}

mybutton.addEventListener('click', tomRuta);