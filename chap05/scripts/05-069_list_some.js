(function () {
    'use strict';

    const books = [
        {title:'TypeScript入門', price:2948 },
        {title:'Bootstrapの教科書', price:3828 },
        {title:'はじめてのAndroidアプリ開発', price:3520 },
        {title:'基礎から学ぶC#の教科書', price:3190 },
        {title:'これからはじめるVue.js実践入門', price:3740 },
    ];

    // 引数は、element, index, array
    const fn = function (element) { return element.price < 3000; }

    // 3000円未満の本が存在するか？
    console.log( books.some(fn) );

    // すべての本が3000円未満か？
    console.log( books.every(fn) );

})();
 