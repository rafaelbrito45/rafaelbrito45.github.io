
const arrow1 = document.querySelector("#arrow1");
const arrow2 = document.querySelector("#arrow2");
const arrow3 = document.querySelector("#arrow3");
const arrow4 = document.querySelector("#arrow4");
const arrow5 = document.querySelector("#arrow5");



function openArrow1() {
    arrow1.classList.toggle("openArrow");
    
    arrow2.classList.add("arrow");
    arrow2.classList.remove("openArrow");

    arrow3.classList.add("arrow");
    arrow3.classList.remove("openArrow");
    
    arrow4.classList.add("arrow");
    arrow4.classList.remove("openArrow");

    arrow5.classList.add("arrow");
    arrow5.classList.remove("openArrow");
        
}

function openArrow2() {
    arrow2.classList.toggle("openArrow");
    
    arrow1.classList.add("arrow");
    arrow1.classList.remove("openArrow");

    arrow3.classList.add("arrow");
    arrow3.classList.remove("openArrow");
    
    arrow4.classList.add("arrow");
    arrow4.classList.remove("openArrow");

    arrow5.classList.add("arrow");
    arrow5.classList.remove("openArrow");
        

}

function openArrow3() {
    arrow3.classList.toggle("openArrow");
    
    arrow1.classList.add("arrow");
    arrow1.classList.remove("openArrow");

    arrow2.classList.add("arrow");
    arrow2.classList.remove("openArrow");
    
    arrow4.classList.add("arrow");
    arrow4.classList.remove("openArrow");

    arrow5.classList.add("arrow");
    arrow5.classList.remove("openArrow");
        
}

function openArrow4() {
    arrow4.classList.toggle("openArrow");
    
    arrow1.classList.add("arrow");
    arrow1.classList.remove("openArrow");

    arrow2.classList.add("arrow");
    arrow2.classList.remove("openArrow");
    
    arrow3.classList.add("arrow");
    arrow3.classList.remove("openArrow");

    arrow5.classList.add("arrow");
    arrow5.classList.remove("openArrow");
        
}

function openArrow5() {
    arrow5.classList.toggle("openArrow");
    
    arrow1.classList.add("arrow");
    arrow1.classList.remove("openArrow");

    arrow2.classList.add("arrow");
    arrow2.classList.remove("openArrow");
    
    arrow3.classList.add("arrow");
    arrow3.classList.remove("openArrow");

    arrow4.classList.add("arrow");
    arrow4.classList.remove("openArrow");
        
}







