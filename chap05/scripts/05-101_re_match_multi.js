(function () {
    'use strict';

    const re = /^[0-9]{1,}/gm;
    const str = '101匹ワンちゃん。\n7人の小人';

    const results = str.match(re);
    console.log(results);
    for (const result of results) {
        console.log(result);
    }

    // /[0-9]{1,}/gm はリテラル。
    // もちろん一旦変数に入れる必要はない。
    const results2 = str.match( /[0-9]{1,}/gm );
    console.log(results2);
    for (const result of results2) {
        console.log(result);
    }

})();
