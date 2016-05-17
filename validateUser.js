var zmq = require('zmq');
var reply = zmq.socket('rep');

reply.bind('tcp://127.0.0.1:5556');

reply.on('message', function(msg){
	var mensagem = JSON.parse(msg.toString('ascii'));
	console.log(mensagem);

	if(mensagem.hasOwnProperty("user_id") && mensagem.hasOwnProperty("broker_id")
		&& !mensagem.hasOwnProperty("type")){

		var allow = {
			status: "allowed"
		}
		reply.send(JSON.stringify(allow));
	}
	else if(mensagem.hasOwnProperty("type")){

		var uuid = {
			id: "123456"
		}
		reply.send(JSON.stringify(uuid));
	}
	else if (mensagem.hasOwnProperty("id") && mensagem.hasOwnProperty("user_id")){

		var uuid = {
			id: "123456"
		}
		reply.send(JSON.stringify(uuid));
	}
});