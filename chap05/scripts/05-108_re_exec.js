(function () {
    'use strict';

    const re = /http(s)?:\/\/([\w]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/gi;
    const str = `サポートサイトはhttp://www.example.com/です。
サンプル紹介サイトHTTPS://www.web-deli.com/もよろしく！`;

    let result;
    while ((result = re.exec(str)) !== null) {
        console.log( result );
    }

    ///////////////////////////////////////////////////
    // サブマッチ文字列って何や？
    ///////////////////////////////////////////////////

})();
