/*
 * require('express-graceful')(app)
 * and when all initialization is done, call app.ready()
 */

module.exports = function(app) {
	var callback;
	var promise = new Promise(function(resolve, reject) {
		callback = function(err) {
			if (err) {
				reject(err);
			} else {
				resolve();
			}
		};
	});
	app.ready = callback;
	app.use(function(req, res, next) {
		promise = promise.then(next).catch(next);
	});
	return app;
};

