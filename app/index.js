require('babel-register');
require('dotenv').config();

const app = require('./app');
const router = require('./router');

app.use(router.routes()).use(router.allowedMethods());

/**
 * 404
 */
app.use(async ctx => {
  ctx.body = JSON.stringify({ type: 'NOT_FOUND', payload: {} });
});

/**
 * 500
 */
app.on('error', async (err, ctx) => {
  console.error(err);
  ctx.body = JSON.stringify({ type: 'INTERNAL_SERVER_ERROR', payload: {} });
});

app.listen(process.env.PORT, () => {
  console.log(`Koa server is listening at ${process.env.PORT} port...`);
});
