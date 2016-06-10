# Angular_SSE
<p>This is a simple application to show how to make a server sent event with PHP and communicate with client side in angular</p>
<p align="center">
<img src="https://github.com/clamarque/Angular_SSE/blob/master/assets/img/diagram.png" />
</p>
<p>When we have several clients, one must be able to send messages to everyone in one go. In our case , admin form sends a Message to the server. The server (Redis) receives and broadcasts the message to the other connected clients. B and A.</p>

##Quick start

Download redis for Windows [here](https://github.com/rgl/redis/downloads)

`git clone https://github.com/clamarque/Angular_SSE.git`

Start `redis-server` and lauch application with localhost (wamp, xamp, etc.)
