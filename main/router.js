/*
 * @Author: zhangpeiyu
 * @Date: 2021-01-11 23:33:27
 * @LastEditTime: 2021-01-12 00:39:24
 * @Description: 我不是诗人，所以，只能够把爱你写进程序，当作不可解的密码，作为我一个人知道的秘密。
 */


// 注意require('koa-router')返回的是函数:
const router = require('koa-router')();

router.get('/', async (ctx, next) => {
    ctx.render('hello.html', {
        name: 'Welcome'
    });
});

router.post('/signin', async (ctx, next) => {
    console.log(ctx.request)
    var
        name = ctx.request.body.name || '',
        password = ctx.request.body.password || '';
    console.log(`signin with name: ${name}, password: ${password}`);
    if (name === 'koa' && password === '12345') {
        ctx.response.body = `<h1>Welcome, ${name}!</h1>`;
    } else {
        ctx.response.body = `<h1>Login failed!</h1>
        <p><a href="/">Try again</a></p>`;
    }
});






module.exports = router