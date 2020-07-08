//const axios = require('axios').default;
const apiKey = '4a22645048860763a044';

$(document).ready(function () {
    $('select').formSelect();
});

// Text-Processing API Url    - RC
const API_URL = '';

// RapidAPI request headers   
//  const REQUEST_HEADERS = {
//  'X-RapidAPI-Host': ''
//  , 'X-RapidAPI-Key': ''
//  , 'Content-Type': ''
//  };

const analyzeComment = (Currency, callback) => {
    // Creating an object to send to the server
    const data = {
            text: Currency
            , language: 'english'
    };
    // Encoding data for application/x-www-form-urlencoded content type   -RC
    const formattedData = Qs.stringify(data);
    // POST request to server
    axios.post(API_URL, formattedData, { headers: REQUEST_HEADERS })
            .then(response => {
               const data = response.data;
              // Calling a callback function with data from the server
              callback(data)
            })
            .catch(error => console.error(error))
  };