export async function FindOneDoc({model,filter={},select}={}) {

    return await model.findOne(filter,select);
    
}


export async function CreateDoc({model,insertdata,option}={}) {

    return await model.create([insertdata],option);
    
}