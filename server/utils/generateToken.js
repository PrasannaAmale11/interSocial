import jwt from 'jsonwebtoken';

const genrateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET_KEY,{
        expiresIn: '15d'
    })

    res.cookie("jwt", token, {
        maxAge : 15*24*60*60*1000, // milliseconds
        httpOnly : true, //prevent xss attacks (cross site scripting vulnerability),
        sameSite : "strict", //CSRF attacks (cross site Forgery vulnerability)
        secure: process.env.NODE_ENV !== 'development'
    });
}

export default genrateTokenAndSetCookie ;