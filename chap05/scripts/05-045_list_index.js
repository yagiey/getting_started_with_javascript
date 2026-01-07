(function () {
    'use strict';

    let list = [10, 20, 30, 20, 50];

    console.log(list.indexOf(20));
    console.log(list.indexOf(60));
    console.log(list.lastIndexOf(20));
    console.log(list.indexOf('20'));
    console.log(list.indexOf(20, 2));
    console.log(list.lastIndexOf(20, 2));
    console.log(list.indexOf(20, -2));

    // // 以下、Strictモードによりエラーになるはず
    // n = 0;
    // let public = 42;

})();
