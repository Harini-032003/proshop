const notFound = (req,res,next) => { //if no other middleware has handled the request, it calls this middleware, creates a new error object and set code to 404
  const error = new Error(`Not Found - ${req.originalUrl}`); // original url from req object
  res.status(404);
  next(error);
};

const errorHandler=(err,req,res,next) => {
  let statusCode = res.statusCode === 200? 500 : res.statusCode;
  let message = err.message;

  // check for mongoose bad ObjectId (id not exists)
  if(err.name === 'CastError' && err.kind === 'ObjectId'){
    message = 'Resource not found';
    statusCode=404;
  }
  res.status(statusCode).json({
    message,
    stack: process.env.NODE_ENV === 'production'? 'stack': err.stack,
  });
};

export { notFound, errorHandler};