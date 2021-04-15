const crypto = require('crypto');
const appKey = "l7xxe840074288574eeabb346f15f7a3d6af";
const timeSt = "20210218190839";

const hsKey = (str) =>{
    const key = appKey + timeSt;
    var hmac = crypto.createHmac("sha512", new Buffer.from(key, 'utf-8'));
    var signed = hmac.update(new Buffer.from(str, 'utf-8')).digest("base64");
    console.log(signed);
    return signed
}
hsKey('hello javascript');