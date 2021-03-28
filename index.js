const express = require("express");

const app = express();

const router = require("./routes/index");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

let port = 3000;
let host = "localhost";
app.listen(port, () => {
  console.log("Acessar http://%s:%s", host, port);
});
