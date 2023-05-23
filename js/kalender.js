const article1 = document.getElementById('article_k1');
const article2 = document.getElementById('article_k2');
const article3 = document.getElementById('article_k3');
const article4 = document.getElementById('article_k4');
const article5 = document.getElementById('article_k5');

const textRuta1 = document.getElementById('text1');
const textRuta2 = document.getElementById('text2');
const textRuta3 = document.getElementById('text3');
const textRuta4 = document.getElementById('text4');
const textRuta5 = document.getElementById('text5');

function doljAllaTextRutor() {
  console.log("funktionen körs!");
  textRuta1.classList.add('osynlig');
  textRuta2.classList.add('osynlig');
  textRuta3.classList.add('osynlig');
  textRuta4.classList.add('osynlig');
  textRuta5.classList.add('osynlig');
}

article1.addEventListener('click', function() {
  doljAllaTextRutor();
  textRuta1.classList.remove('osynlig');
});

article2.addEventListener('click', function() {
  doljAllaTextRutor();
  textRuta2.classList.remove('osynlig');
});

article3.addEventListener('click', function() {
  doljAllaTextRutor();
  textRuta3.classList.remove('osynlig');
});

article4.addEventListener('click', function() {
  doljAllaTextRutor();
  textRuta4.classList.remove('osynlig');
});

article5.addEventListener('click', function() {
  doljAllaTextRutor();
  textRuta5.classList.remove('osynlig');
});