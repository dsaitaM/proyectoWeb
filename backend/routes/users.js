const jwt = require('jsonwebtoken')

const bcrypt = require('bcrypt');

const express = require('express');
const router = express.Router();
const {database} = require('../config/helpers');

const cors = require('cors');
const app = require('../app');

router.use(express.json());

router.use(cors());



/* GET ALL USERS */
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
   database.table('usuario as u')
       .withFields(['u.password',
           'u.id',
           'u.comuna',
           'u.nombres',
           'u.apellidos',
           'u.admin',
           'u.email',
           'u.direccion',
           'u.region',
           'u.rut'
       ])
       .slice(startValue, endValue)
       .sort({id: .1})
       .getAll()
       .then(users => {
           if (users.length > 0) {
               res.status(200).json({
                   count: users.length,
                   usuarios: users
               });
           } else {
               res.json({message: 'No se encontraron usuarios'});
           }
       }).catch(err => console.log(err));
 });

//password
router.get('/token/:pw/:hs',(req,res) => {
    let pw = req.params.pw;
    let hash = req.params.hs;
    let nHash = hash.replace(/,/g,'/');
    console.log(nHash)
    // var token = jwt.sign({ foo: 'bar' }, pw);
    bcrypt.compare(pw,nHash,function(err,result){
        if (err) {
            console.error(err)
            return
            }
            console.log("result")
            console.log(result)
        res.status(200).json(result);
    })
    
    // console.log("pw")
    // console.log(pw)
    // 
});


//editar password
router.put('/password/:id/:pw', (req,res) => {
    let userId = req.params.id;
    let pw = req.params.pw;
    console.log("pw")
    console.log(pw)
    bcrypt.hash(pw,10,function(err,hash) {
        let nHash=hash.replace(/\//g,',')
        database.table('usuario')
        .filter({id: userId})
        .update({ 
            password: nHash
        }).catch(err => console.log(err));
    })

})


//get usuario especifico
router.get('/:userId', (req, res) => {
    let id = req.params.userId;
    console.log(id);


database.table('usuario as u')

    .withFields(['u.password',
    'u.id',
    'u.comuna',
    'u.nombres',
    'u.apellidos',
    'u.admin',
    'u.email',
    'u.direccion',
    'u.region',
    'u.rut'
    ])  
    .filter({'u.id' : id})
    .getAll()
    .then(user => {
        if (user) {
            res.status(200).json(user);
        } else {
            res.json({message: `No se pudo encontrar al usuario con la id: ${id}`});
        }


    }).catch(err => console.log(err));


});

//post usuario
router.post('/',(req,res) => {
    var usuario = req.body;
    var pw = req.body.password;
    // var token = jwt.sign({ foo: 'bar' }, pwTk);
    
    console.log("reqbody");
    console.log(usuario);
    if (usuario.rut != null){
        console.log("if")
        bcrypt.hash(pw,10,function(err,hash) {
            let nHash=hash.replace(/\//g,',')
            console.log("hash")
            console.log(hash)
            database.table('usuario')
            .insert({
                password: nHash,
                comuna: usuario.comuna,
                nombres: usuario.nombres,
                apellidos: usuario.apellidos,
                admin: usuario.admin,
                email: usuario.email,
                direccion: usuario.direccion,
                region: usuario.region,
                rut: usuario.rut 

            })
            .catch(err => console.log(err));
        })
        
    }else {
            res.json({message: 'Usuario no fue creado', success: false});
    }

})

module.exports = router;
