const express = require("express");
const path = require("path");
const app = express();
// JSON isn't native to Javascript so it needs a parser to be converted into js object
app.use(express.json());

// http url parsing need a library to be completed
app.use(express.urlencoded({ extended: false }));

const tasks = [{ name: "task1" }, { name: "task2" }, { name: "task3" }];

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/api/tasks", (req, res) => {
  res.send(tasks);
  console.log("sent tasks");
});

app.post("/api", (req, res) => {
  // doc: https://stackoverflow.com/questions/56298481/how-to-fix-object-null-prototype-title-product
  newTask = JSON.parse(JSON.stringify(req.body));
  tasks.push(newTask);
  console.log(tasks);
  res.redirect("http://localhost:3000");
});

app.listen(3000, () => {
  console.log("listening at 3000");
});
