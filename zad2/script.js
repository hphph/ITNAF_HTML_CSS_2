const counter = document.getElementById("counter");
document.getElementById('add').onclick = () => {
    let x = Number(counter.innerText);
    x++;
    counter.innerText = x;
};
document.getElementById("color-change").onclick = () => {
    if(counter.style.color === 'red') counter.style.color = 'black'; 
    else counter.style.color = 'red';
};