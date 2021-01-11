/*
 * @Author: zhangpeiyu
 * @Date: 2021-01-09 02:27:07
 * @LastEditTime: 2021-01-11 23:20:07
 * @Description: 我不是诗人，所以，只能够把爱你写进程序，当作不可解的密码，作为我一个人知道的秘密。
 */
const tenpay = require('tenpay');

// 普通商户
const config = {
  appid: '公众号ID',
  mchid: '微信商户号',
  partnerKey: '微信支付安全密钥',
  pfx: require('fs').readFileSync('证书文件路径'),
  notify_url: '支付回调网址',
  spbill_create_ip: 'IP地址'
};
 
// 调试模式(传入第二个参数为true, 可在控制台输出数据)
const api = new tenpay(config, true);


