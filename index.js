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
    let unixTimestamp = newData[2][1][0].timestamp;
    let date = new Date(unixTimestamp*1000);

  console.log("Success:");
  console.log(newData);
  console.log(date);
  console.log(newData[2][1]);
  console.log(newData[2][1][0].timestamp); //gets the timestamp from the data object
})
.fail(function( jqxhr, textStatus, error ) {
  var err = textStatus + ", " + error;
  console.log( "Request Failed: " + err );
});
}







