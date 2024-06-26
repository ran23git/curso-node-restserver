const {response, request} = require('express');


const usuariosGet = (req = request, res = response) => {
    const {q, nombre='no name', apikey} = req.query;
    res.json({msg: 'get API - controlador GET',
              q,
              nombre,
              apikey
    });
}

const usuariosPost = (req, res = response) => {      res.json({msg: 'post API - controlador POST'});}

const usuariosPut = (req, res = response) => {
    const {id} = req.params;                         res.json({msg: 'put API - controlador PUT',        id    });
}
    
const usuariosPatch = (req, res = response) => {     res.json({msg: 'patch API - controlador PATCH'});}

const usuariosDelete = (req, res = response) => {    res.json({msg: 'delete API - controlador DELETE'});}


module.exports = {
    usuariosGet,    usuariosPost,    usuariosPut,    usuariosPatch,    usuariosDelete}