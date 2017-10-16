function getFahrenheits(result) {
  // figured out result by putting debugger and refreshing page.  Debugger hits b/c this is run on load by init.js
  return result.hourly_forecast.map(hour => hour.temp.english);
}

function getHours(result) {
  // Your code goes here
  return result.hourly_forecast.map(x => x.FCTTIME.hour);
}

function generateDataSet(labels, data) {
  // figured out return value by looking at test
  return Object.assign(
    {},
    { labels: labels },
    {
      datasets: [
        {
          label: "Hourly Weather for New York",
          fillColor: "rgba(220,220,220,0.2)",
          strokeColor: "rgba(220,220,220,1)",
          pointColor: "rgba(220,220,220,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(220,220,220,1)",
          data: data
        }
      ]
    }
  );
}

function makeAjaxRequest(endpoint, success) {
  // Your code goes here
  fetch(endpoint)
    .then(res => res.json())
    .then(json => success(json));
}
