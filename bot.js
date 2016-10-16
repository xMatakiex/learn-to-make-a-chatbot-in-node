var tmi = require('tmi.js'); // import Twitch Messaging Interface

var options = {
    options: {
        debug: true
    }, 
    connection: {
        cluster: "aws",
        reconnect: true
    },
    identity: {
        username: "foo", // Your username
        password: "bar" // Get your API key (OAuth Token) via twitchapps.com/tmi  DO NOT PUT YOUR ACTUAL PASSWORD HERE. 
   },
   channels: ["baz"] // twitch channels to log in to.
};

var client = new tmi.client(options);
client.connect();

client.on("connected", function (address, port) {
    // Stuff to do when joined
    console.log("Connected to " + address + " on port " + port + ".");
    console.log("Logged in as " + client.getUsername());
    console.log("Signed in to channels " + client.getChannels());
});

client.on('chat', function(channel, user, message, self) {
  console.log("Recieved message '" + message + "' from user " + user['display-name']);
  if(message === "!ping")
    client.action(channel, "Pong!");
});