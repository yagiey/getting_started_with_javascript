(function () {
    'use strict';

    const re = /http(s)?:\/\/([\w]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/gi;
    const str = `サポートサイトはhttp://www.example.com/です。
サンプル紹介サイトHTTPS://www.web-deli.com/もよろしく！`;

    const fn = function(match, p1, p2, p3, offset, str) {
        console.log(match);
        console.log(p1);
        console.log(p2);
        console.log(p3);
        console.log(offset);
        console.log(str);
        return match.toUpperCase();
    }

    console.log( str.replace(re, fn) );

    //////////////////////////////////////////////////////
    // 2つ目のURL何かおかしい。何でや？
    //////////////////////////////////////////////////////

})();
