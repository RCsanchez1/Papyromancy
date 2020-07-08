
const apiKey = '4a22645048860763a044';
const apiKey2 ='00b641aadb7d3614e166';

let PPP;
let pppConversion;


$(document).ready(function () {
    $('select').formSelect();

    axios.get("https://free.currconv.com/api/v7/convert?apiKey=" + apiKey2 + "&q=USD_PHP&compact=y")
        .then((response) => {
            console.log(response);
        })
});


$("#convert").on("click", function () {
    let selectValue = $("select");
    let currencyCode;
    if ( selectValue.children("option:selected").val() ==="CA") {
        currencyCode = "CAD";
    } 
    else if (selectValue.children("option:selected".val() === "MX")) {
        currencyCode = "MXN"
    }
          
    
    axios.get("https://api.purchasing-power-parity.com/?target=CA&appid=" + apiKey)
                .then((response) => {
                    console.log(response);

                    PPP = response.data.ppp.ppp;
                    console.log(PPP);

                    pppConversion = response.data.ppp.pppConversionFactor
                    console.log(pppConversion);
                }


                )}
)

        

