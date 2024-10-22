//console.log("Hello World");

// const entreesPremiereSemaine = 1000
// const entreesDeuxiemeSemaine = 2000
// const totalEntrees = entreesPremiereSemaine + entreesDeuxiemeSemaine

// console.log(totalEntrees)
// let fax = 2
// let nir = 8
// let totalmind = fax * nir

// console.log(totalmind)


// let tsena = 100
// tsenabe = tsena + 10

// console.log(tsenabe)

// let bibliothèque = 500
// console.log(bibliothèque + 50 - 10 + 6)


// let boky = 500
// let acheter = 50
// let jeter = 20
// let racheter = 5
// let bokytotal = boky + acheter - jeter + racheter
// let text = "Notre bibliothèque possède " + bokytotal +" livres "
// let text2 = text + tsena + " pvarotra seza "

// console.log(text2)

// let totalLivres = 500

// totalLivres += 50
// totalLivres -= 10
// totalLivres += 5

// console.log(totalLivres)

// let affichageTotalLivres = "Notre bibliothèque possède "
// affichageTotalLivres += totalLivres
// affichageTotalLivres += " livres."

// console.log(affichageTotalLivres)


// let monperso =
//     { nom : "rafa", 
//        prenom : "fa", 
//          age : 30, 
//             couleur : "rouge", 
//                hobbie : "foot" }

// monperso.voiture = "ferari"

// console.log(monperso)


// //EXERCICE “Bonjour NOM, votre film NOMDEFILM est en salle NUMERODELASALLE”.

// const objetticket = {
//   nomFilm : "killer",
//   prix : "80 euro",
//   numeroSalle : " 14" 
// }
// let nom = "faniry"
// let text1 = "Bonjour "
// let text22 = " votre film "
// let text3 = " est en salle"

// let texteAffichage = text1 + nom + text22 + objetticket.nomFilm + text3 + objetticket.numeroSalle

// console.log(texteAffichage)


//    //TABLEAUX

// //METHODE PECH
// //suprimer des element et des valeur
// let maCollectionDeFilms = ["Pulp Fiction","Jurassic Park", "Titanic"];
                           
// maCollectionDeFilms.push("Retour vers le futur"); //rajouter une 
// maCollectionDeFilms.pop() //enlever
// console.log(maCollectionDeFilms.length); //nombre dans une tableaux
// console.log(maCollectionDeFilms)


// //--------------------------------------------
// //copie par valeur et par reference


// ////////////////////
// // Copie par valeur
// ////////////////////
// let variableSimple1 = 25
// let variableSimple2 = variableSimple1

// variableSimple2 = 30

// // // Le console.log va afficher 25, le fait d’avoir changé la valeur de variableSimple2 ne change rien pour variableSimple1
// console.log("variableSimple1", variableSimple1)
// console.log("variableSimple2", variableSimple2)

// ///////////////////////
// // Copie par référence
// ///////////////////////
// let variableComplexe1 = ['pomme', 'cerise']
// let variableComplexe2 = variableComplexe1
// let variableComplexe3 = [...variableComplexe1];
// //let variableComplexe3 = ([variableComplexe1],variableComplexe2)

// variableComplexe2.push('poire')
// variableComplexe3.push('carrote')

// // Le console.log va afficher pomme cerise ET poire. On a modifié la seconde variable, mais le contenu de la première a été changé aussi, parce que c’est le même contenu.
// console.log('variableComplexe1', variableComplexe1)
// console.log('variableComplexe2', variableComplexe2)
// console.log('variableComplexe3', variableComplexe3)

// //---------------------------------------------------------------

// //exercice declaration d'une tableaux
// let playlist1 = ["ninho","damso","kery james"]
// let totalMorceaux = playlist1

// console.log("nombre de morceaux",totalMorceaux.length)

// let playlist2 = [...playlist1]

// totalMorceaux.push("soprano","diams")
// console.log("liste de morceaux",playlist1)
// console.log("liste pour mes amis",totalMorceaux)
// console.log("mon liste prefere",playlist2)

// //resultat-------------------------------------------

// let playlist = ["ninho","damso","kery james"]
// playlist.push("la fouine")
// playlist.push("diams")
// playlist.pop()
// console.log("liste des morceaux",playlist,playlist.length)


//ALGORHYTME-------------------------------------------

// let motTapeOk = true // Essayez de mettre false à la place de true

// if (motTapeOk) {
//    console.log("Bravo, vous avez correctement tapé le mot")
// } else {
//    console.log("Échec, le mot n'est pas correct")
// }

