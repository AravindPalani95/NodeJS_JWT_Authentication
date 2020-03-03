function errorHandler(err,req,res,next){
    //Log error to condole
    console.error(err);

    //check error and return response
    if(err.name == "UnauthorizedError")
        res.status(401).json({message : "Unauthorized" });
    else    
        res.status(500).json({message : "Request Processing Error" });
}

module.exports = errorHandler;