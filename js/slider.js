let leftArrow = document.getElementById('left-arrow'); //left-arrow
let rightArrow = document.getElementById('right-arrow'); //right-arrow
let dots = document.getElementById('dots'); //dots
let activeSlide = document.querySelector('.active');
let slides = document.querySelectorAll('.imag');



//Adding contents
leftArrow.innerText = "<";
rightArrow.innerText = ">";

//create new element span for circles to append it to dots
for (let i = 0; i < slides.length; i++) {
    const circleForDots = document.createElement('span');
    circleForDots.classList.add('dot')
    dots.appendChild(circleForDots)
}



//Positioning
leftArrow.style.position = "absolute"
leftArrow.style.top = "50%"
leftArrow.style.left = "2%"

rightArrow.style.position = "absolute"
rightArrow.style.top = "50%"
rightArrow.style.right = "6%"


//styling
rightArrow.style.background = "#ddd"
leftArrow.style.background = "#ddd"
rightArrow.style.borderRadius = "50%"
leftArrow.style.borderRadius = "50%"
rightArrow.style.padding = "6px 11px 7px 14px"
leftArrow.style.padding = "6px 11px 7px 14px"


//stylying dots
// console.log(circleForDots)
let circleForDots = Array.from(document.getElementsByClassName('dot'))
circleForDots.forEach(e => {
    e.style.height = '15px';
    e.style.width = '15px';
    // e.style.background = 'transparent';
    e.style.border = '1px solid #ddd'
    e.style.borderRadius = "50%";
    e.style.marginRight = "2px";
    e.style.display = "inline-block";

})
circleForDots[0].classList.add('active')

    for (let i = 0; i < circleForDots.length; i++) {
       dots.childNodes[i].onclick = () => {
            circleForDots.forEach(circ => {
                circ.classList.remove('active')
            })
            circleForDots[i].classList.add('active')
        }
    }
    


let control = 0;
let moveby = 0;
//on right arrow click move by -100% on each click
rightArrow.onclick = () => {

    //increament the value until last slide
    if (control < 5) {
        moveby += 100;
        control += 1;
        // console.log('inside less than',control)
    }
    if (control == 5) {
        moveby = 0;
        control = 0;
    }
    console.log('after',control)
    slides.forEach(e => {
        e.style.transform = "translateX(-" + moveby + "%)";
        console.log(e.style.transform);

    });
    // for(let i=0; i<circleForDots.length; i++){
    //     circleForDots[i].classList.remove('active')
    // }
    // console.log(circleForDots[control].classList.toggle('active'))

    circleForDots.forEach(circ => {
        circ.classList.remove('active')
    })
    circleForDots[control].classList.toggle('active')
}

leftArrow.onclick = () => {

    //increament the value until last slide
    if (control === 0) {
        moveby = 400;
        control = 4;
    }
    else if (control > 0) {
        moveby -= 100;
        control -= 1;
    }
    console.log('after',control)
    slides.forEach(e => {
        e.style.transform = "translateX(-" + moveby + "%)";
        console.log(e.style.transform);
    });

    circleForDots.forEach(circ => {
        circ.classList.remove('active')
    })
    circleForDots[control].classList.toggle('active')

}




for (let i = 0; i < circleForDots.length; i++) {
    dots.childNodes[i].onclick = () => {
         circleForDots.forEach(circ => {
             circ.classList.remove('active')
         })
         circleForDots[i].classList.add('active')
         moveby = 100*i;
         control = i;
         console.log(moveby);
         slides.forEach(e => {
            e.style.transform = "translateX(-" + moveby + "%)";
            console.log(e.style.transform);
        });
    
     }
 }

