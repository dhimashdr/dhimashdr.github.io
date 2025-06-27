const openNav = document.getElementById('open-nav');
const closeNav = document.getElementById('close-nav');
const mobileNavContent = document.getElementById('mobile-navbars-contents');

openNav.addEventListener('click', () => {
    mobileNavContent.classList.toggle('hidden');
});

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

const result = document.getElementById('result')

const resultText = "Hello"

result.textContent = resultText.substring(0,2)