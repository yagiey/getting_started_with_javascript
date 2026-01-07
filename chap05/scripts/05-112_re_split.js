(function () {
    'use strict';

    const re = /[\/\.\-]/g;
    console.log('2022/12/04'.split(re));
    console.log('2022-12-04'.split(re));
    console.log('2022.12.04'.split(re));

})();
