'use strict';

module.exports = function(app){
    let msJson = require('./controller');

    app.route('./')
        .get(myJson.index);
};