(function () {
    'use strict';

    const data = new Set(['壱', '弍', '参']);

    // 引数のitemとkeyにはどっちも値が入る。
    const fn = function (item, key, set) {
        console.log(item);
    }

    data.forEach( fn );

    // これでもいい
    for (const element of data) {
        console.log( element );
    }

    // これでもいい
    for (const element of data.values()) {
        console.log( element );
    }

})();
