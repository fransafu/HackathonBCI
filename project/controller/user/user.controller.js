var db = require('../../models');
var User = db.user;

exports.findAll = (req, res) => {
    User.findAll()
        .then(users => {

        })
}

exports.findById = (req, res) => {
    User.findOne()
        .then((data) => {
            console.log(data);
            res.send(data);
        })
}

exports.update = (req, res) => {
    User.update({
        campo1: "dato"
    }, {
        where: {
            id: req.params.id
        }
    })
    .then(() => {
        res.json({"estado": "ok", "mensaje": "Actualizacion realizada con exito"});
    })
    .catch(err => res.json({"estado": "error", "mensaje": "Ocurrio un error mientras se ejecutaba al actualizacion"}));
}

exports.delete = (req, res) => {
    User.update({
        activo: false
    }, {
        where: {
            id: req.params.id
        }
    })
    .then(() => {
        res.json({"estado": "ok", "mensaje": "Actualizacion realizada con exito"});
    })
    .catch(err => res.json({"estado": "error", "mensaje": "Ocurrio un error mientras se ejecutaba al actualizacion"}));
}