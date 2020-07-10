
const apiKey = '4a22645048860763a044';
const apiKey2 = '00b641aadb7d3614e166';

let PPP;
let pppConversion;


$(document).ready(function () {
    $('select').formSelect();

});


$("#convert").on("click", function () {
    let selectValue = $("select");
    let currencyCode;

    if (selectValue.children("option:selected").val() === "CA") {
        currencyCode = "CAD";
    }
    else if (selectValue.children("option:selected").val() === "MX") {
        currencyCode = "MXN"
    }
    else if (selectValue.children("option:selected").val() === "UK") {
        currencyCode = "GBP"
    }

    console.log(currencyCode)

    convertCurrency(currencyCode);
    // purchasePower();

    //REVISE TARGET TO BE VARIABLE
    axios.get("https://api.purchasing-power-parity.com/?target=CA&appid=" + apiKey)
        .then((response) => {
            console.log(response);

            PPP = response.data.ppp.ppp;

            pppConversion = response.data.ppp.pppConversionFactor
        })
})

function convertCurrency(currency) {
    axios.get("https://free.currconv.com/api/v7/convert?apiKey=" + apiKey2 + "&q=USD_" + currency + "&compact=y")
        .then((response) => {
            console.log(response);
           
            if (currency === "MXN"){
                let result = response.data.USD_MXN.val
                console.log(result);
            }
            else if (currency === "CAN") {
                let result = response.data.USD_CAN.val
                console.log(result);
            }
            else if (currency === "GBP") {
                let result = response.data.USD_GBP.val
                console.log(result);
            }
        })
}