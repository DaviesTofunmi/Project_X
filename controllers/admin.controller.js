const adminmodel = require("../models/admin.model");
const usermodel = require("../models/user.model");
const bcrypt = require('bcryptjs')


const Register = async (req, res) => {
    try {
        const { fullname, company_name, email, password } = req.body;
        console.log(req.body, 'body');
        if (!fullname || !company_name || !email || !password) {
            return res.status(400).json({ message: "All fields are required", status: false });
        }
         
        //Check if admin already exists
        const existingadmin = await adminmodel.findOne({ email: email })
        console.log(existingadmin);
        if (existingadmin) {
          return  res.status(405).json({ message: "admin already exist", status: false })
        }


        //Save admin to database
        const admin = await adminmodel.create({ fullname, company_name, email, password })
        if (!admin) {
           return res.status(409).json({ message: "unable to save admin", status: false })
        }
        else {
           return res.status(201).json({ message: "admin created successfully", status: true })
        }
       
    } catch (error) {

        res.status(500).json({
            message: 'There was an error processing your request',
            error: error.message
        });

    }
}


const AddUser = async (req, res) =>{
    try {
        const { fullname, email } = req.body;
        console.log(req.body, 'body');
        if (!fullname || !email) {
            return res.status(400).json({ message: "All fields are required", status: false });
        }
         
        //Check if user already exists
        const existinguser = await usermodel.findOne({ email: email })
        console.log(existinguser);
        if (existinguser) {
          return  res.status(405).json({ message: "user already exist", status: false })
        }


        //Save user to database
        const user = await usermodel.create({ fullname, email })
        if (!user) {
           return res.status(409).json({ message: "unable to save user", status: false })
        }
        else {
           return res.status(201).json({ message: "user created successfully", status: true })
        }
       
    } catch (error) {

        res.status(500).json({
            message: 'There was an error processing your request',
            error: error.message
        });

    }



}







module.exports = { Register, AddUser}
