const expandLessElements = document.getElementsByClassName('expand_less');
expandLessElements[0].addEventListener('click', function() { hideDiv(this); }, false);
expandLessElements[1].addEventListener('click', function() { hideDiv(this); }, false);
expandLessElements[2].addEventListener('click', function() { hideDiv(this); }, false);
expandLessElements[3].addEventListener('click', function() { hideDiv(this); }, false);

const expandMoreElements = document.getElementsByClassName('expand_more');
expandMoreElements[0].addEventListener('click', function() { showDiv(this); }, false);
expandMoreElements[1].addEventListener('click', function() { showDiv(this); }, false);
expandMoreElements[2].addEventListener('click', function() { showDiv(this); }, false);
expandMoreElements[3].addEventListener('click', function() { showDiv(this); }, false);

document.getElementById('numberBtn').addEventListener('click', addNumbers, false);

function addNumbers() {
    const num1 = document.getElementById('number1').value * 1;
    const num2 = document.getElementById('number2').value * 1;
    document.getElementById("number3").value = num1+num2;
}

function hideDiv(el) {
    const mydiv = el.parentElement.parentElement;
    mydiv.className = 'hidden';
    el.nextElementSibling.style.display = '';
    el.style.display = 'none';
}

function showDiv(el) {
    const mydiv = el.parentElement.parentElement;
    mydiv.className = '';
    el.previousElementSibling.style.display = '';
    el.style.display = 'none';
}