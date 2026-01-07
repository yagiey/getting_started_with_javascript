(function () {
    'use strict';

    const data = new Map();
    data.set([], '配列');
    console.log( data.get([]) );

    const key = [];
    data.set(key, '配列２')
    console.log( data.get(key) );

})();
