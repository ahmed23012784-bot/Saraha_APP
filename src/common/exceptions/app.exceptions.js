export function BadRequestException({errMsg,cause={statusCode:400}}={}) {
   throw new Error(errMsg="BadRequest",{cause});
};

export function conflictException({errMsg="conflict",cause={statusCode:409}}={}) {
   throw new Error(errMsg,{cause});
};

export function NotFoundException({errMsg="NotFound",cause={statusCode:404}}={}) {
   throw new Error(errMsg,{cause});
};