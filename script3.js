var contact = document.getElementById('contact');


contact.onmouseenter = function over(contact)
{
    
    this.style.filter =' brightness(95%)';
}
contact.onmouseleave = function leave(contact)
{
    
    this.style.filter= ' brightness(40%)';
}
