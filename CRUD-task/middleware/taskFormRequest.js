


const taskFormRequest = (req, res, next) => {

    if (req.body.name === undefined) {
        return res.status(403).send("Require a nom");
    } else if (req.body.duree === undefined) {
        return res.status(403).send("Require a duree");
    } else if ( isNaN(req.body.duree)) {
        return res.status(403).send("duree must be an integer");
    }
    return next();
}

module.exports = taskFormRequest

