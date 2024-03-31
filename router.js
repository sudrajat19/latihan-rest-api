'use strict';

module.exports = function(app){
    let myJson = require('./controller');

    app.route('/')
        .get(myJson.index);

    app.route('/tampil')
        .get(myJson.tampilUsers);

    app.route('/tampil/:id')
        .get(myJson.tampilUsersId);
};
