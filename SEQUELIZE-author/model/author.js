const sequelize = require("sequelize");
const db = require("../config/db");

const author = db.define(
    'author',
    {
        first_name : {type : sequelize.STRING},
        last_name : {type : sequelize.STRING},
        age: {type : sequelize.INTEGER},
        nb_posts : {type : sequelize.INTEGER}
    }, {
        timestamps : true
    }
); 

module.exports = author

