var ham = document.getElementById("ham");
var close = document.getElementById("close");
var mob_nav = document.getElementById("mob-nav");
var parent = document.querySelectorAll(".parent-link")
var sub = document.querySelectorAll(".sub-link")

ham.addEventListener('click', () => {
    mob_nav.style.display="block";
})
close.addEventListener('click', () => {
    mob_nav.style.display="none";
})

parent.forEach(element => {
    element.addEventListener('click', (e)=>{
        sub.forEach(sub =>{
            if(sub.style.display == "none"){
                sub.style.display = "block";
            }else{
                sub.style.display = "none";
            }

        })
    })
});