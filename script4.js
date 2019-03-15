var tel= document.getElementById('tel');
var mail=document.getElementById('mail');
var message = document.getElementById('message');
//
tel.onmouseenter = function over(tel)
{
  this.style.filter='brightness(100%)';
  this.title='Appeler-nous';
  message.innerHTML = "<p>Appelez-nous au 06 06 06 06 pour toutes vos demandes.</p>";
}
tel.onmouseleave = function over(tel)
{
  this.style.filter='brightness(80%)';
  message.innerHTML = "";
}

//
mail.onmouseenter = function over(mail)
{
this.style.filter='brightness(100%)';
this.title='Envoyez-nous un mail';
message.innerHTML ="<p>Envoyez-nous un courriel à contact[at]sfcv.com, nous vous répondrons immédiatement.</p>"
}

mail.onmouseleave = function over(mail)
{
    this.style.filter='brightness(80%)';
    message.innerHTML = "";
}