var request = new XMLHttpRequest();

request.open('GET', 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC,XRP&tsyms=USD', true);
request.onload = function () {

  var data = JSON.parse(this.response);
  var symbol = 'ETH'
  document.getElementById("price").innerHTML = data[symbol]["USD"];
  document.getElementById("name").innerHTML = data.BTC.USD;
}

request.send();
