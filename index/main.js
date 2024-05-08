const N1STAGE = document.querySelector('.first-stage');
const N2STAGE = document.querySelector('.second-stage');
const N3STAGE = document.querySelector('.third-stage');
const N4STAGE = document.querySelector('.fourth-stage');
const N5STAGE = document.querySelector('.fifth-stage');
const N6STAGE = document.querySelector('.sixth-stage');

document.querySelector('.first-stage .r-arrow').addEventListener('click', function(){
    N1STAGE.style.display = 'none'
    N2STAGE.style.display = 'block'
})

document.querySelector('.second-stage .r-arrow').addEventListener('click', function(){
    N2STAGE.style.display = 'none'
    N3STAGE.style.display = 'block'
})

document.querySelector('.third-stage .r-arrow').addEventListener('click', function(){
    N3STAGE.style.display = 'none'
    N4STAGE.style.display = 'block'
})
 
document.querySelector('.fourth-stage .r-arrow').addEventListener('click', function(){
    N4STAGE.style.display = 'none'
    N5STAGE.style.display = 'block'
})

document.querySelector('.fifth-stage .r-arrow').addEventListener('click', function(){
    N5STAGE.style.display = 'none'
    N6STAGE.style.display = 'block'
})
document.querySelector('.sixth-stage .r-arrow').addEventListener('click', function(){
    N6STAGE.style.display = 'none'
    N1STAGE.style.display = 'block'
})


document.querySelector('.first-stage .l-arrow').addEventListener('click', function(){
    N1STAGE.style.display = 'none'
    N6STAGE.style.display = 'block'
})

document.querySelector('.sixth-stage .l-arrow').addEventListener('click', function(){
    N5STAGE.style.display = 'block'
    N6STAGE.style.display = 'none'
})

document.querySelector('.fifth-stage .l-arrow').addEventListener('click', function(){
    N4STAGE.style.display = 'block'
    N5STAGE.style.display = 'none'
})
 
document.querySelector('.fourth-stage .l-arrow').addEventListener('click', function(){
    N3STAGE.style.display = 'block'
    N4STAGE.style.display = 'none'
})

document.querySelector('.third-stage .l-arrow').addEventListener('click', function(){
    N2STAGE.style.display = 'block'
    N3STAGE.style.display = 'none'
})
document.querySelector('.second-stage .l-arrow').addEventListener('click', function(){
    N1STAGE.style.display = 'block'
    N2STAGE.style.display = 'none'
})
