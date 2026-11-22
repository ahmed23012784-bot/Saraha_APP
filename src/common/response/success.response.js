export function SuccessResponse({res,status=200,msg='Done',data}){
res.status(status).json({msg,data})
};