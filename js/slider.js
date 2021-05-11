let leftArrow = document.getElementById('left-arrow'); //left-arrow
let rightArrow = document.getElementById('right-arrow'); //right-arrow
let dots = document.getElementById('dots'); //dots
let activeSlide = document.querySelector('.active');
// let slides = document.querySelectorAll('.imag');

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
leftArrow.style.top = "30vw"
leftArrow.style.left = "4vw"

rightArrow.style.position = "absolute"
rightArrow.style.top = "30vw"
rightArrow.style.right = "4vw"


//styling
rightArrow.style.background = "rgba(221, 221, 221,0.4)"
leftArrow.style.background = "rgba(221, 221, 221,0.4)"
leftArrow.style.color = "#fff"
rightArrow.style.color = "#fff"
rightArrow.style.borderRadius = "50%"
leftArrow.style.borderRadius = "50%"
rightArrow.style.padding = "9px 16px"
leftArrow.style.padding = "9px 16px"


//stylying dots
// console.log(circleForDots)
let circleForDots = Array.from(document.getElementsByClassName('dot'))
circleForDots.forEach(e => {
    e.style.height = '0.65em';
    e.style.width = '0.65em';
    // e.style.background = 'transparent';
    e.style.border = '1px solid #ddd'
    e.style.borderRadius = "50%";
    e.style.marginRight = "2px";
    e.style.display = "inline-block";

})

//setting  1st dot class as active for the 1st time
circleForDots[0].classList.add('active')


let control = 0; //control which slide i am on
let moveby = 0; //moveby what amount
let rightToLeft = true;
setInterval(() => {

    // on every interval right to left and left to right
    
    if (moveby === 0) {
        rightToLeft = true;
    }
    if (moveby === 400) {
        rightToLeft = false;
        moveby = 0;
        control = 0;
    }

    if (rightToLeft) {
        moveby += 100;
        control += 1;
        // console.log('inside less than',moveby)
    }
    // console.log(moveby);
    slides.forEach(e => {
        e.style.transform = "translateX(-" + moveby + "%)";
        // console.log(e.style.transform);
    })
    // console.log(control)
    circleForDots.forEach(circ => {
        circ.classList.remove('active')
    })
    circleForDots[control].classList.toggle('active')



    //on right arrow click move by -100% on each click
    rightArrow.onclick = () => {
        //increament the value until last slide
        if (control < 5) {
            moveby += 100;
            control += 1;
            // console.log('inside less than',control)
        }
        //on last slide encounter reset to 0 position
        if (control == 5) {
            moveby = 0;
            control = 0;
        }
        // console.log('after',control)
        //do the stuff
        slides.forEach(e => {
            e.style.transform = "translateX(-" + moveby + "%)";
            // console.log(e.style.transform);

        });

        circleForDots.forEach(circ => {
            circ.classList.remove('active')
        })
        circleForDots[control].classList.toggle('active')
    }


    //on left click move the slide by 100%
    leftArrow.onclick = () => {

        //on encounter 0th slide move to last slide
        if (control === 0) {
            moveby = 400;
            control = 4;
        }
        // else keep on decreasing
        else if (control > 0) {
            moveby -= 100;
            control -= 1;
        }
        // console.log('after',control)
        //do the stuff
        slides.forEach(e => {
            e.style.transform = "translateX(-" + moveby + "%)";
            // console.log(e.style.transform);
        });
        //remove the aactive class of all slides and set active to control one
        circleForDots.forEach(circ => {
            circ.classList.remove('active')
        })
        circleForDots[control].classList.toggle('active')

    }



    //onclick go to specific slide
    for (let i = 0; i < circleForDots.length; i++) {
        dots.childNodes[i].onclick = () => {
            circleForDots.forEach(circ => {
                circ.classList.remove('active')
            })
            circleForDots[i].classList.add('active')
            moveby = 100 * i;
            control = i;
            //  console.log(moveby);
            slides.forEach(e => {
                e.style.transform = "translateX(-" + moveby + "%)";
                // console.log(e.style.transform);
            });

        }
    }
}, holdValue);