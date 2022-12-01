// ep 8 Module Export Import
// js file twy kwal loh ya py tae module
// function, variabel, class twy ko export lote loh ya tl
import hello, { today, PI } from "./helper.js";
import Math from "./math.js";

hello();
today();
console.log(PI);

var math = new Math();
console.log(math.sum(1, 4))