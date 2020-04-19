let headerEle = document.getElementsByTagName("h1"); //get element
headerEle = headerEle[0]; //turn array into single item
const headerAtt = headerEle.getAttribute("style"); //get value of style attribute

document.getElementById('button1').addEventListener('click', function() { alignLeft(headerEle); }); // get and add listener for left align

let link = document.getElementsByClassName("navbar");
document.getElementById('button2').addEventListener('click', function() { parentSib(link); }); // get and add listener for selecting child and sibling

function alignLeft(el) {
    el.setAttribute('style', 'text-align:left'); //makes header align left
}

document.getElementById('background').addEventListener('click', function() { background(); });

document.getElementById('name').addEventListener('click', function() { fullName(); });

function parentSib(el) {
    el = el[0];
    const childLink = el.firstElementChild;
    let num = [300, 1];
    num = num[0] + num [1];
    childLink.innerHTML = num.toString();
    childLink.nextElementSibling.innerHTML = 'is ' + 'great!';
}

function background() {
    let body = document.getElementsByTagName("body");
    body = body[0];
    let style = body.getAttribute('style');
    if (style !== "background-color: lightblue") {
        body.setAttribute('style', 'background-color: lightblue');
    } else {
        body.setAttribute('style', '');
    }
}

function fullName() {
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const name = {
        firstName: fname, lastName: lname,
        fullName: function() {
            return this.firstName + " " + this.lastName;
        }
    };
    document.getElementById('fullName').value = name.fullName();
}

document.getElementById('sumButton').addEventListener('click', function() { addNum(); });

function addNum() {
    const length = document.getElementById('nums').value;

}
