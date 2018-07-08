var express = require('express');
var router = express.Router();
var db = require('../models');
var Registro = db.registro;
var User = db.user;
var Empresa = db.empresa;

function querySelect(sql) {
  return db.sequelize.query(sql, {type: db.sequelize.QueryTypes.SELECT });// .then(resultCount => resultCount);
}

/* GET home page. */
router.get('/', function(req, res, next) {
  querySelect(`select  
  (select count(id) from empresas) as empresas_total, (select count(id) from users where rol_id = 1) as usuarios_total
  `)
  .then(resultCount => {
    querySelect(`select array_agg(distinct (rubro)) as data from empresas`)
    .then(resultRubro => {
      querySelect(`select array_agg(distinct (categoria)) as data from empresas`)
      .then(resultCategoria => {
        querySelect(`select 
            r.id, 
            u.nombre, u.apellido, e.nombre, e.pagina_web
          from registros as r
          inner join users as u on r."userId" = u.id
          inner join rols on u."rolId" = rols.id
          inner join empresas as e on r."empresaId" = e.id
          where rols.tipo = 'Ejecutivo'
          limit 10`)
        .then(resultUltimasVentas => {
          querySelect(`
            select users.id, users.nombre, users.apellido, sol.contador
            from users
            inner join (
              select u.id as id, count(r.id) as contador
              from registros as r
              inner join users as u on r."userId" = u.id
              inner join rols on u."rolId" = rols.id
              where rols.tipo = 'Ejecutivo'
              group by u.id, r.id
            ) as sol on users.id = sol.id`)
          .then(resultStatsVentas => {
            res.render('metrics', {
              resultCount: resultCount[0], 
              resultRubro: resultRubro[0], 
              resultCategoria: resultCategoria[0], resultUltimasVentas: resultUltimasVentas, resultStatsVentas: resultStatsVentas})
          })
        })
        // res.json({resultCount: resultCount, resultRubro: resultRubro, resultCategoria: resultCategoria})
        // res.render('index', { title: 'Express' });
        // res.render('metrics');
      })
    })
  })
});

module.exports = router;
