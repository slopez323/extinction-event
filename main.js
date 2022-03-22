const crossOff = document.querySelectorAll('ol li');

crossOff.forEach(x => x.addEventListener('click', function(){
    x.style.textDecoration = 'line-through';
}));

const fadeAway = document.querySelectorAll('ul li');

fadeAway.forEach(x => x.addEventListener('click', function(){
    x.style.opacity = '0';
}));

const images = document.querySelectorAll('#row img');

images.forEach(x => x.addEventListener('click', function(){
    x.style.width = '0';
}));

const destroy = document.querySelector('#destroy-all');

destroy.addEventListener('click', destroyAll);

function destroyAll(){
    crossOff.forEach(x => x.click());
    fadeAway.forEach(x => x.click());
    images.forEach(x => x.click());
};