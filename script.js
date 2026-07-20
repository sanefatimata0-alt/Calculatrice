let historique = document.getElementById("historique");
let resultat = document.getElementById("resultat");
let calcul = ""; 
let ans = "";
let boutons = document.querySelectorAll("button"); 


boutons.forEach(function (bouton) {
  bouton.addEventListener("click", () => {
    if (bouton.dataset.value) {
      calcul += bouton.dataset.value; 
      historique.textContent = calcul;
      resultat.textContent = calcul;
    }
    if (bouton.dataset.action == "equals") {
      try {
        ans = eval(calcul); 
        historique.textContent = calcul + " =";
        resultat.textContent = ans;
        calcul = ans.toString();
      } catch {
        resultat.textContent = "Erreur";
        calcul = "";
      }
    }
    if (bouton.dataset.action == "effacer") {
      calcul = "";
      resultat.textContent = "0";
      historique.textContent = "0";
    }
    if (bouton.dataset.action == "supprimer") {
      calcul = calcul.slice(0, -1); 
      if (calcul == "") {
        resultat.textContent = "0";
      } else {
        resultat.textContent = calcul;
      }
    }
    if (bouton.dataset.action == "ans") {

      calcul += ans;
      resultat.textContent = calcul;
    }

  });

});