// let motUtilisateur = prompt("Entrez un mot :")
// console.log(motUtilisateur)

//exemple 2-----------------------------------------------

// const motApplication = "hello" // Essayez de mettre un autre mot ici !
// let motUtilisateur = prompt("Entrez le mot : " + motApplication)

// if (motUtilisateur === motApplication) {
//    console.log("Bravo !")
// } else {
//    if (motUtilisateur === "Gredin") {
//        console.log("Restez correct !")
//    } else {
//        if (motUtilisateur === "Mécréant") {
//            console.log("Restez correct !")
//        } else {
//            if (motUtilisateur === "Vilain") {
//                console.log("Soyez gentil !")
//            } else {
//                console.log("Vous avez fait une erreur de frappe.")
//            }
//        }
//    }
// }
// //utilisation de switch en combinaison avec case

// switch (motUtilisateur) {
//    case motApplication:
//        console.log("Bravo !")
//        break
//    case "Gredin":
//        console.log("Restez correct !")
//        break
//    case "Mécréant":
//        console.log("Restez correct !")
//        break
//    case "Vilain":
//        console.log("Soyez gentil !")
//        break
//     default:
//        console.log("Vous avez fait une erreur de frappe.")
// }


// const listeMots= ["carote","Pétunia","Serviette"]
// let score = prompt("rentrer le mot :")

// // if (listeMots === score){
// //     console.log("tres bien")
// // }else{
// //     if(listeMots==="Pétunia"){
// //         console.log("tu est presque")
// //     }else{
// //         if(listeMots==="Serviette"){
// //             console.log("non pas")
// //             {else{
// //                     console.log("erreur")
// //                 }
// //             }
// //             }
// //         }
// //     }
// // 
// switch (score){
//     case "carote":
//         console.log("tres bien")
//         break
//         case "Pétunia":
//             console.log("presque")
//             break
//             case "Serviette":
//                 console.log("tres loin")
//                 break
//                 default:
//                     console.log("vous fait une erreur")  

// }

//REPOSENS DE LEXERCICE pas de proposition (else) la valeur et la bonne reponse ou pas 
// plus improvisation  (else sy console log a chaque prompt) kely fa ts nahatadidy :dte modif 10-10-24


// const listeMots= ["carote","Pétunia","Serviette"]
// let score = 0
// let motscorrecte = prompt ("rentrer le mot :")
// if (motscorrecte === listeMots[0]){
//     score++
//     console.log("mots correcte "+listeMots[0]+ " "+score)
// }else{
//     if (motscorrecte !== listeMots[0]){
//         console.log(" le mots correcte est "+ listeMots[0])
//     }

//  }
// motscorrecte = prompt ("rentrer le mot :" + listeMots[1])
// if (motscorrecte === listeMots[1]){
//     score++
//     console.log("mots correcte "+listeMots[1]+" "+ score)
// }
// motscorrecte = prompt ("rentrer le mot :" + listeMots[2])
// if (motscorrecte === listeMots[2]){
//     score++
//     console.log("mots correcte "+listeMots[2]+" "+score)
// }
// console.log(score);




//LES BOUCLE

// for (let brada=0 ; brada<500 ; brada + 1){
//     console.log(brada)
// }


// ------------------------boucle for

// let i = 0
// wile(listecontact[i].nom!=="Alice"){
// i++
// }
// for (let compteur = 0; compteur < 5; compteur = compteur + 1) {
//     console.log(compteur)
// }

//----------------il existe donc une écriture un peu raccourcie. Par convention, on nomme souvent la variable compteur “i” (comme “indice”). Et au lieu d’écrire i = i+1, on utilise l’opérateur d’incrémentation  ++  , qui augmente la valeur d’une variable de 1.

// for (let i = 0; i < 10; i++) {
//     console.log(i)
// }


// ------------------------------------boucle wile

// let i = 0
// while (i < 10) {
//     console.log(i)
//     i++
// }

// exzmplako

// let listeMots= prompt("taper votre mot de passe")

// while(listeMots!=="carote"){
//     listeMots = prompt("taper votre mot de passe")
// }
// console.log("c'est tres bien")



// -----------------------exercice----------------------

// Déclaration du tableau contenant la liste des mots proposés à l'utilisateur
// const listeMots = ['Cachalot', 'Pétunia', 'Serviette']
// let score = 0

// // Déclaration de la variable contenant le mot saisi par l'utilisateur
// // Le prompt sert à afficher une popup demandant à l'utilisateur de saisir un mot
// let motUtilisateur = prompt('Entrez le mot : '+ listeMots[0])

