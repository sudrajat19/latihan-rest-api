'use strict';

exports.ok = function(values, res){
    let data = {
        'status' : 200,
        'values' : values
        };

         res.json(data);
         res.end();
}

//response nested
exports.oknested = function(values, res){
    const hasil = values.reduce((akumulasi, item)=>{
        if(akumulasi[item.nama]){
            const grup = akumulasi[item.nama];

            if(Array.isArray(grup.nama_skill)){
                grup.nama_skill.push(item.nama_skill);
            }else{
                grup.nama_skill = [grup.nama_skill, item.nama_skill];
            }
        }else{
            akumulasi[item.nama] = item;
        }
        return akumulasi;
    }, {});

    let data = {
        'status': 200,
        'values': hasil
    };

    res.json(data);
    res.end();

}