const openNav = document.getElementById('open-nav');
const closeNav = document.getElementById('close-nav');
const mobileNavContent = document.getElementById('mobile-navbars-contents');
let isNav = false;
const displayNav = () => {
    if(isNav){
        mobileNavContent.style.display = 'none'
        isNav = false;
    } else {
        mobileNavContent.style.display = 'block'
        isNav = true;
    }
}

openNav.addEventListener('click', displayNav);

//
const toggle = document.getElementById('toggleDark');
const html = document.documentElement;

toggle.addEventListener('click', () => {
    html.classList.toggle("dark");
});

const redC = document.getElementById('red');
const red = document.getElementById('redbox');
const filter = () => {
    if(redC.checked){
        red.style.display = 'block';
    } else {
        red.style.display = 'none';
    }
}

const hello = document.getElementById('hello')
const greetings = ['Halo', 'Hello', 'Bonjour', 'Ciao', 'こんにちは', '你好', 'مرحبا']

const iniTeks = 'ciao'

let temp = '';
let j = 0;
let i = greetings[j].length;
let isWriting = true;
let typeDelay = 450

const typing = () => {
    if(isWriting){
        typeDelay = 250
        hello.textContent = greetings[j].substring(0,i)
    i++
    if(i === greetings[j].length+1){
        isWriting = false;
        typeDelay = 1350
    }
    } else {
        typeDelay = 125
        hello.textContent = greetings[j].substring(0,i)
        i--
    if(i === 0){
        isWriting = true;
        j++
        if(j === greetings.length){
            j = 0;
        }
    }
    }
    setTimeout(typing, typeDelay)
}

typing()

console.log(temp)
