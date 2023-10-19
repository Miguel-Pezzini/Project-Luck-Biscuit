const firstBiscuit = document.querySelector('#firstBiscuit')
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
console.log(screen1)
function first() {
    if(screen2.classList.contains('hide')) {
        setTimeout(() => {
            screen1.classList.add('hide')
            screen2.classList.remove('hide')
        }, 2000)
    }
}

function reset () {
    if(screen1.classList.contains('hide')) {
        screen2.classList.add('hide')
        screen1.classList.remove('hide')
    }
}

firstBiscuit.addEventListener('mouseover', first)
addEventListener('click', reset)
