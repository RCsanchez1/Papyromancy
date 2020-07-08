
const apiKey = '4a22645048860763a044';

<<<<<<< HEAD

// DO NOT DELETE THIS
$(document).ready(function () {
    $('select').formSelect();
});

$(document).ready(function () {
    axios.get("https://api.purchasing-power-parity.com/?target=CA")
        .then((response) => {
            console.log(response);
        }
=======
$(document).ready(function(){
    axios.get("https://api.purchasing-power-parity.com/?target=CA&appid=" + apiKey)
    .then((response) => {
        console.log(response);
    }
>>>>>>> 7c58b921a7596ea38b595e8dd451fc8c3163a2cb

        )
});
