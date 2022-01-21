module.exports = {
  devServer: {
    overlay: false,
    port: 3000,
    proxy: {
      '/api': {
        target: process.env.VUE_APP_API_URL,
        changeOrigin: true,
      },
    },
  },
};
