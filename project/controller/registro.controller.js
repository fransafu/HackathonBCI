var db = require('../models');
var Registro = db.registro;

exports.read = (req, res) => {
    return Registro.findAll({
        include: [
            { model: db.user },
            { model: db.empresa }
        ]
    })
        .then(registros => {
            res.json({registros: registros});
            // res.render('registros', { registros: [] });
        })
}

exports.create = (req, res) => {
    let body = req.body;
    console.log(body);
    /* body = {
        "id_usuario": 3,
        "userId": 3,
        "id_empresa": 3,
        "empresaId": 3,
        "activo": true,
        "material_multimedia": "almacenamiento/empresa3.rar"
    } */
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
        include: [
            { model: db.user },
            { model: db.empresa }
        ]
    },{
        where: { id: id }
    })
    .then(registro => {
        res.json({"registro": registro});
    })

}

exports.update = (req, res) => {
    let id = req.params.id;
    let body = req.body;
    return Registro.update(body,
        { where: { id: id } }
    )
    .then(result => {
        res.json({result: result});
    })
}

exports.delete = (req, res) => {
    let id = req.params.id;
    return Registro.update(
        { activo: 0 },
        { where: { id: id } }
    )
    .then(result => {
        res.json({ result: result});
    })
}