const https = require("https");
const fs = require("fs");

function operation() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  https
    .get(url, (res) => {
      let data = "";
      res.on("data", (chunk) => {
        data += chunk;
      });

      res.on("end", () => {
        fs.writeFileSync("result/post.json", data);
      });
    })
    .on("error", (err) => {
      console.log("Error: ", err.message);
    });
};


operation();
