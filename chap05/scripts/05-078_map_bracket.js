(function () {
    'use strict';

    const data = new Map();
    data['壱'] = '1'
    console.log( data['壱'] );

    // for-inループで取れちゃう
    for (const key in data) {
        console.log( key );
    }

    // Mapは、こういう使い方はしない。

})();
