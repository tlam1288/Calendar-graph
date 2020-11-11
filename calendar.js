//calendar
let beginDate;
let endDate;

$(function() {
    $('input[name="daterange"]').daterangepicker({
      opens: 'left'
    }, function(start, end, label) {
        beginDate = start.format('YYYY-MM-DD');
        endDate =  end.format('YYYY-MM-DD');
       // console.log(beginDate + " " + endDate);
      //console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD')); 
      fastSensorAPI();
     
    })  
  });

  module.exports = Calendar;