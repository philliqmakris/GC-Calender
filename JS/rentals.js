

function renderMonth(date) {
    var startingDayNum = date.getDay();
    var daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    var day = 0;
    var htmlStr = '';
    for (var row = 0; row < 6; row++) {
        htmlStr += '<div class="row">';
        for (var col = 0; col < 7; col++) {
            var displayDay = 'X';
            if (col < startingDayNum && row == 0) {

            } else {
                day++;
                if (day <= daysInMonth) {
                    displayDay = day
                }

            }
            htmlStr += '<div class="col-md-1"><a href="#">' + (displayDay) + '</a></div>';
        }
        htmlStr += '</div>';
    }
    $('#calenderNumbers').html(htmlStr);
    $("#month").html(months[date.getMonth()] + ' ' + date.getFullYear());

}

$(document).ready(function () {
    
    renderMonth(globalCurrentDate);
});

var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'];

var globalCurrentDate = new Date();

function incrMonth() {
    var month = globalCurrentDate.getMonth();
    var year = globalCurrentDate.getFullYear();
    
    month++;
    if(month > 11) {
        month = 0;
        year++;
    }
    globalCurrentDate = new Date(year, month + 1, 0);
    
    renderMonth(globalCurrentDate);
}


