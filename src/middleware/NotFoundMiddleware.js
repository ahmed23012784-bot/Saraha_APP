export default function notfoundmidleware(req,res){
res.status(400).json({MSG:`INVAILD URL ${req.url} OR METHOD ${req.method}`})

};