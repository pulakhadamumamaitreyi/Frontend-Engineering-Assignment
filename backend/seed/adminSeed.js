const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");

const Admin = require("../models/Admin");

dotenv.config();

mongoose.connect(process.env.MONGO_URI);

const seed = async () => {
  await Admin.deleteMany();

  const hashedPassword = await bcrypt.hash("Admin@123", 10);

  await Admin.create({
    name: "Administrator",
    email: "admin@example.com",
    password: hashedPassword,
  });

  console.log("Admin Created");

  process.exit();
};

seed();
