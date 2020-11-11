
//API
let clientID = "20AF566F";
let APIKEY = "Vu112d0Wmg99bx/ax02bUlNipBEOv3uIPrf73ZNJ8NgvN0qlnhpqYfVP80eXhX2X"
let queryURL = "https://appsrv.fastsensor.us:8890/oauth2/token?client_id=" + clientID + "&api_key=" + APIKEY;
let tokenID;
let locationID = "204D5F25";
let days = [];
let dataCount;
let myChart;

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

    if (myChart) {
      myChart.destroy();
    }

    let newData = Object.entries(data)
    let dataArr = newData[2][1];

    dataArr.forEach((ts) => {
        let date = new Date(ts.timestamp*1000);
        let year = date.getUTCFullYear();
        let month = date.getUTCMonth() + 1;
        let day = date.getUTCDate();
        days.push(month + "/" + day + "/" + year);
    });
   graphData();
   graph();
})
.fail(function( jqxhr, textStatus, error ) {
  var err = textStatus + ", " + error;
  console.log( "Request Failed: " + err );
});
}

module.exports = FastSensorAPI;

