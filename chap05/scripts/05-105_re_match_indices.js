(function () {
    'use strict';

    const re = /http(s)?:\/\/([\w]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/di;
    const str = `サポートサイトはhttp://www.example.com/です。
サンプル紹介サイトHTTPS://www.web-deli.com/もよろしく！`;

    let result = str.match(re);
    console.log(result);

    //////////////////////////////////////////////////
    // gオプション無しの結果が意味わからん
    //////////////////////////////////////////////////

})();
