function demarer() {
  let prenom = prompt("Entrez votre Prénom :");
  if (prenom === null) {
    alert("Prénom invalide !");
    return;
  }
  let age = prompt("Entrez votre âge :");
  age = Number(age);
  if (age === null || isNaN(Number(age))) {
    alert("Âge invalide !");
    return;
  }
  let ageprochaine = age + 1;
  console.log("type de prenom :", typeof prenom, "type de age :", typeof age);
  alert(
    "Bonjour " +
      prenom +
      ", vous aurez " +
      ageprochaine +
      " ans annees prochaine",
  );
  let continuer = confirm("Voulez-vous continuer ?");
  console.log("Réponse :", continuer);
}
function sommeEntiers() {
  let n = document.getElementById("nbr").value;
  n = Number(n);
  if (n > 100 || n < 1) {
    alert("Veuillez entrer un nombre entre 1 et 100.");
    return;
  } else {
    let s = 0;
    for (let i = 1; i <= n; i++) {
      s += i;
    }
    document.getElementById("resultatSomme").textContent =
      "La somme des entiers de 1 à " + n + " est : " + s;
  }
}
function nombresPairs() {
  let n = document.getElementById("nbr").value;
  n = Number(n);
  if (n > 100 || n < 1) {
    alert("Veuillez entrer un nombre entre 1 et 100.");
    return;
  } else {
    let pairs = [];
    for (let i = 0; i <= n; i++) {
      if (i % 2 === 0) {
        pairs.push(i);
      }
    }
    document.getElementById("resultatPaire").textContent =
      "Les nombres pairs de 1 à " + n + " sont : " + pairs.join(", ");
  }
}
// exercice 3

let titre = document.getElementById("titreCours");
let section = document.getElementById("cours");
let p = section.getElementsByTagName("p");
let chapitres = document.getElementsByClassName("chapitre");
let premierChapitre = document.querySelector(".chapitre");
let chapitreImportant = document.querySelector(".important");
let tousparagraphes = document.querySelectorAll("p.chapitre");
let n = tousparagraphes.length;

console.log("Nombre de paragraphes :", p.length);

function modifierPresentation() {
  titre.textContent = "JavaScript : une page interactive ";

  for (let i = 0; i < n; i++) {
    p[i].style.color = "blue";
  }

  let boutonModifier = document.getElementById("modifier");
  boutonModifier.textContent = "Présentation modifiée";
}

// ex 4
function mettreEnEvidence(champ) {
  champ.style.backgroundColor = "yellow";
}
function retablirStyle(champ) {
  champ.style.backgroundColor = "";
}
function afficherSaisie(champ) {
  document.getElementById("apercu").textContent = champ.value;
}
function changerCouleur(texte) {
  texte.style.color = "red";
}
function retablirCouleur(texte) {
  texte.style.color = "";
}
let bouton = document.getElementById("selectionner");
bouton.addEventListener("click", function () {
  let champ = document.getElementById("prenom");
  champ.focus();
  champ.select();
});
// exer 5
const formulaire = document.forms["inscription"];
const champNom = formulaire.elements["nom"];
const message = document.getElementById("message");
const recapitulatif = document.getElementById("recapitulatif");

formulaire.addEventListener("submit", function (event) {
  event.preventDefault();
  const nom = champNom.value.trim();
  const profession = formulaire.elements["profession"].value;
  const sexe = formulaire.querySelector('input[name="sexe"]:checked');
  const langues = formulaire.querySelectorAll('input[name="langues"]');

  message.textContent = "";
  recapitulatif.textContent = "";

  if (nom.length < 3) {
    message.textContent =
      "Erreur : le nom doit contenir au moins trois caractères.";
    champNom.focus();
    return;
  }

  if (profession === "") {
    message.textContent = "Erreur : choisissez une profession.";
    return;
  }
  if (sexe === null) {
    message.textContent = "Erreur : sélectionnez un sexe.";
    return;
  }
  const languesSelectionnees = [];

  for (let i = 0; i < langues.length; i++) {
    if (langues[i].checked) {
      languesSelectionnees.push(langues[i].value);
    }
  }
  if (languesSelectionnees.length === 0) {
    message.textContent = "Erreur : sélectionnez au moins une langue.";
    return;
  }

  const inscription = {
    nom: nom,
    profession: profession,
    sexe: sexe.value,
    langues: languesSelectionnees,

    presenter: function () {
        return `Nom : ${this.nom}
        Profession : ${this.profession}
        Sexe : ${this.sexe} 
        Langues : ${this.langues.join(", ")}`;
    },
  };

  recapitulatif.textContent = inscription.presenter();
});

formulaire.addEventListener("reset", function () {
  message.textContent = "";
  recapitulatif.textContent = "";
});
