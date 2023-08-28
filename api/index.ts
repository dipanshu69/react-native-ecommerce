import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import * as nodemailer from "nodemailer";
import * as crypto from "crypto";
import cors from "cors";
import User from "../api/models/user.model";
import Order from "../api/models/order.model";
import jwt from 'jsonwebtoken';

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const generateSecretKey = () => {
    const secretKey = crypto.randomBytes(32).toString("hex");
    return secretKey;
}

const secretKey = generateSecretKey();

const sendVerificationEmail = async (
  email: string,
  verificationToken: string
) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "deepanshu.patil69@gmail.com",
      pass: "efhxrkaknadzsrwe",
    },
  });
  const mailOptions = {
    from: "amazon.com",
    to: email,
    subject: "Email Verification",
    text: `Please Click the Following link to verify your email: http:192.168.1.6:3001/verify/${verificationToken}`,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (err) {
    console.log("Error sending verifcation emial", err);
  }
};

// Import and use your routes or middleware here
// For example:
// import userRoutes from './src/routes/userRoutes';
// app.use('/users', userRoutes);

app.listen(port, '192.168.1.6',() => {
    console.log(`Server running on http://192.168.1.6:${port}/`);
  });


mongoose
  .connect(
    "mongodb+srv://deepanshupatil69:dipanshu@cluster0.mxyzn7i.mongodb.net/"
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error(`Connection error: ${err}`);
  });

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already registered" });
    }

    const newUser = new User({ name, email, password });

    newUser.verificationToken = crypto.randomBytes(20).toString("hex");

    await newUser.save();

    sendVerificationEmail(newUser.email, newUser.verificationToken);
  } catch (err) {
    console.log("error registering user", err);
    res.status(500).json({ message: "Registration failed" });
  }
});

app.get("/verify/:token", async (req, res) => {
  try {
    const token = req.params.token;
    const user = await User.findOne({ verificationToken: token });
    if (!user) {
      return res.status(404).json({ message: "Invalid token" });
    }

    user.verified = true;
    user.verificationToken = undefined;

    await user.save();
    res.status(200).json({ message: "Email Verified Successfully" });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
});



app.post("/login", async(req,res) => {
    try{
        const {email, password} = req.body;
        const user = await User.findOne({email});
        if(!user){
            return res.status(401).json({message:"Invalid Email"});
        }
        if(user.password !== password ){
            return res.status(401).json({message: "Wrong Password"});
        }

        const token = jwt.sign({userId:user._id}, secretKey);
        res.status(200).json({token});
    }catch(error){
        res.status(500).json({message: "Login Failed"});
    }
})