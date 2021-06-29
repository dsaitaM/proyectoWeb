const express = require('express');
const router = express.Router();
const {database} = require('../config/helpers');

const cors = require('cors');
const app = require('../app');

router.use(express.json());

router.use(cors());

/* GET comentario*/
router.get('/:prodId', (req, res) => {
        let productId = req.params.prodId;
        console.log(productId);


    database.table('comentarios as c')

        .withFields(['c.comentario',
                    'c.nombre'
        ])

        .filter({'c.id_producto' : productId})
        .getAll()
        .then(calif => {
            if (calif) {
                res.status(200).json(calif);
            } else {
                res.json({message: `No se encontraron comentarios con la id del producto: ${productId}`});
            }


        }).catch(err => console.log(err));


});


router.post('/addC',(req,res) => {
    var idProd = req.body.id;
    var comentario = req.body.comentario;
    var nombre = req.body.nombre;
    console.log("reqbody");
    console.log(req.body);
    if (idProd != null && idProd > 0 && !isNaN(idProd)){
        database.table('comentarios')
            
            .insert({
             id_producto: idProd,
             comentario: comentario,
             nombre: nombre
            })
            .catch(err => console.log(err));
    }else {
            res.json({message: 'Error con el nuevo comentario', success: false});
    }

})

module.exports = router;
