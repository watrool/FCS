var http=require("http"),express=require("express"),io=require("socket.io")(),app=express(),server=http.createServer(app);io.listen(server),app.use(express["static"](__dirname+"/UI")),io.on("connection",function(e){console.log(e.handshake.address+" has connected! id: "+e.id),e.on("test",function(e){console.log("meassge: "+e),console.log("It works!")})}),io.of("/testNameSpace").on("connection",function(e){e.on("test",function(e){console.log("meassge: "+e),console.log("Namespace works!")})}),server.listen(3e3),console.log("Express Server Is Listenning at 3000");