
/*

    THIS PLUGIN IS CREATED BY JONAS RIEMER
    WEBSITE: https://riemerjonas.de

    COPYRIGHT(C) BY JONAS RIEMER

*/

console.log("This website is using the free animation plugin by Jonas Riemer");
console.log("Visit https://riemerjonas.de for more information");



const animateables = document.querySelectorAll(".animateable");

window.addEventListener("scroll", checkAnimateables);

function checkAnimateables(){
    var triggerBottom = window.innerHeight / 5 * 4;


    animateables.forEach(animateable => {
        var aTop = animateable.getBoundingClientRect().top;

        if(aTop < triggerBottom && aTop != 0){
            var animationType = animateable.dataset.animationName;
            var animationDuration = animateable.dataset.animationDuration;
            var animationOffset = animateable.dataset.animationOffset;

            if(animationDuration == "") animationDuration = 1;
            if(animationOffset == "") animationOffset = 0;

            animateable.classList.remove("hidden");
            animateable.classList.add(animationType);
    
            animateable.style.animationDuration = animationDuration + "s";
            animateable.style.animationDelay = animationOffset + "s";

        }else if(aTop > triggerBottom + window.innerHeight / 5){
            animateable.classList.add("hidden");
            animateable.style.animationDuration = "0.5s";
            animateable.style.animationDelay = "0s";
            animateable.classList.remove(animateable.dataset.animationName);
        }
    });
}