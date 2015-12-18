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
				console.info("%s\n%s", process.title + '-' + app.settings.env, app.settings.site.href);
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

