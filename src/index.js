// To Toggle Nav Bar
const menuToggler=document.getElementById('menuToggler');
const menuBar=document.querySelector('#menuBar');

const name=document.get



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