// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

// (Hint: setTimeout)
let count = 1;
function printcount(){
  console.log(count);
  setTimeout(printcount, 1000);
  count++;
}
printcount()
