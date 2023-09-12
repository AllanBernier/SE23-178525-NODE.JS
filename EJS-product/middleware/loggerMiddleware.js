const logger = (req, res, next) => {
    console.log(req.baseUrl);
    return next();
}

module.exports = logger