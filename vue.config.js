module.exports = {
  devServer: {
    overlay: false,
    port: 3000,
    proxy: process.env.VUE_APP_API_URL,
  },
};
