
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
           // following statements ensure info is pulled correctly.
            if (currency === "MXN"){
                let result = response.data.USD_MXN.val
                console.log(result);
            }
            else if (currency === "CAD") {
                let result = response.data.USD_CAD.val
                console.log(result);
            }
            else if (currency === "GBP") {
                let result = response.data.USD_GBP.val
                console.log(result);
            }


            let inputDollar = Number($("#textarea1").val().trim());
            

            let product = inputDollar * result;
            console.log(product);
        })
}