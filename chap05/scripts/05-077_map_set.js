(function () {
    'use strict';

    const data = new Map();

    data.set('壱', '1')
        .set('弍', '2')
        .set('参', '3')
        .set('壱', '一');

    console.log( data.get('参') );
    console.log( data.get('壱') );
    console.log( data.get('肆') );

    // キーが存在するかどうか確認するには、has述語
    console.log( data.has('肆') );

    // for-inループで舐めることはできない
    for (const key in data) {
        // ていうかそもそも、マップオブジェクトに対してブラケット構文は使わない
        console.log(key, '=>', data[key]);
    }

})();
