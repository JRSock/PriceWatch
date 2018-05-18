var request = new XMLHttpRequest();
var symbol = 'BTC';
var currency = 'USD';
getPrice();


function getPrice(){
  request.open('GET', 'https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,LTC,XRP&tsyms=USD', true);
  request.onload = function () {

    var data = JSON.parse(this.response);
    var price = data[symbol][currency][PRICE];
    var volume = data[symbol][currency][VOLUME24H];
    var highDay = data[symbol][currency][HIGHDAY];
    var lowDay = data[symbol][currency][LOWDAY];
    var change24H = data[symbol][currency][CHANGE24HOUR];
    var changePCT24H = data[symbol][currency][CHANGEPTC24HOUR];
    var MKTCap = data[symbol][currency][MKTCAP];
    document.getElementById("price").innerHTML = price;

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
