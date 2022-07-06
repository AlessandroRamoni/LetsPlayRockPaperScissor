document.addEventListener("DOMContentLoaded", function () {
  var inizia = document.getElementById("inizia");
  var numRandom;
  var puntiYou = 0;
  var puntiCpu = 0;
  inizia.onclick = function () {
    document.getElementById("inizia").style.visibility = "hidden";
    document.getElementById("scelta").style.display = "block";
    document.getElementById("risultato").style.display = "none";
    document.getElementById("you").style.backgroundImage = "";
    document.getElementById("cpu").style.backgroundImage = "";
    numRandom = Math.floor(Math.random() * 3);
  };

  function assegnazione() {
    if (numRandom == 0) {
      document.getElementById("cpu").style.backgroundImage =
        "url('immagini/foglia.png')";
    } else if (numRandom == 1) {
      document.getElementById("cpu").style.backgroundImage =
        "url('immagini/forbice.png')";
    } else {
      document.getElementById("cpu").style.backgroundImage =
        "url('immagini/sasso.png')";
    }
  }
  var foglia = document.getElementById("foglia");
  var forbice = document.getElementById("forbice");
  var sasso = document.getElementById("sasso");
  var risultato = document.getElementById("risultato");
  var newgame = document.getElementById("nuova");

  foglia.onclick = function () {
    document.getElementById("scelta").style.display = "none";
    document.getElementById("you").style.backgroundImage =
      "url('immagini/foglia.png')";
    assegnazione();
    if (numRandom == 0) {
      risultato.innerHTML = "<span class='patta'>Partita patta..</span>";
      //risultato.classList.add("#risultato .patta");
    } else if (numRandom == 1) {
      risultato.innerHTML = "<span class='persa'>Hai perso!!</span>";
      puntiCpu++;
      document.getElementById("punteggioCpu").innerHTML = puntiCpu;
    } else {
      risultato.innerHTML = "<span class='vinta'>Hai vinto!!!</span>";
      puntiYou++;
      document.getElementById("punteggioYou").innerHTML = puntiYou;
    }
    document.getElementById("inizia").style.visibility = "visible";
    document.getElementById("risultato").style.display = "block";
    newgame.style.visibility = "visible";
  };

  forbice.onclick = function () {
    document.getElementById("scelta").style.display = "none";
    document.getElementById("you").style.backgroundImage =
      "url('immagini/forbice.png')";
    assegnazione();
    if (numRandom == 0) {
      risultato.innerHTML = "<span class='vinta'>Hai vinto!!!</span>";
      puntiYou++;
      document.getElementById("punteggioYou").innerHTML = puntiYou;
    } else if (numRandom == 1) {
      risultato.innerHTML = "<span class='patta'>Partita patta..</span>";
    } else {
      risultato.innerHTML = "<span class='persa'>Hai perso!!</span>";
      puntiCpu++;
      document.getElementById("punteggioCpu").innerHTML = puntiCpu;
    }
    document.getElementById("inizia").style.visibility = "visible";
    document.getElementById("risultato").style.display = "block";
    newgame.style.visibility = "visible";
  };

  sasso.onclick = function () {
    document.getElementById("scelta").style.display = "none";
    document.getElementById("you").style.backgroundImage =
      "url('immagini/sasso.png')";
    assegnazione();
    if (numRandom == 0) {
      risultato.innerHTML = "<span class='persa'>Hai perso!!</span>";
      puntiCpu++;
      document.getElementById("punteggioCpu").innerHTML = puntiCpu;
    } else if (numRandom == 1) {
      risultato.innerHTML = "<span class='vinta'>Hai vinto!!!</span>";
      puntiYou++;
      document.getElementById("punteggioYou").innerHTML = puntiYou;
    } else {
      risultato.innerHTML = "<span class='patta'>Partita patta..</span>";
    }
    document.getElementById("inizia").style.visibility = "visible";
    document.getElementById("risultato").style.display = "block";
    newgame.style.visibility = "visible";
  };

  newgame.addEventListener("click", () => {
    location.reload();
  });
}); //DOM
