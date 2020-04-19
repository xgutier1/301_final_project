var currentDate;
var events;
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

$(document).ready(function() {
    currentDate = new Date();
    loadEvents(true);
});

function displayPrevMonth() {
    var dObj = currentDate;
    var y = dObj.getFullYear();
    var m = dObj.getMonth() - 1;
    var d = dObj.getDate();
    displayCalendar(new Date(y, m, d));
}

function displayNextMonth() {
    var dObj = currentDate;
    var y = dObj.getFullYear();
    var m = dObj.getMonth() + 1;
    var d = dObj.getDate();
    displayCalendar(new Date(y, m, d));
}

function displaySelectedDay(el) {
    var y;
    var m;
    var d = $(el).html();
    if ($(el).hasClass('padding-before')) {
        m = currentDate.getMonth() - 1;
        y = currentDate.getFullYear();
        displayCalendar(new Date(y, m, d));
    }
    else if ($(el).hasClass('padding-after')) {
        m = currentDate.getMonth() + 1;
        y = currentDate.getFullYear();
        displayCalendar(new Date(y, m, d));
    }
    else {
        m = currentDate.getMonth();
        y = currentDate.getFullYear();
        displayCalendar(new Date(y, m, d));
    }
}
function loadEvents(showCalendar = false) {
    $.ajax({
        url: 'cw13.json',
        type: 'get',
        success: function(data) {
            console.log(data);
            events = data.events;
            if (showCalendar) displayCalendar();
        }
    });
}

function hasEvent(dObj) {
    for (var i in events) {
        var sdObj = new Date(events[i].start);
        if (sdObj.toDateString() === dObj.toDateString()) return true;
    }
    return false;
}

function formatTime(dObj) {
    var ampm;
    var h = dObj.getHours();
    if (h >= 12)
        {
            ampm = "PM";
        }
    else {
        ampm = "AM";
    }

    if (h > 12) h = h - 12;
    var min = dObj.getMinutes();
    if (min < 10) min = '0' + min;
    return h + ':' + min + ' ' + ampm;
}

function displayEvents(dObj) {
    if (hasEvent(dObj)) {
        var tmpEvents = [];
        for (var i = 0; i < events.length; i++) {
            var sdObj = new Date(events[i].start);
            var edObj = new Date(events[i].end);
            if (sdObj.toDateString() === dObj.toDateString() || edObj.toDateString() === dObj.toDateString()) {
                tmpEvents.push(events[i]);
            }
        }
        tmpEvents.sort((a, b) => (a.start > b.start) ? 1 : -1 );
        var html = ' ';
        for (var t = 0; t < tmpEvents.length; t++) {
            var tmpStart = new Date(tmpEvents[t].start);
            html += '<div class= "event"><div class= "start">' + formatTime(tmpStart) + '</div><div class= "title">' +
                tmpEvents[t].title + '</div><div class= "location">' + tmpEvents[t].location + '</div></div>';
        }

        $('#event-list').html(html);
    } else {
        var m = dObj.getMonth();
        var d = dObj.getDate();
        var y = dObj.getFullYear();
        $('#event-list').html('<div class= "no-events">No events for ' + months[m] + ' ' + d + ', ' + y + '</div>');
    }
}

function displayCalendar(dObj = null) {
    var tmpDate;
    var i;
    if (dObj == null) dObj = currentDate;
    var m = dObj.getMonth();
    var y = dObj.getFullYear();
    var d = dObj.getDate();
    var firstDay = new Date(y, m, 1);
    var paddingStart = firstDay.getDay();
    var lastDay = new Date(y, m + 1, 0);
    var paddingEnd = 6 - lastDay.getDay();
    var html = '';
    html += '<div class= "header">';
    html += '<div class= "left-icon"><i class= "material-icons">chevron_left</i></div>';
    html += '<div class= "month">' + months[m] + ' ' + y + '</div>';
    html += '<div class= "right-icon"><i class = "material-icons">chevron_right</i></div>';
    html += '</div>';

    html += '<div class= "days">';
    for (i = 0; i < days.length; i++) {
        html += '<div class= "weekday">' + days[i].substring(0,3).toUpperCase() + '</div>';
    }
    html += '</div>';
    if (paddingStart > 0) html += '<div class= "week">';

    for (i = 0; i < paddingStart; i++) {
        tmpDate = new Date(y, m, 1 - (paddingStart - i));
        html += '<div class= "padding-before day">' + tmpDate.getDate() + '</div>';
    }

    for (i = 1; i <= lastDay.getDate(); i++) {
        tmpDate = new Date(y, m, i);
        if (tmpDate.getDay() === 0) {
            if (i > 1) html += '</div>';
            html += '<div class= "week">'
        }
        if ( i === d) html += '<div class= "current day" >' + tmpDate.getDate() + '</div>';
        else if (hasEvent(tmpDate)) html += '<div class= "hasEvent day">' + tmpDate.getDate() + '</div>';
        else html += '<div class= "day">' + tmpDate.getDate() + '</div>';
    }

    for (i = 1; i <= paddingEnd; i++) {
        tmpDate = new Date(y, m, (lastDay.getDate() + i));
        html += '<div class= "padding-after day">' + tmpDate.getDate() + '</div>';
    }
    html += '</div><div id= "event-list"></div>';

    $('#calendar').html(html);
    currentDate = dObj;

    $('.left-icon').click(function() {
        displayPrevMonth();
    });

    $('.right-icon').click(function() {
        displayNextMonth();
    });

    $('.day').click(function() {
        displaySelectedDay(this);
    });

    displayEvents(dObj);
}
















