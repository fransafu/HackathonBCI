/* var db = require('./index');
var User = db.user; */

var User = require('./index').user;
var Rol = require('./index').rol;
var Empresa = require('./index').empresa;
var Registro = require('./index').registro;
var Redsocial = require('./index').redsocial;

exports.seedRol = () => {
    Rol.bulkCreate([{
            tipo: 'Ejecutivo',
            activo: true
        }, {
            tipo: 'Administrador Social',
            activo: true
        }, {
            tipo: 'Agencia',
            activo: true
        }, {
            tipo: 'Adminstrador Web',
            activo: true
        }
    ])
    .then(result => console.log(result));
}

exports.seedUser = () => {
    User.bulkCreate([{
            nombre: 'nombre 1',
            apellido: 'apellido 1',
            email: 'email1@example.com',
            password: '12345',
            rolId: 1,
            rol_id: 1,
            telefono: '11231231',
            activo: true
        }, {
            nombre: 'nombre 2',
            apellido: 'apellido 2',
            email: 'email2@example.com',
            password: '12345',
            rolId: 2,
            rol_id: 2,
            telefono: '11231231',
            activo: true
        }, {
            nombre: 'nombre 3',
            apellido: 'apellido 3',
            email: 'email3@example.com',
            password: '12345',
            rolId: 3,
            rol_id: 3,
            telefono: '11231231',
            activo: true
        }, {
            nombre: 'nombre 4',
            apellido: 'apellido 4',
            email: 'email4@example.com',
            password: '12345',
            rolId: 4,
            rol_id: 4,
            telefono: '11231231',
            activo: true
        }
    ])
    .then(result => {
        result.forEach(element => {
            console.log(element.getId);
        });    
    });
}

exports.seedEmpresas = () => {
    Empresa.bulkCreate([{
            nombre: 'empresa 1',
            rubro: 'rubro 1',
            rut: '11.111.111-1',
            pagina_web: 'https://sitioweb.com',
            descripcion: 'Empresa ejemplo 1',
            categoria: 'Categoria 1',
            nombre_titular: 'Nombre titular 1',
            telefono_celular: '+56 9 12344565',
            email_titular: 'titular1@email.com',
            activo: true
        }, {
            nombre: 'empresa 2',
            rubro: 'rubro 2',
            rut: '11.111.111-1',
            pagina_web: 'https://sitioweb.com',
            descripcion: 'Empresa ejemplo 2',
            categoria: 'Categoria 2',
            nombre_titular: 'Nombre titular 2',
            telefono_celular: '+56 9 12344565',
            email_titular: 'titular2@email.com',
            activo: true
        }, {
            nombre: 'empresa 3',
            rubro: 'rubro 3',
            rut: '11.111.111-1',
            pagina_web: 'https://sitioweb.com',
            descripcion: 'Empresa ejemplo 3',
            categoria: 'Categoria 3',
            nombre_titular: 'Nombre titular 3',
            telefono_celular: '+56 9 12344565',
            email_titular: 'titular3@email.com',
            activo: true
        }, {
            nombre: 'empresa 4',
            rubro: 'rubro 4',
            rut: '11.111.111-1',
            pagina_web: 'https://sitioweb.com',
            descripcion: 'Empresa ejemplo 4',
            categoria: 'Categoria 3',
            nombre_titular: 'Nombre titular 3',
            telefono_celular: '+56 9 12344565',
            email_titular: 'titular4@email.com',
            activo: true
        }
    ])
    .then(result => console.log(result));
}

// Sequelize.queryInterface.bulkDelete('user', null, {});
