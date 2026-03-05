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


// Cards Initialization
let cards=[document.getElementById('economy'),document.getElementById('business'),document.getElementById('premium'),document.getElementById('elite')];
animateCard(cards[0]);
let currentCard=0;

setInterval(()=>{
    if(currentCard<3)
        currentCard++;
    
    else
    {
        currentCard=0;
        // resetAnimation();
    }

    animateCard(cards[currentCard]);

    setTimeout(() => {
        
        if(currentCard==0){
            removeAnimate(cards[3]);
        }
        else{
            removeAnimate(cards[currentCard-1]);
        }

    }, 500);

    console.log(currentCard+'triggerd');
    
    
},4500)



function animateCard(card){
     void card.offsetWidth; 
    card.classList.add('animate-cardsScroll');
}

function removeAnimate(card){
    card.classList.remove('animate-cardsScroll');
}


// Fade Enter Animation

let leftContainers=document.querySelectorAll('.entry');
const observer=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{

        if(entry.isIntersecting){
            
            if(entry.target.classList.contains('left'))
            {
                entry.target.classList.add('animate-leftEnter');
            }
            else if(entry.target.classList.contains('right')){
                
                entry.target.classList.add('animate-rightEnter');
            }

            entry.target.classList.remove('opacity-0');
            
            
        }


    })
},{
    
    threshold:0.5

})


leftContainers.forEach((element)=>{
    observer.observe(element);
})

