const {add, mul} = require('./js/mathUtil.js')
import { name, age, height } from "./js/info.js";
require('./css/normal.css')


console.log(add(20, 30))
console.log(mul(20, 30));

console.log(name);
console.log(age);
console.log(height);

require('./css/special.less')

document.writeln('<h2>你好啊，李银河！</h2>')

