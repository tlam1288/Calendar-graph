//counts # times array item appears
function graphData(){
    let counts = {};
days.forEach((x) => { 
    counts[x] = (counts[x] || 0)+1; 
    });
    
    dataCount = Object.values(counts);
}

// graph
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
//   options: {
//       scales: {
//           yAxes: [{
//               ticks: {
//                   beginAtZero: true
//               }
//           }]
//       }
//   }
});
clearDates();
}

function clearDates(){
    beginDate = "";
    endDate = "";
    days = [];

}