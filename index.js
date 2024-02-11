const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

const PORT = 3000;
const TARGET_URL = 'https://todo.doczilla.pro';

app.use('/', createProxyMiddleware({
  target: TARGET_URL,
  changeOrigin: true,
}));

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`)
})