var annee = window.prompt('Entrez une année');
var sortie = document.getElementById('sortie');
function isAnneeBissextille(val)
{
    
    if(val%4==0 || val%400==400)
    {
        sortie.innerHTML+= val +' est une année Bissextille';
    }
    else
    {
        sortie.innerHTML+="Désolé l'année "+ val +" n'est pas une année Bissextille";
    }
}