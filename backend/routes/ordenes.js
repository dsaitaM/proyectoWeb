const express = require('express');

const router = express.Router();

const cors = require('cors');

router.use(cors());

const {database} = require('../config/helpers');
router.use(express.json());

//GET ALL PEDIDOS
router.get('/', function(req, res) {
    let page = (req.query.page != undefined && req.query.page != 0) ? req.query.page:1;
   const limit = (req.query.limit != undefined && req.query.limit != 0) ? req.query.limit:100;
   let startValue;
   let endValue;
   if (page > 0){
     startValue = (page * limit) - limit;
     endValue = page * limit;
   } else{
     startValue = 0;
     endValue = 100;
   }
   database.table('pedidos as p')
       .withFields(['p.pedido',
           'p.nombreUsuario',
       ])
       .slice(startValue, endValue)
       .sort({id_pedido: .1})
       .getAll()
       .then(peds => {
           if (peds.length > 0) {
               res.status(200).json({
                   count: peds.length,
                   pedidos: peds
               });
           } else {
               res.json({message: 'No se encontraron pedidos'});
           }
       }).catch(err => console.log(err));
 });


//POST PEDIDO
router.post('/',(req,res) => {
    var orden = req.body;
    console.log("reqbody");
    console.log(orden);
    if (orden != null){
        
        database.table('pedidos')
            .insert({
                pedido: orden.pedido,
                nombreUsuario: orden.nombreUsuario

            })
            .catch(err => console.log(err));
    }else {
            res.json({message: 'Error con el nuevo pedido', success: false});
    }

})


module.exports = router;