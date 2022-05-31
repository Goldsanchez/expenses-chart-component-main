import data from "./data.json" assert {type: 'json'}

var xValues = [data[0]["day"], data[1].day, data[2].day, data[3].day, data[4].day, data[5].day, data[6].day];
var yValues = [data[0].amount, data[1].amount, data[2].amount, data[3].amount, data[4].amount, data[5].amount, data[6].amount]
var barColors = ["hsl(10, 79%, 65%)", "hsl(10, 79%, 65%)", "hsl(186, 34%, 60%)", "hsl(10, 79%, 65%)", "hsl(10, 79%, 65%)", "hsl(10, 79%, 65%)", "hsl(10, 79%, 65%)"]

const ctx = document.getElementById('myChart').getContext('2d');
let myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues,
      borderRadius: {
        topLeft: 5,
        topRight: 5,
        bottomLeft: 5,
        bottomRight: 5
      }
    }]
  },
  options: {
    scales: {
      y: {
        display: false
      },
      x: {
        grid: {
          display: false,
          borderColor: 'red',
          borderWidth: 0
        }
      }
    },
    plugins: {
      legend: {
        display: false,
        position: 'bottom'
      }
    }
  }
});

