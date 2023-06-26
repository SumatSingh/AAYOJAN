require("dotenv").config({path:'./config/config.env'});
const connectDB = require('./config/DbConnection');
const express = require("express");
const cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')

// configuring the port
// database connection

connectDB()


// app.use(cors());
app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'HEAD'],
    credentials: true
  }));
app.use(express.urlencoded({ extended : true }));
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}))
app.set("trust proxy", 1)

app.use(cookieParser());

//    route are import here..
const user = require("./routes/userRoutes");



app.use("/api/v1", user);


const port = process.env.PORT || 5000 ;
if (process.env.NODE_ENV === "production") {
    app.use(express.static("build"));
    app.get("/", (req, res) => {
      res.sendFile(path.resolve(__dirname, "index.html"));
    });
  }

app.listen(port, ()=>{
    console.log(`server is running on port  ${port}`);
});




