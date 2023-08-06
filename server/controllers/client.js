import InterviewUser from "../models/Users.js";
import bcrypt from "bcrypt";

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log("hey reached at register User", name, email, password);
    const existingAccount = await InterviewUser.findOne({ email });
    console.log(existingAccount, "aa");
    if (existingAccount) {
      return res.status(200).json({
        error: true,
        message: "User Already Exists",
        data: "data",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newAccount = new InterviewUser({
      name,
      email,
      password: hashedPassword,
    });
    const savedAccount = await newAccount.save();
    console.log(savedAccount);
    delete savedAccount.password;
    return res.status(200).json({
      error: false,
      message: "User Registered",
      savedUser: { ...savedAccount },
    });
  } catch (error) {
    res.status(400).json({ error });
    console.log(error);
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("hey reached at register User", email, password);
    const existingAccount = await InterviewUser.findOne({ email });
    console.log(existingAccount, "aa");
    if (existingAccount) {
      const pass = existingAccount.password;
      const validate = await bcrypt.compare(password, pass);
      console.log("valid", validate);
      delete existingAccount.password;
      if (validate) {
        return res.status(200).json({
          error: false,
          message: "Signed In Successfully",
          userData: existingAccount,
        });
      } else {
        return res.status(200).json({
          error: true,
          message: "Incorrect Credentials",
          data: "data",
        });
      }
    } else {
      return res.status(200).json({
        error: true,
        message: "User Email doesn't exist",
        data: "data",
      });
    }
  } catch (error) {
    res.status(400).json({ error });
    console.log(error);
  }
};
