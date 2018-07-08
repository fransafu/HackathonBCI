var db = require('../models');
var User = db.user;

exports.read = (req, res) => {
    return User.findAll()
    .then(users => {
        res.send('template', { users: users });
    })
}

exports.findById = (req, res) => {
    let id = req.params.id;
    return User.find({
        where: { id: id }
    })
    .then((user) => {
        res.send('template', { user: user });
    })
}

exports.create = (req, res) => {
    let body = req.body;
    if (body) {
        return User.create(body)
            .then(result => {
                res.send('template', { result: result });
            })
    } else {
        res.send('template', { result: [] });
    }
}

exports.update = (req, res) => {
    let id = req.params.id;
    return User.update({
        // Falta completar!!!
    }, {
        where: { id: id }
    })
    .then(result => {
        res.send('template', { result: result });
    });
}

exports.delete = (req, res) => {
    let id = req.params.id;
    User.update({
        activo: false
    }, {
        where: { id: id }
    })
    .then(result => {
        res.send('template', { result: result });
    });
}