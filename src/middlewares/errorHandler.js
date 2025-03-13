import createError from 'http-errors';

export const errorHandler = (err, req, res, next) => {
  if (err instanceof createError.HttpError) {
    return res.status(err.status).json({
      message: err.message,
      status: err.status,
      stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
    });
  }

  return res.status(500).json({
    message: 'Something went wrong',
    status: 500,
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
  });
};
