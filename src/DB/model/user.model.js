import e from "express";
import mongoose from "mongoose";
import { type } from "node:os";
import {GenderEnums} from "../../common/enum/user.enum.js";

// mongoose.Schema de b7dd beha shkl el db ds
const UserSchema=new mongoose.Schema(
    
    {

   FirstName:{
    type:String,
    minLength:3,
    maxLength:22,
    require:true,
   },

     LastName:{
    type:String,
    minLength:3,
    maxLength:22,
    require:true,
   },

   email:{
    type:String,
    lowerCase:true,
    trim:true,
    unique:true,
    require:true
   },

   password:{
    type:String,
    require:true,

   },


   phone:String,

   
   gender:{
  type:Number,
  enum:Object.values(GenderEnums),
  default:GenderEnums.Male,

   },

    DOB:Date,
    
    confirmemail:{
     type:Boolean,
     default:false,


    },


    // 3mlt array hna 3shan mmken a7t aktr mn sora

    profile_photo_path:[String],
    cover_profile_photo_path:[String],
    delateAt:Date,
    },
    
    
    
    {
        timestamps: true,
        optimisticConcurrency: true,
        toJSON:{
            virtuals:true,
        }
    }

);
UserSchema.virtual("username").get(function(){
return `${this.get("FirstName")}${this.get("LastName")}`


}).set(function(value){

 const [FirstName,LastName]=value.split(" ")||[];
 this.set({FirstName,LastName});   
});

// mongoose.model de kda bcreate db asmha user (users) w bshkl UserSchema

const usermodel=mongoose.model('user',UserSchema);
export default usermodel;