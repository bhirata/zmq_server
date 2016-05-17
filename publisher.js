var zmq = require('zmq');
var pub = zmq.socket('pub');

pub.bindSync('tcp://127.0.0.1:5555');


var resposta = {status : "open", 
                stocks : [
                  {
                    PETR4 : [ 0.95, 0.96, 0.98]
                  },
                  {
                    OGXP4 : [ 4.95, 4.96, 4.98]
                  },
                  {
                    VALE5 : [ 10.95, 10.96, 10.98]
                  },
                  {
                    ITUB4 : [ 12.95, 12.96, 12.98]
                  }
                ]
              };


var orderStatus = {
  id: "123456", //ID for the order
  status: "executed", // or "cancelled"/"partial"
  amount: 4000,        // amount purchased/sold or cancelled
  price: 12.00 // price
}


setInterval(function(){

    pub.send(['broadcast', JSON.stringify(resposta)]);
    pub.send(['888', JSON.stringify(orderStatus)]);
}, 10000);