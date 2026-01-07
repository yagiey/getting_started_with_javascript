(function () {
    'use strict';

    let data = new WeakMap();

    let obj = {};
    data.set(obj, 'ほげ');
    let obj2 = {};
    data.set(obj2, 'ふが');

    obj = null;
    console.log( data.size );

    /////////////////////////////////
    // WeakMap 意味わからん
    /////////////////////////////////

})();
