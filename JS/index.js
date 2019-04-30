// Animations

    // Shake animations

const slowShake = function(){

    this.animate([
        {transform: 'translate(1px, 1px) rotate(0deg)'},
        {transform: 'translate(-1px, -2px) rotate(-1deg)'},
        {transform: 'translate(-3px, 0px) rotate(1deg)'},
        {transform: 'translate(3px, 2px) rotate(0deg)'},
        {transform: 'translate(1px, -1px) rotate(1deg)'},
        {transform: 'translate(-1px, 2px) rotate(-1deg)'},
        {transform: 'translate(-3px, 1px) rotate(0deg)'},
        {transform: 'translate(3px, 1px) rotate(-1deg)'},
        {transform: 'translate(-1px, -1px) rotate(1deg)'},
        {transform: 'translate(1px, 2px) rotate(0deg)'},
        {transform: 'translate(1px, -2px) rotate(-1deg)'}
        ], {
        duration: 500,
        easing: 'ease-in-out',
        direction: 'normal',
    })
}

const fastShake = function(){
    this.animate([
        {transform: 'translate(1px, 1px) rotate(0deg)'},
        {transform: 'translate(-1px, -2px) rotate(-1deg)'},
        {transform: 'translate(-3px, 0px) rotate(1deg)'},
        {transform: 'translate(3px, 2px) rotate(0deg)'},
        {transform: 'translate(1px, -1px) rotate(1deg)'},
        ], {
        duration: 100,
        easing: 'ease-in-out',
        iterations: 1,
        direction: 'normal',
    })
}

    // Spin animation

const batmanAnimation = function(){
    this.animate([
        {transform: 'scale(.25)', opacity: .5},
        {transform: 'scale(.5) rotate(900deg)', opacity: .75},
        {transform: 'scale(1) rotate(360deg)', opacity: 1},
        ], {
        duration: 2000,
        easing: 'ease-in-out',
        iterations: 1,
        direction: 'normal',
        })
}

const spinToWin = function(){
    this.animate([
        {transform: 'rotateY(180deg)'},
        {transform: 'rotateX(180deg)'},
        {transform: 'rotateY(180deg)'},
        {transform: 'rotateX(180deg)'},
        ], {
        duration: 250,
        easing: 'ease-in-out',
        iterations: 1,
        direction: 'alternate',
        })
}

    // Events

const button = document.querySelector('button')
const navItem = document.querySelectorAll('nav a')


button.addEventListener('click', fastShake)

