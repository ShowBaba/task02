const express = require("express");
const fetch = require("node-fetch");
const fs = require("fs");

const app = express();
const PORT = 3000;

const jsonUrl = "http://jsonplaceholder.typicode.com/posts";

const getDataFromUrl = async (url) => {
  const response = await fetch(url);
  const jsonResponse = await response.json();
  return jsonResponse;
};

async function writeDataToFile() {
  const response = await getDataFromUrl(jsonUrl);
  const data = JSON.stringify(response);
  
  fs.writeFileSync("result/post.txt", data);
}

app.get("/", (req, res) => {
  writeDataToFile();
  res.status(200).json({
    success: true,
    message: "Data written to file",
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
