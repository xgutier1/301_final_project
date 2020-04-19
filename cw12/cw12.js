let value1 = null;
let value2 = null;
let operator = null;

$(function() {
    $(document).on('keydown', function(e) {
        let key = e.which || e.keyCode;
        if(key == 27) {
            clearCalculator();
            return false;
        } else if(key == 13 || key == 187) {
            setOperator('total');
        } else if(key >= 96 && key <= 105) {
            key = key - 48;
        } else if(key == 127 || key == 8) {
            var tmpDisplay = $('input[type="text"]').val();
            var newDisplay = tmpDisplay.substring(0, tmpDisplay.length - 1);
            $('input[type="text"]').val(newDisplay);
        } else if((e.shiftKey && key == 56) || key == 106) {
            setOperator('multiply');
        } else if((key >= 48 && key <= 57) || key == 110 || key == 190) {
            updateDisplay(String.fromCharCode(key));
        } else if(key == 107 || key == 187) {
            setOperator('add');
        } else if(key == 191 || key == 111) {
            setOperator('divide');
        } else if(key == 189 || key == 109) {
            setOperator('subtract');
        } else return false;
    });

    $('input.number').on('click', function() {
        updateDisplay($(this).val());
    });

    $('input.operator').on('click', function() {
        var tmp = $(this).attr('data-operator');
        setOperator(tmp);
    });
});

function clearCalculator() {
    value1 = null;
    value2 = null;
    operator = null;
    $('input[type="text"]').val('');
}

function setOperator(str) {
    if(value1 == null) value1 = $('input[type="text"]').val() * 1;
    else if(value2 == null) value2= $('input[type="text"]').val() * 1;

    if(operator != null) doCalculation();

    if(str !== 'total') {
        operator = str;
        $('input[type="text"]').val('');
    }
}

function updateDisplay(str) {
    const $input = $('input[type="text"]');
    var display = $input.val();
    if(display == '0') display = "";
    $input.val(display + str);
}

function doCalculation() {
    let displayValue;
    if(value1 != null && value2 != null && operator != null) {
        switch(operator) {
            case 'add':
                displayValue = (value1 * 1) + (value2 * 1);
                break;

            case 'subtract':
                displayValue = (value1 * 1) - (value2 * 1);
                break;

            case 'multiply':
                displayValue = (value1 * 1) * (value2 * 1);
                break;

            case 'divide':
                displayValue = (value1 * 1) / (value2 * 1);
                break;
        }

        $('input[type="text"]').val(displayValue);

        value1 = null;
        value2 = null;
        operator = null;
    }
}