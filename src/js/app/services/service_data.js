'use strict';

lt.services.serviceData = {

//  Получаем дынные из JSON'а
    serviceData_get: function(page) {
        var url = '/json/' + page + '.json';
        return new Promise(function(resolve, reject) {
            $.getJSON(
                url
            ).done(
                function(data) {
                    resolve(data);
                }
            ).fail(
                function(error) {

                    reject(error);
                }
            );
        });
    },

//  Обрабатываем URL
    serviceData_hashProcessing: function() {
        return new Promise(function(resolve, reject) {
            var hash = ((location.hash).replace(/#/, ''));

            resolve(hash);
        });
    }
}
