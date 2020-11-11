let myChart;
let dataCount;

//counts # times array item appears to use as data in graph
function graphData(){
    let counts = {};
days.forEach((x) => { 
    counts[x] = (counts[x] || 0)+1; 
    });
    
    dataCount = Object.values(counts);
}

// renders the bar graph
function graph(){

let ctx = $('#myChart');

myChart = new Chart(ctx, {
  type: 'bar',
  data: {
      labels: [...new Set(days)],
      datasets: [{
          label: '# of Events',
          data: dataCount,
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
});
clearDates();
}

//clears out dates so a new chart can render if new dates are chosen
function clearDates(){
    beginDate = "";
    endDate = "";
    days = [];

}

module.exports = graphData;