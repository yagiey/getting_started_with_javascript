(function () {
    'use strict';

    const re = /[0-9]{3}-[0-9]{4}/;
    const str1 = '郵便番号は111-0500です。';
    const str2 = '住所は東京都東京市東京町1-1-1です。';
    console.log( re.test(str1) );
    console.log( re.test(str2) );

})();
