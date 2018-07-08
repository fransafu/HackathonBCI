var db = require('../models');
var Registro = db.registro;

exports.read = (req, res) => {
    return Registro.findAll(
        {where: {activo: true}},
        {include: [
            {model: db.user},
            {model: db.empresa}
        ]}
        )
        .then(registros => {
            res.render('registros', { registros: registros, registro_borrado: null });
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
            activo: false
        },
        { where: { id: id } },

    )
        .then(resultado => {
            Registro
                .findAll(
                    {where: {activo: true}},
                    {include: [
                        {model: db.user},
                        {model: db.empresa}
                    ]})
                .then(registros => {
                    console.log(registros);
                    res.render('registros', { registros: registros,
                                              registro_borrado: id});
                }
                     );
        });
}
