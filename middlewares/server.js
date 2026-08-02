const express = require("express");

const app = express();

// function that returns a boolean if the age of the person is more then 14

// function isOldEnough(age) {
//   if (age >= 14) {
//     return true;
//   } else {
//     return false;
//   }
// }

function isOldEnoughMiddleware(req, res, next) {
  const age = req.query.age;
  if (age >= 14) {
    next();
  } else {
    res.json({
      msg: "sorry youre not of age yet",
    });
  }
}

app.get("/ride1", isOldEnoughMiddleware, function (req, res) {
  res.json({
    msg: "you have succesfully riden the ride 1",
  });
});

app.get("/ride2", isOldEnoughMiddleware, function (req, res) {
  res.json({
    msg: "you have succesfully riden the ride 2",
  });
});

app.listen(3000);
