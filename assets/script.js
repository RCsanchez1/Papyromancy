
const apiKey = '4a22645048860763a044';
const apiKey2 = '';




let PPP;
let pppConversion;


$(document).ready(function () {
    axios.get("https://api.purchasing-power-parity.com/?target=CA")
        .then((response) => {
            console.log(response);
        }


$("#convert").on("click", function () {
            axios.get("https://api.purchasing-power-parity.com/?target=CA&appid=" + apiKey)
                .then((response) => {
                    console.log(response);

                    PPP = response.data.ppp.ppp;
                    console.log(PPP);

                    pppConversion = response.data.ppp.pppConversionFactor
                    console.log(pppConversion);
                }

                )
        })

