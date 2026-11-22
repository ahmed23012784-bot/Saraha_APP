import CryptoJS  from "crypto-js";
import { Encryption_key } from "../../Config/config.js";
export function encryptvalue({value,key=Encryption_key}){
return CryptoJS.AES.encrypt(value, key).toString();

};


export function decryptvalue({siphervalue,key=Encryption_key}){
    
 const bytes=CryptoJS.AES.decrypt(siphervalue, key);
return bytes.toString(CryptoJS.enc.Utf8);



};