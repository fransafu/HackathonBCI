var db = require('../models');
var Empresa = db.empresa;

exports.read = (req, res) => {
    return Empresa.findAll()
    .then(empresas => {
        res.send('template', { empresas: empresas });
    })
}

exports.findById = (req, res) => {
    let id = req.params.id;
    return Empresa.find({
        where: { id: id }
    })
    .then(empresa => {
        res.send('template', { empresa: empresa });
    })
}

exports.create = (req, res) => {
    let body = req.body;
    if (body) {
        return Empresa.create(body)
            .then(result => {
                res.send('template', { result: result });
            })
    } else {
        res.send('template', { result: [] });
    }
}

exports.update = (req, res) => {
    let id = req.params.id;
    return Empresa.update({
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
    Empresa.update({
        activo: false
    }, {
        where: { id: id }
    })
    .then(result => {
        res.send('template', { result: result });
    });
}