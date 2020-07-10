
const apiKey = '4a22645048860763a044';
const apiKey2 = '00b641aadb7d3614e166';

let PPP;
let pppConversion;

var cCardPanel = $("#cCardPanel");
var pCardPanel = $("#pCardPanel")


$(document).ready(function () {
    $('select').formSelect();

});
cCardPanel.hide()
pCardPanel.hide()


$("#convert").on("click", function () {
    let selectValue = $("select");
    let currencyCode;

    var purchaseParity = selectValue.children("option:selected").val()



    if (selectValue.children("option:selected").val() === "CA") {
        currencyCode = "CAD";
    }
    else if (selectValue.children("option:selected").val() === "MX") {
        currencyCode = "MXN"
    }
    else if (selectValue.children("option:selected").val() === "UK") {
        currencyCode = "GBP"
        purchaseParity = "GB"
    }


    cCardPanel.show()
    pCardPanel.show()




    console.log(currencyCode)


    convertCurrency(currencyCode);
    purchasePower(purchaseParity);

})

function convertCurrency(currency) {
    axios.get("https://free.currconv.com/api/v7/convert?apiKey=" + apiKey2 + "&q=USD_" + currency + "&compact=y")
        .then((response) => {
            console.log(response);
            let result;
            // following statements ensure info is pulled correctly.
            if (currency === "MXN") {
                result = response.data.USD_MXN.val
            }
            else if (currency === "CAD") {
                result = response.data.USD_CAD.val
            }
            else if (currency === "GBP") {
                result = response.data.USD_GBP.val
            }

            let inputDollar = Number($("#textarea1").val().trim());
            let product = (inputDollar * result).toFixed(2);

            
            $("#product").text("");

            if (currency === "MXN") {
                $("#product").text("$" + product)
            }
            else if (currency === "CAD") {
                $("#product").text("$" + product)
            }
            else if (currency === "GBP") {
                $("#product").text("£" + product)
            }
        })
}

function purchasePower(target) {
    //REVISE TARGET TO BE VARIABLE
    axios.get("https://api.purchasing-power-parity.com/?target=" + target + "&appid=" + apiKey)
        .then((response) => {
            console.log(response);
            var objects = ["Milk", "Loaf of Bread", "Dozen of Eggs", "Average Dinner Out", "Average Cost of Food per Day", "Movie Ticket", "Bus Ticket",]
            var prices = [3, 2.5, 2, 17, 42, 9, 1.5]

            pppConversion = response.data.ppp.pppConversionFactor
            console.log(pppConversion);

            pCardPanel = $("#pCardPanel")
            pCardPanel.empty()

            for (let i = 0; i < objects.length; i++) {
                

                var product = (prices[i] * pppConversion).toFixed(2)
                var para = $("<p>").attr("class", "object_list")
                para.text(objects[i] + " = $" + product)
                
                pCardPanel.append(para);
                
            }
            let h5 = $("<h5>").text("Purchase Power Parity");
            pCardPanel.prepend(h5);
        })
}