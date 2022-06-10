//recup infos touches
//spread operator (nodelist pas facile a manip donc mis sous forme de tableau)
const touches = [...document.querySelectorAll(".bouton")];
console.log(touches);
//map: recupere le tableau touches et crée un nouveau tableau (ici utilise la methode dataset(recupère le keycode))
const listeKeycode = touches.map(touche => touche.dataset.key);
console.log(listeKeycode);
//pour avoir le keycode => sur le site keycode.info
//ecran
const ecran = document.querySelector(".ecran")

//evenement
//keydown
document.addEventListener('keydown', (KeyBoardEvent) => {
    const valeur = KeyBoardEvent.key;
    //key et non code car clavier azerty
    //valeur string
    console.log(valeur);
    calculer(valeur)
});
//click sur la touche
document.addEventListener('click', (e) => {
    const valeur = e.target.dataset.key; //on recupere la touche puis la valeur de la data-key
    console.log(valeur)
    calculer(valeur)
})

//fct calcul
const calculer = (valeur) => {
    //test autres touches du clavier
    //si mon keycode est contenu dans la listekeycode, renvoie true
    if(listeKeycode.includes(valeur)){
        // 2 cas particuliers
        switch(valeur){
            //1er cas: touche C (valeur 8) pour effacer
            case '8':
                ecran.textContent ="";
                break;
            //2e cas le = : afficher le resultat de l'operation
            case '61':
                //evaluer le contenu de l'ecran
                const calcul = eval(ecran.textContent)
                ecran.textContent = calcul;
                break;
            //par default: les autres touches
            default:
                //recupere l'index du keycode
                const indexKeycode = listeKeycode.indexOf(valeur);
                const touche = touches[indexKeycode];
                //on rajoute dans le html la valeur de la touche appuyée
                ecran.textContent += touche.innerHTML;
        }
    }
}

//en cas d'erreur (mauvaise suite de touches)
window.addEventListener('error',(e) => {
    alert("Une erreur est survenue lors de votre calcul\n" + e.message)
});