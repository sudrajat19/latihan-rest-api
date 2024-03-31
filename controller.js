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
exports.tampilUsersId = function(req,res){
    let id = req.params.id;
    connection.query('SELECT * FROM users WHERE id_users = ?', [id], function(error, rows, fields){
        if(error){
            console.log(error);
        }else{
            response.ok(rows,res);
        }
    });
}

//menambahkan data users
exports.tambahUsers = function(req,res){
    let id_users = req.body.id_users;
    let nama = req.body.nama;
    let password = req.body.password;
    let photo = req.body.photo;
    let deskripsi = req.body.deskripsi;
    let profesi =req.body.profesi;

    connection.query('INSERT INTO users (id_users,nama, password, photo, deskripsi, profesi) VALUES (?,?,?,?,?,?)',[id_users, nama, password, photo, deskripsi, profesi], function(error,rows,fields){
        if(error){
            console.log(error);
        }else{
            response.ok('berhasil menambahkan data',res);
        }
    });
}


//mengubah data berdasarkan id
exports.ubahDataUsers = function(req,res){
    let id_users = req.body.id_users;
    let nama = req.body.nama;
    let password = req.body.password;
    let photo = req.body.photo;
    let deskripsi = req.body.deskripsi;
    let profesi =req.body.profesi;

    connection.query('UPDATE users SET nama=?, password=?, photo=?, deskripsi=?, profesi=? WHERE id_users=?',[nama,password,photo,deskripsi,profesi,id_users], function(error,rows,fields){
        if(error){
            console.log(error);
        }else{
            response.ok('berhasil merubah data', res);
        }
    });
}

//menghapus data berdasar id

exports.hapusDataUsers=function(req,res) {
    let id_users = req.body.id_users;
    connection.query("DELETE FROM users WHERE id_users = ?",[id_users], function(error,rows,fields){
        if(error){
            console.log(error);
        }else{
            response.ok('data berhasil di hapus',res);
        }

    });
}