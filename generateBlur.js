const lqip = require('lqip');
const fs = require('fs');

const file = './public/img/careerspage/image02.png';

lqip.base64(file).then(res => {
  console.log(res); // copy this string into your blurDataURL
});
