var db = require('../../models');
var User = db.user;

exports.findById = (req, res) => {
    User.findOne()
        .then((data) => {
            console.log(data);
            res.send(data);
        })
        //res.json({"Estado": "ok"});
}

exports.update = (req, res) => {
    res.json({"Estado": "ok"});
}

exports.delete = (req, res) => {
    res.json({"Estado": "ok"});
}