// // Vérification du mot saisi par l'utilisateur : on vérifie qu'il correspond au premier mot du tableau "listeMots"
// if (motUtilisateur === listeMots[0]){
//     score++
// }
// // console.log(score)
// for(prompt=0;prompt<5;prompt++){
//     console.log(motUtilisateur)
// }


// ------------------------------------------------------------------

// Idem avec le second mot du tableau
// Notez l'absence du "let" devant la déclaration de la variable "motUtilisateur", cela permet de réutiliser la variable déclarée précédemment
// motUtilisateur = prompt('Entrez le mot : ' + listeMots[1])
// if (motUtilisateur === listeMots[1]) {
//     score++
// }

// // Idem avec le troisième mot du tableau
// motUtilisateur = prompt('Entrez le mot : ' + listeMots[2])
// if (motUtilisateur === listeMots[2]) {
//     score++
// }

// // Affichage du score de l'utilisateur
// console.log("Votre score est de " + score + " sur 3")


// maitre en pratique un peut 
// const listemots=["bonbon","cigarette","biscuit"]
// const listephrase=["bonbon pecto","cigarette good loock","biscuit bolo"]
// let listephrase=prompt("votre choix "+"phrase")
// let listemots = prompt("votre choix "+"mots")
// let tarif = 0
// let choix = prompt("votre choix et phrase ou mots")

// while(choix!=="phrase" && choix!=="mots"){
//     choix=prompt("votre choix et phrase ou mots")
// }
    
    
    
//         if(choix==="phrase")
//     {
//         for(let i=0;i<listephrase.length;i++){
//             let phrasetapé=prompt("mots a saisir :"+listephrase[i])
//             if(phrasetapé===listephrase[i])
        
//         tarif++}
//         console.log("Votre score est de " + tarif + " sur "+ listephrase.length)
//         }
       
//     else{
//          for(let i=0;i<listemots.length;i++)
//         {let motstapé=prompt("mots a saisir :"+listemots[i])
//             if(motstapé===listemots[i]){
        
//         tarif++}
//             }
//             console.log("Votre score est de " + tarif + " sur " + listemots.length)
//         }
        
      
        
    

    
    
    // for(let i=0;i<listephrase.length;i++)
    //     {let motstapé=prompt("mots a saisir :"+listemots[i])
    //         if(motstapé===listemots[i]){
        
    //     tarif++}
// }



// for(let i=0;i<listemots.length;i++)
//     {let motstapé=prompt("mots a saisir :"+listemots[i])
//         if(motstapé===listemots[i]){
    
//     tarif++}

// }
// 


// je fait faire une exercice a tous ca 

// premier exercice sur les if(si) et else(sinon)

// const listecahier=["ravinala","classic","akanga"]
// let cahierchoisir=prompt ("votre choix :" + listecahier[0])
// let number = 0
// if(cahierchoisir===listecahier[0]){
//     number++
    
// }else {if(cahierchoisir!==listecahier[0]){
//     console.log("koz ve zan le")} 
// }
// cahierchoisir=prompt ("votre choix :" + listecahier[1])
// if(cahierchoisir===listecahier[1]){
//     number++
    
// }else {if(cahierchoisir!==listecahier[1]){
//     console.log("koz ve zan le")
// }} 
//  cahierchoisir=prompt ("votre choix :" + listecahier[2])
// if(cahierchoisir===listecahier[2]){
//     number++
    
// }else {if(cahierchoisir!==listecahier[2]){
//     console.log("koz ve zan le")
// }} 

// console.log("votre score et de " + number + "sur" + listecahier.length)


// dexieme exercice sur les boucle du code en haute avec les code for(pour) et wile(tand que)

// const listecahier=["ravinala","classic","akanga"]
// const listestylo=["bic","shnider","feutre","crayon","gomme"]
// let style=0

// let choix=prompt("quelle et votre outils cahier ou stylo")
// while(choix!=="cahier" && choix!=="stylo"){
//     choix=prompt("quelle et votre outils cahier ou stylo")

// }if(choix==="cahier"){
//     for(a=0;a<listecahier.length;a++){
//         let materiaux=prompt("mon cahier : "+listecahier[a])
//         if(materiaux===listecahier[a])
//             style++
//     }
//     console.log("votre score et de "+style+" sur "+ listecahier.length)
// }else{
//     for(a=0;a<listestylo.length;a++){
//         let materiaux=prompt("mon cahier : "+listestylo[a])
//         if(materiaux===listestylo[a])
//             style++

