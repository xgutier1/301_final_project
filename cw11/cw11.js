const expandLessElements = document.getElementsByClassName('expand_less');
let x;

for(x = 0; x < expandLessElements.length; x++) {
    expandLessElements[x].addEventListener('click', function () { hideDiv(this); }, false);
}

const expandMoreElements = document.getElementsByClassName('expand_more');
for(x = 0; x < expandMoreElements.length; x++) {
    expandMoreElements[x].addEventListener('click', function () { showDiv(this); }, false);
}

document.getElementById('numberBtn').addEventListener('click', addNumbers, false);
document.getElementById('dateAndTimeBtn').addEventListener('click', showDate, false);
document.getElementById('convertDegBtn').addEventListener('click', convertDegree, false);
document.getElementById('convertGradeBtn').addEventListener('click', convertGrade, false);


function addNumbers() {
    const num1 = document.getElementById('number1').value * 1;
    const num2 = document.getElementById('number2').value * 1;
    document.getElementById("number3").value = num1+num2;
}


function showDate() {
    let ampm;
    const d = new Date();
    const months = ['January ', 'February ', 'March ', 'April ', 'May ', 'June ', 'August ', 'September ', 'October ', 'November ', 'December '];

    const m = d.getMonth();
    const dateString = months[m] + '' + d.getDate() + ', ' + d.getFullYear();

    let h = d.getHours();
    if(h >= 12) {
        ampm = 'PM';
        if(h > 12) h = h - 12;
    } else {
        ampm = 'AM';
    }
    let min = d.getMinutes();
    if(min < 10) min = '0' + min;

    const timeString = h + ':' + min + ' ' + ampm;

    document.getElementById('dateAndTime').innerHTML = 'It is currently ' + timeString + ' on '+ dateString + '.';
}


function convertDegree() {
    const f = document.getElementById('fdeg').value * 1;
    if(f < -100 || f > 212){
        alert('Please enter a number between -100 and 212!');
        document.getElementById('fdeg').focus();
    }
    const c = (f - 32) * (5 / 9);
    document.getElementById('convertDegMsg').innerHTML = f + '&deg; F is ' + c + '&deg; C.';
}


function convertGrade(){
    const percent = document.getElementById('percent').value * 1;
    if(percent < 0 || percent > 100){
        alert('Please pick a grade between 0 and 100!');
        document.getElementById('percent').focus();
        return false;
    }

    if(percent>=90) document.getElementById('convertGradeMsg').innerHTML = "Your grade is A. Congratulations, you are doing great!";
    else if(percent >= 80) document.getElementById('convertGradeMsg').innerHTML = "Your grade is B. You are doing well.";
    else if(percent >= 70) document.getElementById('convertGradeMsg').innerHTML = "Your grade is C. You are doing okay, but could improve.";
    else if(percent >= 60) document.getElementById('convertGradeMsg').innerHTML = "Your grade is D. You need to put in more effort or get some tutoring.";
    else document.getElementById('convertGradeMsg').innerHTML = "Your grade is F. You need to think about your future in this course.";
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