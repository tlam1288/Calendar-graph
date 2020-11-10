//API

var tokenID = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE2MDUwMzQ3NjgsImp0aSI6IllHc0VJN3hSNHVXNU5NUUFETCtGazAyd0hXemFnRFVMTWpCQlJqVTJOa1k9IiwiaXNzIjoiYXBpLmZhc3RzZW5zb3IuY29tIiwibmJmIjoxNjA1MDM0NzY4LCJleHAiOjE2MDUwNDI1NjgsImRhdGEiOnsiY2xpZW50SWQiOiIyMEFGNTY2RiJ9fQ.givQMHpQaQGBWK6fz3OhcWlctWXRjWBnL6qk2K2R6y1C-xLQi_LXK1t581leS-NkkIdxGFmnmBHguRw3nqsNzQ";
var locationID = "204D5F25";

$.ajaxSetup({
    beforeSend: function(xhr) {
        xhr.setRequestHeader('Authorization', 'Bearer ' + tokenID);
    }
});
$.getJSON(
"https://appsrv.fastsensor.us:8890/v1/locations/" + locationID + "/alerts",
{
  start_date: "2020-05-01",
  end_date: "2020-05-02",
  selector: "[ADAM]"
  
  
} )
.done(function(data) {
    let newData = Object.entries(data)
    let unixTimestamp = newData[2][1][0].timestamp;
    let date = new Date(unixTimestamp*1000);

  console.log("Success:");
  console.log(date);
  console.log(newData[2][1][0].timestamp); //gets the timestamp from the data object
})
.fail(function( jqxhr, textStatus, error ) {
  var err = textStatus + ", " + error;
  console.log( "Request Failed: " + err );
});





//calendar
$(function() {
    $('input[name="daterange"]').daterangepicker({
      opens: 'left'
    }, function(start, end, label) {
      console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
    });
  });


// chart
var ctx = document.getElementById('myChart');
var ctx = document.getElementById('myChart').getContext('2d');
var ctx = $('#myChart');
var ctx = 'myChart';

var myChart = new Chart(ctx, {
  type: 'line',
  data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
      }]
  },
  options: {
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: true
              }
          }]
      }
  }
});