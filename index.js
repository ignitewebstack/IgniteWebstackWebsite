// To Toggle Nav Bar
const menuToggler=document.getElementById('menuToggler');
const menuBar=document.querySelector('#menuBar');

const name=document.querySelector('#name');
const mobile=document.querySelector('#mobile');
const email=document.querySelector('#email');
const message=document.querySelector('#message');

const form=document.querySelector('#form');





menuToggler.addEventListener('click',(e)=>{
    e.stopPropagation();
    console.log("yes");
    
    menuBar.classList.toggle('hidden');
})

// Nav Bar Out of Focus

// menuBar.addEventListener()

document.addEventListener('click',(event)=>{
    if(!menuBar.classList.contains('hidden') && !menuBar.contains(event.target))
    {
        menuBar.classList.add('hidden');
    }
    
})

function encode(input){
    return encodeURIComponent(input);
}

form.addEventListener('submit',(event)=>{
    event.preventDefault();

    let userName=name.value.trim();
    let userMobile=mobile.value;
    let userEmail=email.value;
    let userMessage=message.value.trim();

    form.reset();

    let finalMessage=`Hello Sir ,\nThis is ${userName} I Likely To Talk With You About Website Making\nMy Contact Informations :\nMobile : ${userMobile}\nEmail : ${userEmail}\nMessage :${userMessage}`;

    console.log(userMobile);
    

    let whatsappLink=`https://wa.me/918925999751?text=${encode(finalMessage)}`

    window.open(whatsappLink,'_blank');

})

