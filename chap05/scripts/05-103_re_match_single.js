(function () {
    'use strict';

    const re = /^.+/gs;
    const str = 'こんにちは。\n私の名前は鈴木三郎です。';

    const results = str.match(re);
    for (const result of results) {
        console.log(result);
    }

})();
