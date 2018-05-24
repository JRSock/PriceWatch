var currency = "USD";

updatePrice("BTC", currency);

//Set VARS to the button elements
var btnbtc = document.getElementById("btnbtc");
var btneth = document.getElementById("btneth");
var btnltc = document.getElementById("btnltc");
var btnxrp = document.getElementById("btnxrp");

function clearActive(){
  btnbtc.classList.remove("active");
  btneth.classList.remove("active");
  btnltc.classList.remove("active");
  btnxrp.classList.remove("active");
}

//Allow user to click button to change coin
btnbtc.addEventListener("click", function(){updatePrice("BTC", currency); clearActive(); this.classList.add("active");});
btneth.addEventListener("click", function(){updatePrice("ETH", currency); clearActive(); this.classList.add("active");});
btnltc.addEventListener("click", function(){updatePrice("LTC", currency); clearActive(); this.classList.add("active");});
btnxrp.addEventListener("click", function(){updatePrice("XRP", currency); clearActive(); this.classList.add("active");});

//Updates price based on coin and users selected currency
function updatePrice(symbol, currency) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            var data = JSON.parse(xmlHttp.responseText);

            //Set vars to values taken from API
            var price = data["DISPLAY"][symbol][currency]["PRICE"];
            var volume = data["DISPLAY"][symbol][currency]["VOLUME24HOURTO"];
            var highDay = data["DISPLAY"][symbol][currency]["HIGHDAY"];
            var lowDay = data["DISPLAY"][symbol][currency]["LOWDAY"];
            var change24H = data["DISPLAY"][symbol][currency]["CHANGE24HOUR"];
            var changePCT24H = data["DISPLAY"][symbol][currency]["CHANGEPCT24HOUR"];
            var MKTCap = data["DISPLAY"][symbol][currency]["MKTCAP"];

            //Change elements to represent values
            document.getElementById("price").innerHTML = price;
            document.getElementById("volume").innerHTML = volume;
            document.getElementById("highday").innerHTML = highDay;
            document.getElementById("lowday").innerHTML = lowDay;
            document.getElementById("change24h").innerHTML = change24H;
            document.getElementById("changepct24h").innerHTML = changePCT24H + ' %';
            document.getElementById("mktcap").innerHTML = MKTCap;
        }
    }
    xmlHttp.open("GET", 'https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,LTC,XRP&tsyms=USD', true); // true for asynchronous
    xmlHttp.send(null);
}

var openValues = new Array();
var closeValues = new Array();

//Gets historical data for chart
function getHistorical(symbol, currency) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
        var data = JSON.parse(xmlHttp.responseText);


        var count = 0;

        while(count < 169){
            var fuckthisshit = openValues.push(data["Data"][count]["open"]);
            var idontneedthis = closeValues.push(data["Data"][count]["close"]);
            count++;
        }
    }
  }
    var url = "https://min-api.cryptocompare.com/data/histohour?fsym=BTC&tsym=USD&limit=168";
    xmlHttp.open("GET", url, true);
    xmlHttp.send(null);
}

getHistorical("BTC", "USD");

// var canvas = document.getElementById('myChart');
// var data = {
//     labels: ["1D", "2D", "3D", "4D", "5D", "6D", "7D"],
//     datasets: [
//         {
//             label: "7d Price Chart",
//             fill: false,
//             lineTension: 0.1,
//             backgroundColor: "rgba(75,192,192,0.4)",
//             borderColor: "rgba(75,192,192,1)",
//             borderCapStyle: 'butt',
//             borderDash: [],
//             borderDashOffset: 0.0,
//             borderJoinStyle: 'miter',
//             pointBorderColor: "rgba(75,192,192,1)",
//             pointBackgroundColor: "#fff",
//             pointBorderWidth: 1,
//             pointHoverRadius: 5,
//             pointHoverBackgroundColor: "rgba(75,192,192,1)",
//             pointHoverBorderColor: "rgba(220,220,220,1)",
//             pointHoverBorderWidth: 2,
//             pointRadius: 5,
//             pointHitRadius: 10,
//             data: closeValues,
//         }
//     ]
// };
//
// var option = {
// 	showLines: true
// };
// var myLineChart = Chart.Line(canvas,{
// 	data:data,
//   options:option
// });
