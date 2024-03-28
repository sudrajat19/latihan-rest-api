'use strict';

let response = require('./res');
let connection = require('./koneksi');

exports.index = function(values, res){
    response.ok('aplikasi rest api started');
};