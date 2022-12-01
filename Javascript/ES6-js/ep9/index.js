//console.log(1)
//console.log(2)
//
//setTimeout(() => {
//  console.log(3)
//}, 2000);
//
//console.log(4)
//console.log(5)
//
//// Synchronous

// Synchronous (1ku p 1ku lote tr kyr)
// Asynchronous (1 step p mha 1step lote tr)

//let result = "";

// callback
function sum(a, b, callback, error) { // parameter 3ku a, b parameter callback ka function
  setTimeout(() => {
    // data type twy check loh ya tae hr typeof
    if (typeof a == "number" && typeof b == "number") {
      let result = a + b;
      callback(result);
    } else {
      let message = "a and b must be number";
      error(message);
    }
  }, 2000);
}

sum(2, 5, (result) => { //annonymous function
  console.log(result)
}, (message) => {
  console.log(message);
});

//sum(2, "hello", (result) => { //annonymous function
//  console.log(result)
//});


// promise
function add(a, b) {
  return new Promise((resolve, reject) => {
    if (typeof a == "number" && typeof b == "number") {
      //let result = a + b;
      //resolve(result); 
      setTimeout(() => {
        let result = a + b;
        resolve(result);
      }, 3000);
    } else {
      let message = "a and b must be number";
      reject(message);
    }
  }); // resolve ka right time mhr lote/ reject ka wrong tae time 
}

// resolve ko check chin then use / error ko so catch
add(3, "hello").then((result) => {
  console.log(result)
}).catch((message) => {
  console.log(message)
})

// async await (1step p mha 1 step lote) function htl mhr write loh ya tl
async function showResult() {
  let total = await add(3, 4);
  console.log("Total :" + total);
}

showResult();
