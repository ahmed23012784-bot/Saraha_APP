import mongoose from "mongoose";
import {DB_URL} from "../Config/config.js";

export async function DbConnection() {

    try{
    
       await mongoose.connect(DB_URL); 

    console.log(`Db Connected`);


    }
    catch(err){
    console.log(`Db Dis Connected`);
        console.log(`${err}`);




    }
    
}