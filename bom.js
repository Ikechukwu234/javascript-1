const h3El = document.getElementById('browser');

const screenwidth = window.screen.width;
const screenHeight = window.screen.height;

h3El.innerHTML = screenwidth
h3El.innerHTML = screenHeight

const tabEl = document.getElementById('tab')
tabEl.addEventListener('click', ()=>{
    window.close()
})

const navEl = document.getElementById('nav')
navEl.addEventListener('click', () => {
    window.history.back()
    // window.history.go(-2)
    // window.history.forward()
})

const locate = window.location.pathname
console.log(locate);
// const home = document.getElementById('home')
// if(locate === "/BOM/bom.html"){
//     home.classList.add('active')
// }

const navie = window.navigator.onLine
console.log(navie)

const value = window.confirm('Are you a Male')
console.log(value)

const namee = window.prompt("Enter your name", 'kingsley')
console.log(namee);

alert("Hello \nhow are you")


const numEl = document.getElementById('num')
console.log(numEl.innerText *2)
setTimeout(()=>{
    numEl.innerText *=2
},3000)

const numel = document.getElementById('num')
console.log(numel.innerText *2)
const myInterval = setInterval(()=>{
    numEl.innerText *=2
},1000)

const btn = document.getElementById('btn')
btn.addEventListener('click', function(){
    clearInterval(myInterval)
})

let products = []
const productEl = document.getElementById('productId')
fetch('https://fakestoreapi.com/products')
    .then((response) => {
        if(!response.ok)
           return "something went wrong"

           return response.json()
    })
    .then(data => {
        products = data;
        console.log(data)

        products.map(product => {
            const innerEl = `
            <div class="product">
                <img src=${product.image} alt="">
                <p>${product.title}</p>
                <p>${product.price}</p>
            </div>
            `

            productEl.innerHTML += innerEl
        })
    })
    .catch(err => console.log(err))












