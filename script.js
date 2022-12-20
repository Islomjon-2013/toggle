const  faqs= document.querySelectorAll(`.faq`);
for( let faq of faqs){
    faq.addEventListener(`click`,function(){
        faq.classList.toggle(`active`)
    })
       
    
}