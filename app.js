const Koa = require('koa');
const json = require('koa-json');
const KoaRouter = require('koa-router');

const app = new Koa();

const router = new KoaRouter()

// json Prettier Middleware
app.use(json());

// set context body because koa dosent have an router
// app.use(async ctx => ctx.body = { message: "hello world" });

router.get()

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => console.log("Server started..."));
