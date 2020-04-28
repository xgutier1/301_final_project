document.getElementById('submit').addEventListener("click", function() { alertSubmit(); }, false);

function alertSubmit() {
    let name = document.getElementsByName('name')[0].value;
    let reason = document.getElementsByName('reason')[0].value;
    let emailAddr = document.getElementsByName('email')[0].value;
    let details = document.getElementsByName('request')[0].value;
    if (checkName(name) && checkReason(reason) && checkEmail(emailAddr) && checkDetails(details)) {
        alert("Thanks you your concern or input!\nWe we will contact you soon regarding this.")
    }
    else {
        alert("Some of your input was incorrectly written.\nRemember only letters, numbers, and certain symbols (! , . ? @ $)")
    }
}

function checkName(text) {
    let checking = text;
    let regex = RegExp('^[a-zA-Z0-9 !,.?@$]*$');
    return regex.test(checking);
}
function checkReason(text) {
    let checking = text;
    let regex = RegExp('^[a-zA-Z0-9 !,.?@$]*$');
    return regex.test(checking);
}
function checkEmail(text) {
    let checking = text;
    let regex = RegExp('^[a-zA-Z0-9.@]*$');
    return regex.test(checking);
}
function checkDetails(text) {
    let checking = text;
    let regex = RegExp('^[a-zA-Z0-9 !,.?@$]*$');
    return regex.test(checking);
}
