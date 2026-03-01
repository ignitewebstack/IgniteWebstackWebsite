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



form.addEventListener('submit',(event)=>{
    event.preventDefault();

    let userName=name.value;
    let userMobile='91'+mobile.value;
    let userEmail=email.value;
    let userMessage=message.value;

    form.reset();

    console.log(userMobile);
    



})