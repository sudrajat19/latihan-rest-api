'use strict';

let response = require('./res');
let connection = require('./koneksi');

exports.index = function(req, res){
    response.ok('aplikasi rest api started',res);
};

//menampilkan data users
exports.tampilUsers = function (req,res){
    connection.query('SELECT * FROM users', function(error, rows, fields){
        if(error) {
            console.log(error);
        }else{
            response.ok(rows,res);
        }
    });
}

//menampilkan data berdasarkan id
exports,this.tampilUsersId = function(req,res){
    let id = req.params.id;
    connection.query('SELECT * FROM users WHERE id_users = ?', [id], function(error, rows, fields){
        if(error){
            console.log(error);
        }else{
            response.ok(rows,res);
        }
    });
}