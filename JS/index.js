// Animations

    // Shake animation

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

    // Spin animations

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

const coinSpin = function(){
    this.animate([
        {transform: 'rotate3d(0, 1, 0, 0deg)'},
        {transform: 'rotate3d(0, 1, 0, 180deg)'},
        {transform: 'rotate3d(0, 1, 0, 360deg)'}
        ], {
        duration: 750,
        easing: 'ease-in-out',
        iterations: 1,
        direction: 'normal',
        })
}

    // Slide Animations

const leftTopSlide = function(){
    this.animate([
        {transform: 'translate(-200px, -200px)'},
        {transform: 'translate(0px, 0px)'},
        ], {
        duration: 750,
        easing: 'ease-in-out',
        iterations: 1,
        direction: 'normal',
        })
}

const midTopSlide = function(){
    this.animate([
        {transform: 'translate(0px, -200px)'},
        {transform: 'translate(0px, 0px)'},
        ], {
        duration: 750,
        easing: 'ease-in-out',
        iterations: 1,
        direction: 'normal',
        })
}

const rightTopSlide = function(){
    this.animate([
        {transform: 'translate(200px, -200px)'},
        {transform: 'translate(0px, 0px)'},
        ], {
        duration: 750,
        easing: 'ease-in-out',
        iterations: 1,
        direction: 'normal',
        })
}

const leftBtmSlide = function(){
    this.animate([
        {transform: 'translate(-200px, 200px)'},
        {transform: 'translate(0px, 0px)'},
        ], {
        duration: 750,
        easing: 'ease-in-out',
        iterations: 1,
        direction: 'normal',
        })
}

const midBtmSlide = function(){
    this.animate([
        {transform: 'translate(0px, 200px)'},
        {transform: 'translate(0px, 0px)'},
        ], {
        duration: 750,
        easing: 'ease-in-out',
        iterations: 1,
        direction: 'normal',
        })
}

const rightBtmSlide = function(){
    this.animate([
        {transform: 'translate(200px, 200px)'},
        {transform: 'translate(0px, 0px)'},
        ], {
        duration: 750,
        easing: 'ease-in-out',
        iterations: 1,
        direction: 'normal',
        })
}

    // Nav  Events

const button = document.querySelector('button')

button.addEventListener('click', fastShake)

