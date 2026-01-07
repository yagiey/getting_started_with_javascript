(function () {
    'use strict';

    const re = /http(s)?:\/\/([\w]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/gi;
    const str = `サポートサイトはhttp://www.example.com/です。
サンプル紹介サイトHTTPS://www.web-deli.com/もよろしく！`;

    const result = str.replace(re, '<a href="$&">$&</a>');
    console.log(result);

    //////////////////////////////////////////////////////
    // 2つ目のURL何かおかしい。何でや？
    //////////////////////////////////////////////////////

})();
