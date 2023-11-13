const http = require("http");

function serverLoader(app) {
	const server = http.createServer(app);

	return server;
}

module.exports = serverLoader;
