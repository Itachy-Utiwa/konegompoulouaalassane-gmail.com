var sortie = document.getElementById('sortie');
var annee = isAnneeBissextille(window.prompt('Entrez une année '));
function isAnneeBissextille(val)
{

    
    if(Number(val)%4==0 || Number(val)%400==0)
    {
        
        sortie.innerHTML += val +" est une année bissextille"+"<br>";
    }

    // else if((Number(val)==null))
    // {
    //     alert('Vueillez saisir une année valide svp!!!');
    // }
     
    else{
        sortie.innerHTML += val +" n'est pas une année bissextille"+"<br>";
    }
}