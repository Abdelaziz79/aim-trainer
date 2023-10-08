
let intervalID;
let score = 0;
const h1 = document.getElementById('score1');
const ms = document.getElementById('range2');
const range = document.getElementById('range');
const size = document.getElementById('range3');

const label1 = document.getElementById('label_range1');
const label2 = document.getElementById('label_range2');
const label3 = document.getElementById('label_range3');

const createCircle1 = () => {
    const circle = document.createElement('span');

    circle.style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    size1 = Math.random() * 10 + parseInt(size.value);
    console.log(size1);
    circle.style.padding = size1 + 'px';
    circle.style.borderRadius = '100%';

    circle.className = 'circle';

    circle.style.position = 'absolute';
    circle.style.top = Math.random() * window.innerHeight + 'px';
    circle.style.left = Math.random() * window.innerWidth + 'px';

    setTimeout(() => {
        circle.remove();
    }, ms.value);


    return circle;
}

const createCircle = (circle) => {

    circle.onclick = die.bind(this, circle);

    return circle;
}


const randomCreation = () => {
    const circle = createCircle(createCircle1());
    window.document.body.append(circle);
}

const start = (milleseconds) => {

    intervalID = setInterval(randomCreation, milleseconds);

}

const die = (obj) => {
    score++;
    document.body.removeChild(obj);
    h1.innerHTML = `Score: ${score}`;
}


const alert1 = () => {
    if (window.localStorage.getItem('score') == undefined) window.localStorage.setItem('score', score);
    if (window.localStorage.getItem('score') < score) window.localStorage.setItem('score', score);
    alert(`Your highest score : ${window.localStorage.getItem('score', score)}, Your Score: ${score}`);
}
const stop = () => {

    clearInterval(intervalID);
    const circls = document.getElementsByClassName('circle');
    for (let i = 0; i < circls.length; i++) {
        window.document.body.removeChild(circls[i]);
    }

    resetBase();
}
const resetBase = () => {
    score = 0;
    h1.innerHTML = `Score: ${score}`;

}

const reset = () => {
    stop();
    resetBase();
    ms.value = 1000;
    range.value = 1000;
    size.value = 30;
    label1.innerHTML = 'appearance time ';
    label2.innerHTML = 'disappearance time ';
    label3.innerHTML = 'size ';
}