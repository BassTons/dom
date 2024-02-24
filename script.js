/*INIZIO DI SCENEGGIATURA*/
//RECUPERO PRIMORDIALE GUADAGNI
var articolo = document.querySelectorAll('.articolo');
var PadreArticolo = document.querySelector('.padre');
var prezzoTotale = document.getElementById('totale-prezzo'); 

//CRESCITA , DIMINUZIONE , RIMOZIONE ET FAVORITO
for (var i = 0; i < articolo.length; i++) {

//RECUPERO DA PULSANTI E DA PREZZO
    let meno = articolo[i].children[1]; //PUSANTE MENO
    let piu = articolo[i].children[3]; // PUSANTE PIU
    let btnDelete = articolo[i].children[4];// PUSANTE RIMOZIONE
    let articolonum = articolo[i].children[2];//LETTORI D'ARTICOLO
    let quantite = parseInt(articolonum.innerText);//LA QUANTITE
    let prezzo = articolo[i].children[7].children[0];//PRIX TOTAL DES ARTICLES
    let prezzoUnità = articolo[i].children[6];//PRIX UNITAIRE
    let ArticoloPrezzo = parseInt(prixUnit.innerText);//PRIX DE L'ARTICLE EN TEXTE
    let Fav = articolo[i].children[5];//PUSANTE PREFERITI
}

//DECRIMENTER LE NOMBRE D'ARTICLE ET METTRE A JOUR LE PRIX
    meno.addEventListener('click', function () {
        if (quantite > 0) {
            quantite--;
            articolonum.innerHTML = quantità;
            prezzo.innerText = quantite * ArticoloPrezzo;
            calSum(); 
        }
    });


//AUGMENTER LE NOMBRE D'ARTICLE ET METTRE A JOUR
    piu.addEventListener('click', function () {
        quantità++;
        articoloNum.innerHTML = quantità;
        prezzo.innerText = quantità * ArticoloPrezzo;
        calSum(); 
    });

//ELIMINARE UN ARTICOLO E METTERE A GIORNO
    btnDelete.addEventListener('click', function (e) {
        e.target.padreElement.remove();
        calSum(); // Mettez à jour le total à chaque suppression
    });

//AGGIUNTA IN PREFERITI E CAMBIAMENTO DI COLORE
    const colors = ['red', 'transparent']; // Listes de colore
    let currentIndex = 0;

    Fav.addEventListener('click', function () {
        Fav.style.backgroundColor = colors[currentIndex];
        currentIndex = (currentIndex + 1) % colors.length;
        return alert(`Added to favorite`)
    });



//CALCUL DES PRIX TOTAUX
function calSum() {
    let totale = 0;

    // Parcourez chaque article pour calculer le total
    for (var i = 0; i < articolo.length; i++) {
        totale += parseInt(articolo[i].querySelector('.prezzo').innerText.replace('$', '')) * parseInt(articolo[i].querySelector('.quantità').innerText);
    }

    prezzoTotale.textContent = totale.toFixed(2) + ' $'; 
   
   
}

                                  /*FIN DU SCRIPT*/   

  
