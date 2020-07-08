
const apiKey = '4a22645048860763a044';


// DO NOT DELETE THIS
$(document).ready(function () {
    $('select').formSelect();
});

$(document).ready(function () {
    axios.get("https://api.purchasing-power-parity.com/?target=CA")
        .then((response) => {
            console.log(response);
        }

        )
});
