import { Router} from "express";
import { login, signup } from "./auth.service.js";
import { SuccessResponse } from "../../common/response/success.response.js";
const UserRouter=Router();
UserRouter.post('/signup',async (req,res,next)=>{
try{
const result=await signup(req.body);
// return res.status(201).json({msg:"create acount",data:result});
return SuccessResponse({res,status:201,msg:"create", data:result});
}
catch(err){
return res.status(400).json({
    msg: err.message
});
}
});


UserRouter.post('/login',async(req,res)=>{
const result= await login(req.body);
SuccessResponse({res,data:result});
});

export default UserRouter;





