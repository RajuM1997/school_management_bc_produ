const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const app = express();
const bookListRoute = require("./routes/booklists");
const studentRoute = require("./routes/students");
const employeeRoute = require("./routes/employee");
const classRoute = require("./routes/classes");
const authRoute = require("./routes/auth");
const classRoutingRoute = require("./routes/classRoutings");
const examRoutingRoute = require("./routes/examRoutings");
const syllabusRoute = require("./routes/syllabuses");

app.use(cors());
app.use(express.json());
const port = process.env.PORT || 5000;
require("dotenv").config();

app.get("/", (req, res) => {
  res.send("Hello World this is docker with nodemon");
});

// db connection
// const connectDb = async () => {
//   try {
//     await mongoose.connect(
//       "mongodb://root:secret@mongo:27017/easySchool?authSource=admin"
//     );
//     console.log("Connected to mongoDB");
//   } catch (error) {
//     console.log(error);
//   }
// };
const connectDb = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASS}@cluster0.l9ikg.mongodb.net/easy_school?retryWrites=true&w=majority`
    );
    console.log("Connected to mongoDB");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected");
});
mongoose.connection.on("connected", () => {
  console.log("mongoDB connected");
});

// all route
app.use("/api/book-list", bookListRoute);
app.use("/api/exam-routing", examRoutingRoute);
app.use("/api/class-routing", classRoutingRoute);
app.use("/api/syllabus", syllabusRoute);
app.use("/api/student", studentRoute);
app.use("/api/employee", employeeRoute);
app.use("/api/class", classRoute);
app.use("/api/login", authRoute);

// file upload
const uploadBook = "./public/upload/book-list";
const studentClass = "./public/upload/student";
const employee = "./public/upload/employee";
const classRouting = "./public/upload/class-routing";
const examRouting = "./public/upload/exam-routing";
const syllabus = "./public/upload/syllabus";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log(file.fieldname);
    if (file.fieldname === "book") {
      cb(null, uploadBook);
    } else if (file.fieldname === "student") {
      cb(null, studentClass);
    } else if (file.fieldname === "employee") {
      cb(null, employee);
    } else if (file.fieldname === "class-routing") {
      cb(null, classRouting);
    } else if (file.fieldname === "exam-routing") {
      cb(null, examRouting);
    } else if (file.fieldname === "syllabus") {
      cb(null, syllabus);
    }
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({
  storage: storage,
  limits: 10000000, //10mb
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/png" ||
      file.mimetype === "application/pdf"
    ) {
      cb(null, true);
    } else {
      cb(new Error("Only, jpg, png, jpeg allow"));
    }
  },
});

app.post(
  "/api/upload",

  upload.fields([
    { name: "book", maxCount: 1 },
    { name: "student", maxCount: 1 },
    { name: "employee", maxCount: 1 },
    { name: "class-routing", maxCount: 1 },
    { name: "exam-routing", maxCount: 1 },
    { name: "syllabus", maxCount: 1 },
  ]),

  async (req, res) => {
    try {
      return res.status(201).json("file upload successfully");
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  }
);

app.use(
  "/book",
  express.static(path.join(__dirname, "./public/upload/book-list/"))
);
app.use(
  "/class-routing",
  express.static(path.join(__dirname, "./public/upload/class-routing/"))
);
app.use(
  "/exam-routing",
  express.static(path.join(__dirname, "./public/upload/exam-routing/"))
);
app.use(
  "/syllabus",
  express.static(path.join(__dirname, "./public/upload/syllabus/"))
);
app.use(
  "/student",
  express.static(path.join(__dirname, "./public/upload/student/"))
);
app.use(
  "/employee",
  express.static(path.join(__dirname, "./public/upload/employee/"))
);

app.delete("/api/delete/:imagename", function (req, res) {
  const query = req.query;
  const key = Object?.keys(query);
  const DIR = `./public/upload/${key[0]}/`;

  message: "Error! in image upload.";
  if (!req.params.imagename) {
    console.log("No file received");
    message = "Error! in image delete.";
    return res.status(500).json("error in delete");
  } else {
    try {
      fs.unlinkSync(DIR + req.params.imagename);

      return res.status(200).send("Successfully! Image has been Deleted");
    } catch (err) {
      // handle the error
      return res.status(400).send(err);
    }
  }
});

app.listen(port, () => {
  connectDb();
  console.log(`server is running on port ${port}`);
});
