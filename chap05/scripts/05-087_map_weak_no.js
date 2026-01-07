(function () {
    'use strict';

    let obj = {};
    const data = new Map();
    data.set( obj, 'ほげ' );
    obj = null; // オブジェクトを破棄したつもり
    console.log(data.size);

})();
