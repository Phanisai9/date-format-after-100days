const express = require("express");
const app = express();
var addDays = require("date-fns/addDays");
app.get("/", (request, response) => {
  const result = addDays(new Date(), 100);
  let dateformat = `${result.getDate()}/${
    result.getMonth() + 1
  }/${result.getFullYear()}`;
  response.send(dateformat);
});
app.listen(30002);
module.exports = app;
