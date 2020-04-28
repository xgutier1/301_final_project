var parentdivs = document.getElementsByClassName("boxborderCars");
var bttn = document.getElementById('button');
var x = 0;
var i = 2;

show4();

bttn.addEventListener( "click", function () { showMore(); }, false);


function showMore() {
    if (i === 2) {
        show8();
        i++
    }
    else if (i === 3) {
        show12();
        i++
    }
    else if (i === 4) {
        show16();
        i++
    }
    else if (i === 5) {
        show20();
        i++
    }
    else if (i === 6) {
        show24();
        i++
    }
    else if (i === 7) {
        show28();
        i++
    }
}

function show4() {
    while (x < 4) {
        parentdivs[x].style['display'] = 'block';
        x++
    }
}
function show8() {
    while (x < 8) {
        parentdivs[x].style['display'] = 'block';
        x++
    }
}
function show12() {
    while (x < 12) {
        parentdivs[x].style['display'] = 'block';
        x++
    }
}
function show16() {
    while (x < 16) {
        parentdivs[x].style['display'] = 'block';
        x++
    }
}
function show20() {
    while (x < 20) {
        parentdivs[x].style['display'] = 'block';
        x++
    }
}
function show24() {
    while (x < 24) {
        parentdivs[x].style['display'] = 'block';
        x++
    }
}
function show28() {
    while (x < 28) {
        parentdivs[x].style['display'] = 'block';
        x++
    }
    bttn.style['display'] = 'none';
}