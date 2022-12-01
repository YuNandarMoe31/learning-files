// ep 7 ES6 Array, Object Destructuring

// Array Destructuring
var user = ["Mg Mg", 20, "Yangon"];

//not use
//var name = user[0];
//var age = user[1];
//var address = user[2];
//console.log(name, age, address);

var [name, age, address] = user;

console.log(name)

// Object Destructuring
var user = { name: "Tun Tun", age: "20" };

// not use
//var name = user.name;
//var age = user.age;
//console.log(name);

var { name: username, age } = user;
console.log(username);