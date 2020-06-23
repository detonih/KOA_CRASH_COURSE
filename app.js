const Koa = require('koa');
const json = require('koa-json');
const KoaRouter = require('koa-router');
const path = require('path');
const render = require('koa-ejs');

const app = new Koa();

const router = new KoaRouter();

// replace with DB
const things = ["My family", "programming", "canyniong"]

// json Prettier Middleware
app.use(json());

// set context body because koa dosent have an router
// app.use(async ctx => ctx.body = { message: "hello world" });

render(app, {
  root: path.join(__dirname, 'views'),
  layout: 'layout',
  viewExt: 'html',
  cache: false,
  debug: false
})

// Routes
router.get('/', index);

// List of things
async function index(ctx) {
  await ctx.render('index', {
    tittle: "Things I love",
    things: things
  });
}


router.get('/test', ctx => ctx.body = 'Hello test');

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => console.log("Server started..."));
