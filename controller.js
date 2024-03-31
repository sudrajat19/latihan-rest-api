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
            connection.log(error);
        }else{
            response.ok(rows,res);
        }
    })
}