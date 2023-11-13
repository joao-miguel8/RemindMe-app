require("dotenv").config();

const appInitialize = require("./loaders/appLoader");

const server = appInitialize();

function serverLoader() {
	const PORT = process.env.PORT;

	server.listen(PORT, () => {
		console.log(`Server started on port ${PORT}`);
	});
}

module.exports = serverLoader;
