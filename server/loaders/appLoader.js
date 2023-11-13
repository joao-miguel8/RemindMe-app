const startServer = require("./serverLoader");
const startExpress = require("./expressLoader");

function appLoader() {
	const app = startExpress();
	const server = startServer(app);

	return server;
}

module.exports = appLoader;
