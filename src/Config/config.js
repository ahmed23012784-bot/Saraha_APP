import dotenv from"dotenv";
import path from"node:path";

dotenv.config({
path:process.env.NODE_ENV == 'production'
?path.resolve("./.env.prod")
:path.resolve("./.env.dev"),
});
export const PORT=Number(process.env.PORT)||3000;
export const DB_URL=process.env.DB_ATLAS||"";
export const Encryption_key=process.env.Encryption_key||"";
export const salt_round=Number(process.env.salt_round)||14;


 export const JWT_ACCESS_EXPIRES=Number(process.env.JWT_ACCESS_EXPIRES_IN);
 export const JWT_ACCESS_SIGNATURE=process.env.JWT_ACCESS_SIGNATURE;
 
 export const JWT_REFRESH_EXPIRES=Number(process.env.JWT_REFRESH_EXPIRES_IN)
 export const JWT_REFRESH_SIGNATURE=process.env.JWT_REFRESH_SIGNATURE;
