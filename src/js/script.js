//Em fase de testes

const getIdImg1 = document.getElementById('game1')
const getIdImg2 = document.getElementById('game2')
const getIdImg3 = document.getElementById('game3')
const getIdImg4 = document.getElementById('game4')

getIdImg1.addEventListener('mouseenter', e => {
    getIdImg1.style.transform = 'scale(1.5)'
    getIdImg1.style.transition = '400ms'
})

getIdImg1.addEventListener('mouseleave', e => {
    getIdImg1.style.transform = 'scale(1)'
    getIdImg1.style.transition = '400ms'
})

getIdImg2.addEventListener('mouseenter', e => {
    getIdImg2.style.transform = 'scale(1.5)'
    getIdImg2.style.transition = '400ms'
})

getIdImg2.addEventListener('mouseleave', e => {
    getIdImg2.style.transform = 'scale(1)'
    getIdImg2.style.transition = '400ms'
})

getIdImg3.addEventListener('mouseenter', e => {
    getIdImg3.style.transform = 'scale(1.5)'
    getIdImg3.style.transition = '400ms'
})

getIdImg3.addEventListener('mouseleave', e => {
    getIdImg3.style.transform = 'scale(1)'
    getIdImg3.style.transition = '400ms'
})

getIdImg4.addEventListener('mouseenter', e => {
    getIdImg4.style.transform = 'scale(1.5)'
    getIdImg4.style.transition = '400ms'
})

getIdImg4.addEventListener('mouseleave', e => {
    getIdImg4.style.transform = 'scale(1)'
    getIdImg4.style.transition = '400ms'
})