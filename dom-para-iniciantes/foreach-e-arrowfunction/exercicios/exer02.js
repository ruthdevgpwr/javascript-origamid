// Mostre o texto dos parágrafos no console

const paragrafos = document.querySelectorAll('p');

paragrafos.forEach((item) =>
    console.log(item.innerText)
)
