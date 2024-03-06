
import User from "../models/user.model.js";
import bcrypt from "bcryptjs/dist/bcrypt.js";
import genrateTokenAndSetCookie from "../utils/generateToken.js";




export const signup = async (req, res) => {
    try {
        const {fullname, username, password,confirmPassword, gender} = req.body;
        if(password !== confirmPassword) {
            return res.status(400).json({error : "Passwords do not match"})
        }

        const user = await User.findOne({username});

        if(user){
            res.status(400).json({error : "Username Already exists"});
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt)

        // https://avatar.iran.liara.run/public/boy

        const boyProfilePic = ` https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = ` https://avatar.iran.liara.run/public/girl?username=${username}`;

        const newUser = new User({
            fullname, 
            username,
            password : hashedPassword,
            gender, 
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
        }) 


       if(newUser){
        // generate Jwt token
        genrateTokenAndSetCookie(newUser._id, res);
        await newUser.save();

        res.status(201).json({
            _id: newUser._id,
            fullname: newUser.fullname,
            username: newUser.username,
            profilePic: newUser.profilePic
        })
       }else{
        res.status(400).json({
            error: "Invalid User Data"
        })
       }

    } catch (error) {
        console.log("error in signUp Collections", error.message);
        res.status(500).json({error: "internal server error"})
    }
    
}

// login
export const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

        if (!user || !isPasswordCorrect) {
            return res.status(400).json({ error: "Invalid Credentials" });
        }

        genrateTokenAndSetCookie(user._id, res);

        res.status(200).json({
            _id: user._id,
            fullname: user.fullname,
            username: user.username,
            profilePic: user.profilePic
        });
    } catch (error) {
        console.log("error in Login Collections", error.message);
        res.status(500).json({ error: "internal server error" });
    }
}

export const logout =  (req, res) => {
   try {
    res.cookie("jwt", "", {maxAge: 0});
    res.status(200).json({message: "Successfully logged out"});
   } catch (error) {
    console.log("error in Logout Collections", error.message);
    res.status(500).json({ error: "internal server error" });
   }
}