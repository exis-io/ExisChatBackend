var riffle = require('jsriffle');

var server = riffle.Domain(process.env.DOMAIN);
var app = server.linkDomain('xs.demo.nick2.chat');

server.onJoin = function() {
  app.subscribe('exisChat', function(msg){
    console.log(msg.username + "[" + (new Date()).toLocaleString() + "]: " + msg.msg);
  });
}

server.join();
