const image = document.querySelector('img');
console.log("start");

document.getElementById('btn').addEventListener('click', () => {
    console.log('clicked');
image.classList.toggle('logoin');

})