//     }
//     console.log("votre score et de "+style+" sur "+ listestylo.length)
// }




// petite memmorisation sur les boucle 

// const listefanafody =["amox","efferalgant","tetra"]
// const listepharmacie = ["antanimena","analakely","67ha","ankazomanga"]
// let score=0

// let liste = prompt("fanafody ou pharmacie")
// while(liste!=="fanafody" && liste!=="pharmacie"){
//     liste = prompt("fanafody ou pharmacie")
// }if(liste==="fanafody"){
    
//     for(a=0;a<listefanafody.length;a++){
//         let clope = prompt("mon choix est " + listefanafody[a])
//     if(clope===listefanafody[a])
//     score++
// }console.log("mon score est de "+score + " sur " + listefanafody.length)
// }else{for(a=0;a<listepharmacie.length;a++){
//     let clack = prompt("mon choix est " + listepharmacie[a])
//     if(clack===listepharmacie[a])
//         score++
// }console.log("mon score est de "+score + " sur " + listepharmacie.length)
// }
//fin des exercice sur les boucle faut le reutiliser pour le memoriser un peut 
   


// les FONCTION Une fonction est un bloc de code auquel on attribue un nom. Appeler cette fonction permet d’exécuter le code qu’elle contient. On parle donc de fonction, car il s’agit d’un bloc de code qui a un rôle spécifique au sein de votre fichier JavaScript. Une fonction peut ainsi : 

// contenir des informations, qu’on appelle paramètres ;

// retourner un résultat ;

// effectuer une action. 



// function retournerMessageScore(score, nombreQuestions) {
//     let message = 'Votre score est de ' + score + ' sur ' + nombreQuestions
//     return message
// }let nouveauMessage = retournerMessageScore(5, 10)
// console.log(nouveauMessage)

// let monNombre = 1
// // monNombre est une variable globale, car elle est déclarée en dehors d’un bloc de code

// function afficheUnNombre() {
    //     let monNombreLocal = 2
    //    // monNombreLocal est une variable locale, car déclarée uniquement au sein d’une fonction
    //     console.log("Intérieur de la fonction : ")
    //     console.log(monNombre) // monNombre est accessible
    //     console.log(monNombreLocal) // monNombreLocal est accessible
    // }
    
    // afficheUnNombre()
    // console.log("Extérieur de la fonction : ")
    // console.log(monNombre) // monNombre est accessible
// console.log(monNombreLocal) // monNombreLocal n’est pas accesssible

//maitriser les porteé des variables 

// let monNombre = 1
// // monNombre est une variable globale, car elle est déclarée en dehors d’un bloc de code

// function afficheUnNombre() {
    //     let monNombreLocal = 2
    //    // monNombreLocal est une variable locale, car déclarée uniquement au sein d’une fonction
    //     console.log("Intérieur de la fonction : ")
    //     console.log(monNombre) // monNombre est accessible
    //     console.log(monNombreLocal) // monNombreLocal est accessible
// }

// afficheUnNombre()
// console.log("Extérieur de la fonction : ")
// console.log(monNombre) // monNombre est accessible
// console.log(monNombreLocal) // monNombreLocal n’est pas accesssible


// premier exercice sur la fuction 
// // QUESTION------------Étape 1 : découpez votre code en fonctions
// Notre but est maintenant d’améliorer l’organisation et la lisibilité de notre code. Je vous propose donc de créer les fonctions suivantes : 

// afficherResultat : cette fonction prend en paramètre le résultat et le nombre total de mots proposés, et affiche le résultat du joueur ; 

// choisirPhrasesOuMots : cette fonction demande à l’utilisateur s’il veut jouer avec des phrases ou des mots. 

// Tant que l’utilisateur n’a pas répondu “phrases” ou “mots”, la question lui est posée en boucle. La fonction ne prend aucun paramètre, mais retourne ce que l’utilisateur a répondu.

// lancerBoucleDeJeu : cette fonction contient la boucle principale de jeu, c'est-à-dire la boucle for qui propose les mots/phrases au joueur, et lui demande de taper ces mots. Elle prend en paramètre le tableau de mots/phrases qui sera proposé au joueur, et retourne le nombre de mots/phrases correctement tapés ;

// lancerJeu : cette fonction sera la fonction principale, c’est elle qui s’occupe de lancer toutes les autres. En d’autres termes, c’est elle qui va appeler les fonctions que vous venez d’écrire. 

