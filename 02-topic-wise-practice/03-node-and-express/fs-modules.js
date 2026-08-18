const fs = require("fs");
fs.writeFile("test.txt", "this is a test", (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("done");
  }
});
