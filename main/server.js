/*
 * @Author: zhangpeiyu
 * @Date: 2021-01-11 23:22:18
 * @LastEditTime: 2021-01-12 00:39:33
 * @Description: 我不是诗人，所以，只能够把爱你写进程序，当作不可解的密码，作为我一个人知道的秘密。
 */

 // 导入koa，和koa 1.x不同，在koa2中，我们导入的是一个class，因此用大写的Koa表示:
const Koa = require('koa');
const routers = require('./router').routes();
const bodyParser = require('koa-bodyparser')();
const template = require('./view');

const isProduction = process.env.NODE_ENV === 'production';

// 创建一个Koa对象表示web app本身:
const app = new Koa();

// 对于任何请求，app将调用该异步函数处理请求：
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});

app.use(template('main/views', {
    noCache: !isProduction,
    watch: !isProduction
}));

// add middleware:
// bodyParser必须在routers之前
app.use(bodyParser);
app.use(routers);




app.listen(3000);
console.log('server started at port 3000...');