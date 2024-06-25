const express =require("express");
const connectDB =require("./db/index.js")
const cookieParser = require('cookie-parser');
const userRouter =require("./routes/user.route.js")

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/",(req,res)=>{
  res.send("hello world");
})

// user route 
app.use("/api", userRouter);

const port = process.env.PORT || 3000;

connectDB()
app.listen(port,()=>console.log(`server is listening on:${port}!`));