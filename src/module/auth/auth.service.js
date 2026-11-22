import CryptoJS  from "crypto-js";
import { model } from "mongoose";
import { CreateDoc, FindOneDoc } from "../../DB/db.repo.js";
import { error } from "node:console";
import usermodel from "../../DB/model/user.model.js";
import { BadRequestException,conflictException, NotFoundException } from "../../common/exceptions/app.exceptions.js";
import { hashvalue ,comparevalue} from "../../common/security/hash.js";
import { hashenumtool } from "../../common/enum/hashenum.js";
import { encryptvalue,decryptvalue } from "../../common/security/encryption.js";
import jwt from "jsonwebtoken";


export async function signup(UserData) {
    const {email} =UserData;
    const UserEmail=await FindOneDoc({model:usermodel,filter:{email}});
    if(UserEmail){
//throw new Error("Email already exist",{cause:{statusCode:409}});
conflictException({errMsg:"email already exist",cause:{statusCode:409}})
    }


    // =================================hash password==============================================================
    // UserData.password=await hash(UserData.password,12);
      UserData.password=await hashvalue({value:UserData.password,tool:hashenumtool.bcrypt});
    //======================================================================= 



    // encryption el phone  
    // ============================================================= 
    //   UserData.phone= CryptoJS.AES.encrypt(UserData.phone, 'secret key 123').toString();
      UserData.phone= await encryptvalue({value:UserData.phone});
    
    // ===========================================================================


    const newuser=CreateDoc({model:usermodel,insertdata:UserData});
    return newuser;
}

// =======LOGIN======================================


export async function login(UserData) {
    const {email,password}=UserData;
    const user=await FindOneDoc({model:usermodel,filter:{email}});
    if(!user){
   throw NotFoundException({errMsg:"invaild email or password"});
    }
     
    // =============================compare password=======================
    // const isMatch=await compare(password,user.password);
    const isMatch=await comparevalue({value:password,uservalue:user.password,tool:hashenumtool.bcrypt});

    if(!isMatch){
   throw NotFoundException({errMsg:"invaild email or password"});
    }

    //====================== decryption el phone============================
// ======================================================================================
//    const bytes=CryptoJS.AES.decrypt(user.phone, 'secret key 123');
//    user.phone=bytes.toString(CryptoJS.enc.Utf8);
       user.phone=await decryptvalue({siphervalue:user.phone})
    // ====================================================================
   
    //==================== Create Token by JWT============================================


   const access_token=JsonWebTokenError.sign({},JWT_ACCESS_SIGNATURE,
    {expiresIn: JWT_ACCESS_EXPIRES,subject:user.id});
    

   const rfresh_token=JsonWebTokenError.sign({},JWT_REFRESH_SIGNATURE,
    {expiresIn: JWT_REFRESH_EXPIRES,subject:user.id});
    



  return{access_token,rfresh_token};



    
}