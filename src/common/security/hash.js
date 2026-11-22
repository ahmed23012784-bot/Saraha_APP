import * as bcrypt from "bcrypt";
import * as argon from "argon2";
import { hashenumtool } from "../enum/hashenum.js";
import {salt_round} from "../../Config/config.js";

export async function hashvalue({value,
  saltround=salt_round
  ,tool=hashenumtool.bcrypt
}){

let valueishash;
 switch (tool) {

    case hashenumtool.bcrypt:
       valueishash= await bcrypt.hash(value,saltround);
        break;
        case hashenumtool.argon2:
       valueishash= await argon.hash(value);
        break;
 
    default:
        break;
 }


    return valueishash;
}

export async function comparevalue({value,uservalue,tool=hashenumtool.bcrypt}){
   let valueiscompare;
  switch(tool){
    case hashenumtool.bcrypt:
    valueiscompare=await bcrypt.compare(value,uservalue);
   break;
   case hashenumtool.argon2:
  valueiscompare=await argon.verify(uservalue,value);
   break;
   default:
    break;
  }

    return valueiscompare;
}