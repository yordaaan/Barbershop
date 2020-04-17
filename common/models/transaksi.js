'use strict';

module.exports = function(Transaksi) {

    Transaksi.discount = function (num1,num2,cb) {
        // Transaksi.findById(tID, function (err, instance) {
            // var diskon = instance.Total_Harga * instance.Diskon / 100
            // var result = instance.Total_Harga - diskon;
            var diskon = num1 * num2 / 100
            var result = num1 - diskon
            cb(null, result);
        // });
    }

    Transaksi.remoteMethod('discount',
    {
        http: {verb:'post', path:'/discount'},
        // accepts: {arg: 'id', type: 'string', required: true, http: { source: 'query' }},
        accepts: [{arg:'Total Harga', type:'number'},{arg:'Diskon', type:'number'}],
        returns: {arg:'Total Harga Akhir', type: 'number'},
        description: "Custom discount endpoint"
    }
    );
};
