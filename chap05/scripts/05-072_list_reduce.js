(function () {
    'use strict';

    const list = [4, 2, 8, 3];
    const fn = function(result, item, index, array) { return result * item; }
    const result = list.reduce(fn, 1);
    console.log( result );

})();
