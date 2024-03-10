

var jwt = require('jsonwebtoken');
const JWT_SECRET ='Mahvishisagoodg$irl';

const fetchuser=(req,res,next)=>{
    //Get the user from the jwt token and add id ot req obj

    const token=req.header('auth-token');   //get the token from header
    if(!token){             //if token is invalid then ->
        res.status(401).send({error : "Please authenticate using a valid token"});
    }
    try {
        const data=jwt.verify(token,JWT_SECRET);        //verifying the token if it is valid or not 
        req.user=data.user;  // after +ve validation we get the user through its id...... 
        next();  // refer the next fn to fetchuser here.....
    } catch (error) {
        res.status(401).send({error : "Please authenticate using a valid token"});
    }
  
    
}


module.exports=fetchuser;
