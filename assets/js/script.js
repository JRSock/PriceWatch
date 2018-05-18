var request = new XMLHttpRequest();
var symbol = 'BTC';
var currency = 'USD';
getPrice();


function getPrice(){
  request.open('GET', 'https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,LTC,XRP&tsyms=USD', true);
  request.onload = function () {

    var data = JSON.parse(this.response);
    var price = data["DISPLAY"][symbol][currency]["PRICE"];
    var volume = data["DISPLAY"][symbol][currency]["VOLUME24HOURTO"];
    var highDay = data["DISPLAY"][symbol][currency]["HIGHDAY"];
    var lowDay = data["DISPLAY"][symbol][currency]["LOWDAY"];
    var change24H = data["DISPLAY"][symbol][currency]["CHANGE24HOUR"];
    var changePCT24H = data["DISPLAY"][symbol][currency]["CHANGEPCT24HOUR"];
    var MKTCap = data["DISPLAY"][symbol][currency]["MKTCAP"];
    document.getElementById("price").innerHTML = price;
    document.getElementById("volume").innerHTML = volume;
    document.getElementById("highday").innerHTML = highDay;
    document.getElementById("lowday").innerHTML = lowDay;
    document.getElementById("change24h").innerHTML = change24H;
    document.getElementById("changepct24h").innerHTML = changePCT24H + ' %';
    document.getElementById("mktcap").innerHTML = MKTCap;

  };

  request.send();

}



function changeBTC(){
  symbol = 'BTC';
  getPrice();
}

function changeETH(){
  symbol = 'ETH';
  getPrice();
}

function changeLTC(){
  symbol = 'LTC';
  getPrice();
}

function changeXRP(){
  symbol = 'XRP';
  getPrice();
}
