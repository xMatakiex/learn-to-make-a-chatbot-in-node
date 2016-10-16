### Make Ping Private

Currently, `ping` is accessible to anybody in the chatroom.  Malicious users can use it to spam a bunch, and that's no fun.  Restrict `ping` so that only moderators can use it.
We're using the library TMI (Twitch Messaging Interface). You can find all of the ocumentation [here](https://docs.tmijs.org/v1.1.1/index.html).  The [Action](https://docs.tmijs.org/v1.1.1/Events.html#action) documentation specifically will be useful.

The only changes you need to make should be inside of the `client.on` segment.