import express from "express";
import bodyParser from "body-parser";
const jsonData = JSON.stringify(Object);

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render("index.ejs");
});
//<!-----------------------------------------------------get pagesss---------------------------------------------------!>
app.get("/1styear", function (req, res) {
  res.render("1st/1styear.ejs");
});
app.get("/2ndyear", function (req, res) {
  res.render("2nd/2ndyear.ejs");
});
app.get("/3rdyear", function (req, res) {
  res.render("3rd/3rdyear.ejs");
});
app.get("/4thyear", function (req, res) {
  res.render("4th/4thyear.ejs");
});
//------------------------------------------------nav bar ---------------------------------------------------
app.get("/about", function (req, res) {
  res.render("about.ejs");
});
app.get("/contact", function (req, res) {
  res.render("contact.ejs");
});
app.get("/2nd_4th_sem_cs", function (req, res) {
  res.render("2nd/4th_sem/cs.ejs");
});
//------------------------------------------------post---------------------------------------------------
const subjects = ["cs", "ec", "is", "eee", "mech", "cv", "ei"];

//--------------------2 year-----------------------------------

subjects.forEach((subject) => {
  app.get(`/3rd_sem_${subject}`, function (req, res) {
    res.render(`2nd/3rd_sem/${subject}.ejs`);
  });

  app.get(`/4th_sem_${subject}`, function (req, res) {
    res.render(`2nd/4th_sem/${subject}.ejs`);
  });
});

//------------------3 year------------------------------------

subjects.forEach((subject) => {
  app.get(`/5th_sem_${subject}`, function (req, res) {
    res.render(`3rd/5th_sem/${subject}.ejs`);
  });

  app.get(`/6th_sem_${subject}`, function (req, res) {
    res.render(`3rd/6th_sem/${subject}.ejs`);
  });
});

// -----------------------4th year ----------------------

subjects.forEach((subject) => {
  app.get(`/7th_sem_${subject}`, function (req, res) {
    res.render(`4th/7th_sem/${subject}.ejs`);
  });

  app.get(`/8th_sem_${subject}`, function (req, res) {
    res.render(`4th/8th_sem/${subject}.ejs`);
  });
});

//<!----------------------------------------------------------------------------------------------------------------------!>
app.listen(process.env.PORT || 3000, function () {
  console.log("started at port 3000");
});
