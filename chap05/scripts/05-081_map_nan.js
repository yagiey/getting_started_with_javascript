(function () {
    'use strict';

    const data = new Map();
    data.set(NaN, 'ナン');
    console.log( data.get(NaN) ); // マップのキーを比較する文脈でのみtrueになる！

    console.log(NaN === NaN); // これはfalse

})();
