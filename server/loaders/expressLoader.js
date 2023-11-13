const express = require("express");

function expressLoader() {
	const app = express();

	return app;
}

module.exports = expressLoader;
