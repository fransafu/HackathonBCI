var db = require('../models');
var Registro = db.registro;

exports.read = (req, res) => {
    return Registro.findAll()
        .then(registros => {
            res.render('registros', { registros: [] });
        })
}

exports.create = (req, res) => {
    let body = req.body;
    if (body) {
        return Registro.create(body)
        .then(result => {
            res.json({"result": result});
        })
    } else {
        res.json({"result": "no data"});
    }
    
}

exports.findById = (req, res) => {
    let id = req.params.id;
    return Registro.find({
        where: {
            id: id
        }
    })
    .then(registro => {
        res.json({"registro": registro});
    })

}

exports.update = (req, res) => {
    let id = req.params.id;
    return Registro.update(
        {
// Falta competar!!
        },
        {
            where: {
                id: id
            }
        }
    )
    .then(filasActualizadas => {
        res.json({"filasActualizadas": filasActualizadas});
    })
}

exports.delete = (req, res) => {
    let id = req.params.id;
    return Registro.update(
        {
            activo: 0
        },
        { where: { id: id } }
    )
    .then(resultado => {
        res.json({"resultado": resultado});
    })
}