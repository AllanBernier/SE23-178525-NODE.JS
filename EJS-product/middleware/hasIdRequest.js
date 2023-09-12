
const hasId = (req, res, next) => {

    if ( isNaN(req.params.id) ){
        return res.status(403).send("Require an number id")
    }

    return next()
}



module.exports = hasId
