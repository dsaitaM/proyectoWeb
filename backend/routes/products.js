const express = require('express');
const router = express.Router();
const {database} = require('../config/helpers');

const cors = require('cors');

router.use(cors());

router.use(express.json());




/* GET ALL PRODUCTS */
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
  database.table('producto as p')
      .withFields(['p.categoria as categorias',
          'p.nombre_producto as nombre',
          'p.precio',
          'p.stock',
          'p.imagen',
          'p.id_producto as id',
          'p.descripcion'
      ])
      .slice(startValue, endValue)
      .sort({id_producto: .1})
      .getAll()
      .then(prods => {
          if (prods.length > 0) {
              res.status(200).json({
                  count: prods.length,
                  products: prods
              });
          } else {
              res.json({message: 'No se encontraron productos'});
          }
      }).catch(err => console.log(err));
});

/* GET ONE PRODUCT*/
router.get('/:prodId', (req, res) => {
    let productId = req.params.prodId;
    database.table('producto as p')
        .withFields(['p.categoria as categorias',
          'p.nombre_producto as nombre',
          'p.precio',
          'p.stock',
          'p.imagen',
          'p.id_producto as id',
          'p.descripcion',
      ])
        .filter({'p.id_producto': productId})
        .get()
        .then(prod => {
            console.log(prod);
            if (prod) {
                res.status(200).json(prod);
            } else {
                res.json({message: `No se encontraron productos con la id: ${productId}`});
            }
        }).catch(err => res.json(err));
});


//editar stock
router.put('/carrito/:prodId', (req,res) => {
    let productId = req.params.prodId;
    let nuevoStock= req.body.nuevoStock;
    console.log(nuevoStock)
    database.table('producto')
    .filter({id_producto: productId})
    .update({ 
        stock: nuevoStock
    }).catch(err => console.log("Error",err));
})


module.exports = router;
