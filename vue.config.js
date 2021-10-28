module.exports = {
	devServer: {
		overlay: false,
		proxy: process.env.VUE_APP_API_URL,
	},
};
