module.exports = {
  devServer: {
    host: "localhost",
    port: 8081,
    proxy: {
      "/query": {
        target: "http://apis.juhe.cn/simpleWeather/",
        changeOrigin: true
      }
    }
  }
};
