(function () {
    'use strict';

    const re = /http(s)?:\/\/([\w]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/g;
    const str = `サポートサイトはhttp://www.example.com/です。
サンプル紹介サイトHTTPS://www.web-deli.com/もよろしく！`;

    let results = str.match(re);
    console.log(results);
    for (const result of results) {
        console.log(result);
    }

})();
