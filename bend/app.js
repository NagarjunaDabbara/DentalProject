var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var multer = require("multer");
var xlstojson = require("xls-to-json-lc");
var xlsxtojson = require("xlsx-to-json-lc");
const mongoose = require("mongoose");
var cors = require('cors')

app.use(bodyParser.json());
app.use(cors())

mongoose.connect("mongodb+srv://arjun123:arjun123@social-network-me8jg.mongodb.net/test?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("CONNECTED");
});

const User = mongoose.model("User", {
  gender: { type: String },
  "practice name": { type: String },
  "practice type": { type: String },
  "first name": { type: String },
  "last name": { type: String },
  "professional designation": { type: String },
  address1: { type: String },
  address2: { type: String },
  city: { type: String },
  state: { type: String },
  zip: { type: String },
  phone: { type: String },
  fax: { type: String },
});

var storage = multer.diskStorage({
  //multers disk storage settings
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    var datetimestamp = Date.now();
    cb(
      null,
      file.fieldname +
        "-" +
        datetimestamp +
        "." +
        file.originalname.split(".")[file.originalname.split(".").length - 1]
    );
  },
});

var upload = multer({
  //multer settings
  storage: storage,
  fileFilter: function (req, file, callback) {
    //file filter
    if (
      ["xls", "xlsx"].indexOf(
        file.originalname.split(".")[file.originalname.split(".").length - 1]
      ) === -1
    ) {
      return callback(new Error("Wrong extension type"));
    }
    callback(null, true);
  },
}).single("file");

app.post("/upload", function (req, res) {
  var exceltojson;
  upload(req, res, function (err) {
    if (err) {
      res.json({ error_code: 1, err_desc: err });
      return;
    }
    if (!req.file) {
      res.json({ error_code: 1, err_desc: "No file passed" });
      return;
    }

    if (
      req.file.originalname.split(".")[
        req.file.originalname.split(".").length - 1
      ] === "xlsx"
    ) {
      exceltojson = xlsxtojson;
    } else {
      exceltojson = xlstojson;
    }
    try {
      exceltojson(
        {
          input: req.file.path,
          output: null,
          lowerCaseHeaders: true,
        },
        function (err, result) {
          if (err) {
            return res.json({ error_code: 1, err_desc: err, data: null });
          }
          User.insertMany(result)
            .then(function () {
              console.log("Data inserted"); // Success
            })
            .catch(function (error) {
              console.log(error); // Failure
            });
          res.json({ error_code: 0, err_desc: null, data: result });
        }
      );
    } catch (e) {
      res.json({ error_code: 1, err_desc: "Corupted excel file" });
    }
  });
});
app.get("/getdata", function (req, res) {
  var data = User.find({}, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      var carValues = docs
        .map((value) => value["practice name"])
        .filter((value, index, _arr) => _arr.indexOf(value) == index);
      var j = {};
      carValues.map((i, l) => {
        let tmp = [];
        docs.map((x, y) => {
          if (x["practice name"] === i) {
            tmp.push(x);
          }
        });
        j[i] = tmp.length;
      });
      res.json({ data: j });
    }
  });
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/makejson", function (req, res) {
    if(req.query.name){
  var data = User.find({'practice name':req.query.name}, function (err, docs) {
    if (err) {
      console.log(err);
    } else {
      var carValues = docs
        .map((value) => value["practice name"])
        .filter((value, index, _arr) => _arr.indexOf(value) == index);
      var j = {};
      carValues.map((i, l) => {
        let tmp = [];
        docs.map((x, y) => {
          if (x["practice name"] === i) {
            tmp.push(x);
          }
        });
        j[i] = tmp;
      });
      res.json({ data: j });
    }
  });
    }else{
        res.json({data:"insert name parameter"})
    }
});

app.listen("5000", function () {
  console.log("running on 5000...");
});
