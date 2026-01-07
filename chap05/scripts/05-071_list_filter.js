(function () {
    'use strict';

    const books = [
        {title:'TypeScript入門', price:2948 },
        {title:'Bootstrapの教科書', price:3828 },
        {title:'はじめてのAndroidアプリ開発', price:3520 },
        {title:'基礎から学ぶC#の教科書', price:3190 },
        {title:'これからはじめるVue.js実践入門', price:3740 },
    ];

    // 引数は、item, index, array
    const fn = function (item) { return item.price < 3500; }

    const result = books.filter( fn );
    console.log(result);

})();
