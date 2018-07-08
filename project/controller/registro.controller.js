var db = require('../models');
var Registro = db.registro;
var Empresa = db.empresa;
var User = db.user;

exports.read = (req, res) => {
    return Registro.findAll(
        {where: {activo: true},
         include: [
             {model: db.user},
             {model: db.empresa}
         ]}
        )
        .then(registros => {
            res.render('registros', { registros: registros, registro_borrado: null });
        })
}

exports.new = (req, res) => {
    Empresa.findAll()
        .then(empresas => res.render('registros_new', {empresas: empresas}));
}

exports.create = (req, res) => {
    if (!req.files)
        return res.status(400).send('No se subio ningun archivo');

    let file = req.files.material_multimedia;

    User.find({
        where: {
            id: 1
        }
    })
        .then((user) => {
            Empresa.find({
                where: {
                    id: 1
                }
            })
                .then((empresa) => {
                    db.sequelize.query('INSERT INTO registros("material_multimedia", "activo", "empresaId", "userId", "createdAt", "updatedAt") VALUES (:material_multimedia, :activo, :empresaId, :userId, :created_at, :updated_at)',
                                       { replacements: {
                                           userId: 1,
                                           empresaId: empresa.id,
                                           material_multimedia: file.name,
                                           activo: true,
                                           created_at: new Date(),
                                           updated_at: new Date()
                                       }, type: db.sequelize.QueryTypes.SELECT }
                                      )
                    .then(() => res.redirect('/registros')) ;

                    // Registro.create({material_multimedia: file.name,
                    //                  empresaId: empresa.id,
                    //                  userId: user.id,
                    //                  activo: true})
                    //     .then(res.redirect('/registros'));
                });
        });


    // let body = req.body;
    /* body = {
        "id_usuario": 3,
        "userId": 3,
        "id_empresa": 3,
        "empresaId": 3,
        "activo": true,
        "material_multimedia": "almacenamiento/empresa3.rar"
    } */
    // if (body) {
    //     return Registro.create(body)
    //         .then(result => {
    //             res.json({"result": result});
    //         })
    // } else {
    //     res.render('registros_new');
    //     // res.json({"result": "no data"});
    // }
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
        { activo: false },
        { where: { id: id } }
    )
        .then(resultado => {
            Registro
                .findAll(
                    {where: {activo: true},
                     include: [
                        {model: db.user},
                        {model: db.empresa}]
                    }
                )

              .then(registros => {
                  res.render('registros', { registros: registros,
                                            registro_borrado: id});
              }
                   );
        });
}
