import express from "express";
import { PORT } from "./Config/config.js";
import {DbConnection} from "./DB/connection.db.js"
import authController from "./module/auth/auth.controller.js";
import globalerrormidleware from "./middleware/GlobalErrorMiddleware.js";
import notfoundmidleware from "./middleware/NotFoundMiddleware.js";
async function bootstrap(){
await DbConnection()
const app=express();
app.use(express.json());
app.use("/auth",authController);
app.use(globalerrormidleware);
app.use("/*dummy",notfoundmidleware)
app.listen(PORT,()=>console.log(`server run in port=${PORT}`))

}
bootstrap();
