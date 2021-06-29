const express = require('express');
const router = express.Router();
const {database} = require('../config/helpers');

const cors = require('cors');
const app = require('../app');

router.use(express.json());

router.use(cors());

/* GET calificacion*/
router.get('/:prodId', (req, res) => {
        let productId = req.params.prodId;
        console.log("req.body");
        console.log(req.body);


    database.table('calificaciones as c')

        .withFields(['c.calificacion',
        'c.id as idUser'
        ])

        .filter({'c.id_producto' : productId})
        .getAll()
        .then(calif => {
            if (calif) {
                res.status(200).json(calif);
            } else {
                res.json({message: `No se encontraron calificaciones con la id del producto: ${productId}`});
            }


        }).catch(err => console.log(err));


});


router.post('/addC',(req,res) => {
    var idProd = req.body.idProd;
    var idUser = req.body.idUser
    var calification = req.body.calification;
    console.log("reqbody");
    console.log(idProd);
    if (idProd != null && idProd > 0 && !isNaN(idProd)){
        database.table('calificaciones')
            
            .insert({
             id_producto: idProd,
             id: idUser,
             calificacion: calification
            })
            .catch(err => console.log(err));
    }else {
            res.json({message: 'Error con la nueva calificacion', success: false});
    }

})

module.exports = router;
