document.getElementById("answerBttn").addEventListener("click", function(){ unhide() });
document.getElementById("whatBttn").addEventListener("click", function(){ what() });
document.getElementById("suggestionBttn").addEventListener("click", function(){ suggest() });

function unhide() {
    $("img").fadeToggle(1000)
}

function what() {
    if (document.getElementById("whatBox").value === "imagination") {
        $("img").fadeToggle(1000);
    }
    else {
        document.getElementById("whatBox").value = "";
        document.getElementById("whatBox").placeholder = "Wrong!";
    }
}

var i = 0;

function suggest() {
    if (i === 3){
        i = 0;
    }
    if (i === 0) {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                var myObj = JSON.parse(this.responseText);
                document.getElementById("suggestionBox").value = myObj.Suggestion1;
            }
        };
        xmlhttp.open("GET", "hw13.json", true);
        xmlhttp.send();
    } else if (i === 1) {
        xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                var myObj = JSON.parse(this.responseText);
                document.getElementById("suggestionBox").value = myObj.Suggestion2;
            }
        };
        xmlhttp.open("GET", "hw13.json", true);
        xmlhttp.send();
    } else if (i === 2) {
        xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                var myObj = JSON.parse(this.responseText);
                document.getElementById("suggestionBox").value = myObj.Suggestion3;
            }
        };
        xmlhttp.open("GET", "hw13.json", true);
        xmlhttp.send();
    }
    i++;
}

function increment(iterable) {
    var i = iterable;
    i = i +1;
}