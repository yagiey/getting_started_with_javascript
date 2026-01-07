(function () {
    'use strict';

    const data = new Map();
    data.set('1st', 'ファースト');
    data.set('2nd', 'セカンド');
    data.set('3rd', 'サード');
    data.set('4th', 'フォース');

    const dispFn = function(value, key, map) {
        console.log(`${key}: ${value}`);
    }

    data.forEach( dispFn );

})();
