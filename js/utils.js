let hold = document.getElementById('hold');
let transition = document.getElementById('transition')
let button = document.getElementById('submit')
let slides = document.querySelectorAll('.imag');

let holdValue = 3000;
slides.forEach(e => {
    e.style.transition = "transition: 500ms ease-in";
})

button.onclick = () => {
    holdValue = hold.value;
    transitionValue = transition.value;
    //transition
    slides.forEach(e => {
        e.style.transition = transitionValue + "ms ease-in";
    });

    //hold
    console.log('hold:', holdValue)
    console.log('transition:', transitionValue)
}