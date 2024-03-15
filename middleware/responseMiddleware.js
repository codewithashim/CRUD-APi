exports.apiResponse = (req, res, next) => {
    
    res.apiSuccess = function(data = {}, message = 'Success', statusCode = 200) {
        return res.status(statusCode).json({
            success: true,
            message,
            data
        });
    };

    res.apiError = function(message = 'Internal Server Error', statusCode = 500) {
        return res.status(statusCode).json({
            success: false,
            message
        });
    };

    next();
};
