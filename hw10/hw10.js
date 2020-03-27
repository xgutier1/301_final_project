let headerEle = document.getElementsByTagName("h1"); //get element
headerEle = headerEle[0]; //turn array into single item
const headerAtt = headerEle.getAttribute("style"); //get value of style attribute

document.getElementById('button1').addEventListener('click', function() { alignLeft(headerEle); }); // get and add listener for left align

let link = document.getElementsByClassName("navbar");
document.getElementById('button2').addEventListener('click', function() { parentSib(link); }); // get and add listener for selecting child and sibling

function alignLeft(el) {
    el.setAttribute('style', 'text-align:left'); //makes header align left
}

function parentSib(el) {
    el = el[0];
    const childLink = el.firstElementChild;
    let num = [300, 1];
    num = num[0] + num [1];
    childLink.innerHTML = num.toString();
    childLink.nextElementSibling.innerHTML = 'is ' + 'great!';
}