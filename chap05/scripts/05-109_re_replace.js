(function () {
    'use strict';

    const re = /(0\d{1,3})-(\d{2,4})-(\d{3,4})/g;
    const str = `お問い合わせは088-888-8888まで。
夜間は088-999-9999で受け付けております。`;

    const result = str.replace(re, '$1($2)$3');
    console.log( result );

    const re2 = /(0\d{1,3})-(\d{2,4})-(\d{3,4})/;
    const result2 = str.replace(re2, '$1($2)$3');
    console.log( result2 );

    const result3 = str.replaceAll(re, '$1($2)$3');
    console.log( result3 );

})();
