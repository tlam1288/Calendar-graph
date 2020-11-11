//calendar
let beginDate;
let endDate;

$(function() {
    $('input[name="daterange"]').daterangepicker({
      opens: 'left'
    }, function(start, end, label) {
        beginDate = start.format('YYYY-MM-DD');
        endDate =  end.format('YYYY-MM-DD');
       
      fastSensorAPI();
     
    })  
  });

  