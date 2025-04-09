class apiError extends Error{
    statusCode:number
    success:boolean
    error:string|Array<string>
    constructor(statusCode:number,message="some error occured",error=[],stack="",){
        super(message)
        this.statusCode=statusCode
        this.message=message
        this.success=false
        this.error=error

    

    if(stack) {
        this.stack=stack  
    }
    else{
        Error.captureStackTrace(this,this.constructor)
    }

    
}
}

export {apiError}