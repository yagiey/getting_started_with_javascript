(function () {
    'use strict';

    const list = [
        ['ソロ', 1],
        ['デュオ', 2],
        ['トリオ', 3],
    ];

    const fn = function (result, item, index, array) {
        return result.concat( item );
    }

    console.log( list.reduce(fn) );
    console.log( list.reduceRight(fn) );

})();
