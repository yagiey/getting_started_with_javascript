(function () {
    'use strict';

    const re = /(0\d{1,3})-(\d{2,4})-(\d{3,4})/;
    const str = 'オフィスの電話番号は000-111-3333です。';

    const result = str.match(re);
    console.log(`市外局番:${result[1]}
市内局番:${result[2]}
加入者番号:${result[3]}`
    );

    console.log(result);

})();
