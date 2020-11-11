//calendar
// let beginDate;
// let endDate;

// $(function() {
//     $('input[name="daterange"]').daterangepicker({
//       opens: 'left'
//     }, function(start, end, label) {
//         beginDate = start.format('YYYY-MM-DD');
//         endDate =  end.format('YYYY-MM-DD');
//        // console.log(beginDate + " " + endDate);
//       //console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD')); 
//       fastSensorAPI();
     
//     })  
//   });


//API
let clientID = "20AF566F";
let APIKEY = "Vu112d0Wmg99bx/ax02bUlNipBEOv3uIPrf73ZNJ8NgvN0qlnhpqYfVP80eXhX2X"
let queryURL = "https://appsrv.fastsensor.us:8890/oauth2/token?client_id=" + clientID + "&api_key=" + APIKEY;
let tokenID;
let locationID = "204D5F25";
let days = [];
let dataCount;

function apiCall(){
    $.ajaxSetup({
        beforeSend: function(xhr) {
            xhr.setRequestHeader('Authorization', 'Bearer ' + tokenID);
        }
    });

    $.ajax({
        url: queryURL,
        method: "GET",  
        }).then(response => {
        tokenID = response.access_token;
        });
}

apiCall();

// $.ajaxSetup({
//     beforeSend: function(xhr) {
//         xhr.setRequestHeader('Authorization', 'Bearer ' + tokenID);
//     }
// });

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
        alert("No data in range, please choose other dates");
        return;
    }
   // console.log(data);
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

 // console.log("Success:");
 // console.log(newData);
  //console.log(date);
 // console.log(dataArr); //the data array
  //console.log(newData[2][1][0].timestamp); //gets the timestamp from the data object
//   console.log(year);
//   console.log(month);
//   console.log(day);
  // console.log(days);
   graphData();
   graph();
})
.fail(function( jqxhr, textStatus, error ) {
  var err = textStatus + ", " + error;
  console.log( "Request Failed: " + err );
});
}

module.exports = FastSensorAPI;

// //counts # times array item appears
// function graphData(){
//     var counts = {};
// days.forEach((x) => { 
//     counts[x] = (counts[x] || 0)+1; 
//     });
//     //console.log(Object.values(counts));
//     dataCount = Object.values(counts);
// }

// // graph
// function graph(){
   
// //var ctx = document.getElementById('myChart');
// //var ctx = document.getElementById('myChart').getContext('2d');
// var ctx = $('#myChart');
// //var ctx = 'myChart';

// var myChart = new Chart(ctx, {
//   type: 'bar',
//   data: {
//       labels: [...new Set(days)],
//       datasets: [{
//           label: '# of Events',
//           data: dataCount,
//           backgroundColor: [
//               'rgba(255, 99, 132, 0.2)',
//               'rgba(54, 162, 235, 0.2)',
//               'rgba(255, 206, 86, 0.2)',
//               'rgba(75, 192, 192, 0.2)',
//               'rgba(153, 102, 255, 0.2)',
//               'rgba(255, 159, 64, 0.2)'
//           ],
//           borderColor: [
//               'rgba(255, 99, 132, 1)',
//               'rgba(54, 162, 235, 1)',
//               'rgba(255, 206, 86, 1)',
//               'rgba(75, 192, 192, 1)',
//               'rgba(153, 102, 255, 1)',
//               'rgba(255, 159, 64, 1)'
//           ],
//           borderWidth: 1
//       }]
//   },
// //   options: {
// //       scales: {
// //           yAxes: [{
// //               ticks: {
// //                   beginAtZero: true
// //               }
// //           }]
// //       }
// //   }
// });
// clearDates();
// }

// function clearDates(){
//     beginDate = "";
//     endDate = "";
//     days = [];

// }


