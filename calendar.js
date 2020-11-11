//calendar
let beginDate;
let endDate;


$(function Calendar() {
    $('input[name="daterange"]').daterangepicker({
      opens: 'left'
    }, function(start, end, label) {
        beginDate = start.format('YYYY-MM-DD');
        endDate =  end.format('YYYY-MM-DD');
       
      fastSensorAPI();
     
    })  
  });

module.exports = Calendar;