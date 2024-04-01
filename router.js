'use strict';

module.exports = function(app){
    let myJson = require('./controller');

    app.route('/')
        .get(myJson.index);

    app.route('/tampil')
        .get(myJson.tampilUsers);

    app.route('/tampil/:id')
        .get(myJson.tampilUsersId);

    app.route('/tambah')
        .post(myJson.tambahUsers);

    app.route('/ubah')
        .put(myJson.ubahDataUsers);

    app.route('/hapus')
        .delete(myJson.hapusDataUsers);

    app.route('/tampilskill')
        .get(myJson.tampilGrupSkill);
};
