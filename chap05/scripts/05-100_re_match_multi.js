(function () {
    'use strict';

    const re = /^[0-9]{1,}/g;
    const str = '101匹ワンちゃん。\n7人の小人';

    const results = str.match(re);
    console.log(results);
    for (const result of results) {
        console.log(result);
    }

})();
