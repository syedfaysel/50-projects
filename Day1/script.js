const panels = document.querySelectorAll('.panel');
// here panels is kinda array or list, Now we can loop through it
panels.forEach(panel => {
    panel.addEventListener('click', () =>{
        removeActiveClasses();
        panel.classList.add('active');
    })
})

function removeActiveClasses() {
    panels.forEach(panel =>{
        panel.classList.remove('active');
    })
}