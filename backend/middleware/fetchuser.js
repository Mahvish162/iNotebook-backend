

var jwt = require('jsonwebtoken');
const JWT_SECRET ='Mahvishisagoodg$irl';

const fetchuser=async (req,res,next)=>{
    //Get the user from the jwt token and add id ot req obj

    const token= await req.header('auth-token');   //get the token from header
    if(!token){             //if token is invalid then ->
       return res.status(401).send({error : "Please authenticate here using a valid token"});
         
    }
    try {
        const data=await jwt.verify(token,JWT_SECRET);        //verifying the token if it is valid or not 
        req.user=data.user;  // after +ve validation we get the user through its id...... 
        next();  // refer the next fn to fetchuser here.....
        return;
    } catch (error) {
        return res.status(401).send({error : "Please authenticate here using a valid token"});
    }
  
    
}


module.exports=fetchuser;
