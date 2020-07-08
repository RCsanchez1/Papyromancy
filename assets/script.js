
const apiKey = '4a22645048860763a044';
const apiKey2 ='';

$(document).ready(function () {
    $('select').formSelect();
});


$(document).ready(function(){
    axios.get("https://api.purchasing-power-parity.com/?target=CA&appid=" + apiKey)
    .then((response) => {
        console.log(response);
    }

        )
});

$("#convert").on("click", function(){

})