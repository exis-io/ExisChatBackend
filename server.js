var riffle = require('jsriffle');

var server = riffle.Domain(process.env.DOMAIN);

//this will get the top level app domain this will be in process.env.APPDOMAIN coming soon
var appdomain = process.env.DOMAIN.split('.').slice(0,-2).join('.');

var app = server.linkDomain(appdomain);

server.onJoin = function() {
  app.subscribe('exisChat', function(msg){
    console.log(msg.username + "[" + (new Date()).toLocaleString() + "]: " + msg.msg);
  });
}

server.join();
