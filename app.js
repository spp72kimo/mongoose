const express = require("express");
const app = express();
const mongoose = require("mongoose");
const User = require("./models/user-model");

// connect to mongoose
mongoose
  .connect("mongodb+srv://root:88888888@cluster0.t3upl.mongodb.net/practice")
  .then(() => {
    console.log("Successfully connected to MongoDB.");
  })
  .catch((err) => {
    console.log("Connection failed");
    console.log(err);
  });

// 新增資料物件
// const Steven = new User({
//   name: "Steven",
//   email: "aaabb@gmail.com",
//   fruits: {
//     apple: 4,
//     banana: 2,
//   },
// });

// 將資料存進mongoose
// Steven.save()
//   .then(() => {
//     console.log("Steven saved!");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// 新增資料物件
// const Cathy = new User({
//   name: "Cathy",
//   email: "cathy@gmail.com",
//   fruits: {
//     apple: 3,
//     banana: 8,
//   },
// });

// 將資料存進mongoose
// Cathy.save()
//   .then(() => {
//     console.log("Cathy  saved!");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// 尋找所有資料，回傳陣列用forEach取出
User.find({}).then((data) => {
  console.log(data);
  data.forEach((d) => {
    // 呼叫 Schema 自訂的methods
    let total = d.totalFruits();
    console.log(d.name);
    console.log("Total fruits:", total);
  });
});

User.findOne({ name: "Steven" }).then((data) => {
  // 呼叫Schema自訂的methods
  let total = data.addApple();
  console.log(data);
});

// 呼叫 Schema 的statics methods
// 設定所有User的Apple為0
User.setZeroToAllApple().then((meg) => {
  console.log(meg);
});

User.find().then((data) => {
  console.log(data);
});

app.get("/", (req, res) => {
  res.send("This is index.");
});

app.listen(8080, () => {
  console.log("Server is running on port 8080.");
});
