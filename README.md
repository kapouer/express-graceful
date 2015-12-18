# express-graceful
Gracefully start and stop express app

Allows one to start listening immediately and queue requests until
app is ready to process.

```
// returns app
var app = require('express-graceful')(require('express')());

// start listening as usual
app.listen();

// ... do db initialization, add route, async operations
// when pending requests are ready to be processed
app.ready();
```

## why ?
Because in complicated setups one could need the application to be
listening before completely initialized.
The daemon starting the application would then let requests be handled
to it, leading to 503 service failures from the proxy in front of the
express application.


## Planned feature
wait for requests to finish before shutting down app

