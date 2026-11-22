export default function globalerrormidleware(err,req,res,next){
    res.status(400).json({ErrMsg:err.message,stack:err.stack,err})
}