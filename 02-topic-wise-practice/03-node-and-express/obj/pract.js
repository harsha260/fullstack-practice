global.a = "10";

console.log(a);

const buffer = Buffer.from([10]);
console.log(buffer);

console.log(__dirname, __filename);

setTimeout(() => {
  console.log("This runs after 2 seconds");
}, 200);

const intid = setInterval(() => {
  console.log("This runs every 3 seconds");
  setTimeout(() => {
    clearInterval(intid);
  }, 600);
}, 300);

let s = 0;
const pid = setInterval(() => {
  console.log(++s);
  if (s == 10) {
    clearInterval(pid);
  }
}, 1);
