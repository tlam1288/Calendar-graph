//calendar
let beginDate;
let endDate;

$(function() {
    $('input[name="daterange"]').daterangepicker({
      opens: 'left'
    }, function(start, end, label) {
        beginDate = start.format('YYYY-MM-DD');
        endDate =  end.format('YYYY-MM-DD');
        console.log(beginDate + " " + endDate);
      console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD')); 
      fastSensorAPI();
    })  
  });


//API

var tokenID = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE2MDUwNDI1OTUsImp0aSI6ImhKUFJtTU9SSTNqb0ZlVm05MkVHZk53SXVaeWlmK1lXTWpCQlJqVTJOa1k9IiwiaXNzIjoiYXBpLmZhc3RzZW5zb3IuY29tIiwibmJmIjoxNjA1MDQyNTk1LCJleHAiOjE2MDUwNTAzOTUsImRhdGEiOnsiY2xpZW50SWQiOiIyMEFGNTY2RiJ9fQ._1gVCDCvCe45LgmR1GHu3bAILl2Qwor1JTIaDe6icu1KsnSI1RaVESHJiJjnwvBuwgosH1-qcUz93OFpJJVY0g";
var locationID = "204D5F25";

$.ajaxSetup({
    beforeSend: function(xhr) {
        xhr.setRequestHeader('Authorization', 'Bearer ' + tokenID);
    }
});


let days = [];

function fastSensorAPI(){
$.getJSON(
"https://appsrv.fastsensor.us:8890/v1/locations/" + locationID + "/alerts",
{
  start_date: beginDate,
  end_date: endDate,
  selector: "[ADAM]"
  
  
} )
.done(function(data) {

    if(data.data.length === 0){
        alert("no data in range, please choose other dates");
        return;
    }

    console.log(data);
    let newData = Object.entries(data)
    // let unixTimestamp = newData[2][1][0].timestamp;
    // let date = new Date(unixTimestamp*1000);
    // let year = date.getUTCFullYear();
    // let month = date.getUTCMonth() + 1;
    // let day = date.getUTCDate();
    let dataArr = newData[2][1];

    dataArr.forEach((ts) => {
        let date = new Date(ts.timestamp*1000);
        let year = date.getUTCFullYear();
        let month = date.getUTCMonth() + 1;
        let day = date.getUTCDate();
        days.push(month + "/" + day + "/" + year);
    });

  console.log("Success:");
  console.log(newData);
  //console.log(date);
  console.log(dataArr); //the data array
  console.log(newData[2][1][0].timestamp); //gets the timestamp from the data object
//   console.log(year);
//   console.log(month);
//   console.log(day);
   console.log(days);
   graph();
})
.fail(function( jqxhr, textStatus, error ) {
  var err = textStatus + ", " + error;
  console.log( "Request Failed: " + err );
});
}


// graph
function graph(){
var ctx = document.getElementById('myChart');
var ctx = document.getElementById('myChart').getContext('2d');
var ctx = $('#myChart');
var ctx = 'myChart';

var myChart = new Chart(ctx, {
  type: 'line',
  data: {
      labels: days,
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
}



