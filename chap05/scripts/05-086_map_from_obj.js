(function () {
    'use strict';

    const obj = {
        '1st': 'ファースト',
        '2nd': 'セカンド',
        '3rd': 'サード',
    };
    const map = new Map( Object.entries(obj) );
    console.log( map );

})();
