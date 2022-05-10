import jwt from 'jsonwebtoken';


const authenticate=(req,res,next)=>{
    const header=req.header.authenticate;
    let token;
    
    if(header) token=header.split(' ')[1];

    if(token) {
        jwt.verify(token,'secretkey',(err,decoded)=>{
            if(err){
                res.status(401).json({errors:{global:"Invalid token"}});
            }else{
                req.userEmail=decoded.email;
                next();
            }
        })
    }else{
        res.status(401).json({errors:{global:"No token"}});
    }
}

export default authenticate;