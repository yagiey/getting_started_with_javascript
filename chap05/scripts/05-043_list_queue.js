(function () {
    'use strict';

    let data = [];
    console.log(data);

    data.push(1);
    data.push(2);
    data.push(3);

    console.log(data);

    let item = data.shift();
    console.log(item);
    item = data.shift();
    console.log(item);
    item = data.shift();
    console.log(item);

    // // 以下、Strictモードによりエラーになるはず
    // n = 0;
    // let public = 42;

})();
