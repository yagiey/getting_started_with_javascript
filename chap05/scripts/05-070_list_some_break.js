(function () {
    'use strict';

    const list = [10, 42, null, 73, 8];
    const fn = function(item, index, array) {
        if (item === null) {
            return true;
        }
        console.log( item );
    }

    list.some( fn );

})();
