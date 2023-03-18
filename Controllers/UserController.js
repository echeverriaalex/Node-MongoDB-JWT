const User = require('../Models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const login = (req, res, next)=>{

    let body = req.body

    User.findOne({email: body.email}, (erro, userDB)=>{
        if(erro){
            return res.status(500).json({
                ok: false,
                err: erro
            })
        }

        if (bcrypt.compareSync(body.password, userDB.password)){

            res.json({
                ok: true,
                message: "Hello " + userDB.nombre + ", nice to have you here again.",
                usuario: userDB
            }).end();
        }
        else{
            res.status(500).json({
                ok: false,
                errer: "Check your password, you wrote it incorrectcly"
            }).end();
        }        
    })
}

const register = (req, res, next)=>{

    console.log("en el register");
    let body = req.body;

    console.log("req" + req);
    console.log("body " + body);
    console.log("req body es: " + req.body);

    console.log("nombre: " + body.nombre);
    console.log("email: " +body.email);
    console.log("pass: " + body.password);

    let {nombre, email, password} = body;

    let usuario = new User({
        nombre,
        email,
        password: bcrypt.hashSync(password, 10)
    });

    console.log(usuario);

    usuario.save((err, userDB)=>{
        if(err){
            return res.status(400).json({
                ok: false,
                err,
            }).end();
        }
        res.json({
            ok: true,
            usuario: userDB
        }).end();
    })
};

const findAllUsers = (req, res, next) =>{
    User.find({}, (err, users)=>{
        if(err) next(err);
        else{
            res.status(200).send(users);
        }
    });    
}

module.exports = {
    login,
    register,
    findAllUsers
};