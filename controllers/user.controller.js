
const adminmodel = require("../models/admin.model");
const usermodel = require("../models/user.model");
const bcrypt = require('bcryptjs')


const Login = async (req, res) => {
    try {
        const { email, fullname} = req.body
        if (email == "" || fullname== "") {
            res.status(402).json({ message: "input field cannot be empty", status: false })
        }


        //Find Current User
        const user = await usermodel.findOne({ email: email })
        console.log(user);
        const admin= await adminmodel.findOne({ email: email })
        if(admin){
            return res.status(200).json({ message: "admin login successful", user_details:admin, status: true })

        }

        if (!user) {
            res.status(407).json({ message: "user does not exist , please sign up", status: false })
        }


        // //Compare passwords
        // const match = await bcrypt.compare(password, user.password)
        // if (!match) {
        //     res.status(409).json({ message: "invalid password", status: false })
        // }

       



        return res.status(200).json({ message: "user login successful", user_details:user, status: true })

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "interal server error", status: false })
    }


}
module.exports = { Login }