// Vous pouvez vérifier votre travail en consultant la vidéo ci-dessous :


// Étape 2 : séparez votre code en plusieurs fichiers
// Séparez votre code en plusieurs fichiers.

// Créez un fichier config.js qui contiendra uniquement les deux listes de propositions.

// Créez un fichier main.js qui contiendra uniquement l’appel à la fonction principale lancerJeu.

// Vérifiez que tout fonctionne encore.

// Créez un nouveau répertoire appelé “scripts”, et placez-y tous vos fichiers.

// Vérifiez à nouveau votre code. 😃

// Pour réussir cette étape, pensez bien à mettre à jour le fichier HTML !


// function afficherResultat(phrase,mots){
//         let text="votre " + "phrase" +" et "+ phrase+ " mots"
//         return text

//     }let phraseoumots= afficherResultat(1,2)
//     for(text!=="phrase" && text!=="mots" ){
//         phraseoumots= afficherResultat(1,2)
//     }
//     console.log(phraseoumots)
    
    
    // function retournerMessageScore(score, nombreQuestions) {
    //     let message = 'Votre score est de ' + score + ' sur ' + nombreQuestions
    //     return message
    // }let nouveauMessage = retournerMessageScore(5, 10)
    // console.log(nouveauMessage)
    
    
//****************************************************************************************** */
    // resultat de l'exercice ou tes loin de la reponse kkkkk

    /*********************************************************************************
 * 
 * Ce fichier contient toutes les constantes nécessaires au fonctionnement du jeu.
 * En particulier les listes de mots et de phrases proposés à l'utilisateur
 * 
 *********************************************************************************/

// Déclaration des tableaux contenant les listes des mots proposés à l'utilisateur
const listeMots = ["Cachalot", "Pétunia", "Serviette"]
const listePhrases = ["Pas de panique !", "La vie, l'univers et le reste", "Merci pour le poisson"]
    
 /*********************************************************************************
 * 
 * Ce fichier contient toutes les fonctions nécessaires au fonctionnement du jeu. 
 * 
 *********************************************************************************/

// /**
//  * Cette fonction affiche dans la console le score de l'utilisateur
//  * @param {number} score : le score de l'utilisateur
//  * @param {number} nbMotsProposes : le nombre de mots proposés à l'utilisateur
//  */
function afficherResultat(score, nbMotsProposes) {
    console.log("Votre score est de " + score + " sur " + nbMotsProposes)
}

// /**
//  * Cette fonction demande à l'utilisateur de choisir entre "mots" et "phrases" et retourne le choix de l'utilisateur
//  * @return {string} : le choix de l'utilisateur, ce choix est nécessairement "mots" ou "phrases
//  */
function choisirPhrasesOuMots() {
    // Tant que l'utilisateur n'a pas saisi "mots" ou "phrases", on lui redemande de saisir un choix
    let choix = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?")
    while (choix !== "mots" && choix !== "phrases") {
        choix = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?")
    }
    return choix
}

// /**
//  * Cette fonction lance la boucle de jeu, c'est à dire qu'elle demande à l'utilisateur de saisir tous les mots
//  * contenus dans le tableau listePropositions. A chaque mot saisi, on incrémente le score de l'utilisateur
//  * 
// //  * @param {array[string]} listePropositions 
// //  * @return {number} : le score de l'utilisateur
//  */
function lancerBoucleDeJeu(listePropositions) {
    let score = 0
    for (let i = 0; i < listePropositions.length; i++) {
        // On demande à l'utilisateur de saisir le mot correspondant à l'indice i
        let motUtilisateur = prompt("Entrez le mot : " + listePropositions[i])
        if (motUtilisateur === listePropositions[i]) {
            // Si le mot saisi par l'utilisateur est correct, on incrémente le score
            score++
        }
    }
    return score
}

/**
 * Cette fonction lance le jeu. 
 * Elle demande à l'utilisateur de choisir entre "mots" et "phrases" et lance la boucle de jeu correspondante
 */
function lancerJeu() {
    // Initialisations
    let choix = choisirPhrasesOuMots()
    let score = 0
    let nbMotsProposes = 0

    // On détermine la liste des mots ou des phrases à proposer à l'utilisateur
    if (choix === "mots") {
        score = lancerBoucleDeJeu(listeMots)
        nbMotsProposes = listeMots.length
    } else {
        score = lancerBoucleDeJeu(listePhrases)
        nbMotsProposes = listePhrases.length
    }

    afficherResultat(score, nbMotsProposes)
}   
    
    
    
    
    
    
    



