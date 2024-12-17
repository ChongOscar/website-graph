let black = 0
let gray = 0
let cinnamon = 0
async function getData() {
  const response = await fetch("2018_Central_Park_Squirrel_Census_-_Squirrel_Data_20241213.csv"); //gets csv file
  const data = await response.text();
  const rows = data.split("\n").slice(1); //splits he text inthe file by line and puts in array
  rows.forEach((elem) => {
    // iterate through array of text and split it by , to get the individual elements
    const row = elem.split(",");
    if (row[8] === "Black") {
        black++;
    } else if (row[8] === "Gray") {
        gray++;
    } else if (row[8] === "Cinnamon") {
        cinnamon++
    }
  });
  console.log(black, gray, cinnamon)
}
getData().then(function () {
  new Chart($("#myChart"), {
    type: 'doughnut',
    data: {
      labels: ['Black', 'Gray', 'Brown'],
      datasets: [{
        label: '# of squirrels',
        data: [black, gray, cinnamon],
        backgroundColor: [
            'rgb(0, 0, 0)',
            'rgb(98, 98, 98)',
            'rgb(251, 143, 58)'
          ],
          hoverOffset: 4
      }]
    },
    options: {
        aspectRatio: 1.9
    }
  });
})
