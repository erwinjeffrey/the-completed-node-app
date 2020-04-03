const https = require('https');
const url = `https://api.darksky.net/forecast/58330c11d3c713967fc112da2e46bfb4/${40},${-25}`;

const request = https.request(url, response => {
  let data = '';

  response.on('data', chunk => {
    data = data + chunk.toString();
  });

  response.on('end', () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on('error', error => {
  console.log('An error', error);
});

request.end();
