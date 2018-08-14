const ipware = require('ipware')();
const useragent = require('useragent');
const Router = require('koa-router');
const view = require('../views/useragent');

const router = new Router();

router.get('/useragent', async ctx => {
  const ip = ipware.get_ip(ctx.req);
  const header = ctx.headers['user-agent'];
  const agent = useragent.parse(header);
  const { os } = agent;

  ctx.body = view({
    ip: ip.clientIp,
    os: `${os.family} v${os.major}.${os.minor}`,
    browser: `${agent.family} v${agent.major}.${agent.minor}`
  });
});

module.exports = router;
