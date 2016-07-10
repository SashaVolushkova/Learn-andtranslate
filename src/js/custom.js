'use strict';

(function($){
    $(document).ready(function() {
        lt.services.serviceData.serviceData_hashProcessing()
            .then(
                function(result) {
                    console.log(result);
                    return lt.services.serviceData.serviceData_get(result);
                },
                function(error) {
                    console.log(error);
                }
            )
            .then(
                function(result) {
                    console.log(result);
                    var page = Object.keys(result)[0];
                    lt.helpers[page](result[page]);
                },
                function(error) {
                    console.log(error);
                }
            );
    });

/*
    $(window).load(function() {
        
    });
    
    $(window).resize(function() {
        
    });
*/
})(window.jQuery);

