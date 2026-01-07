(function () {
    'use strict';

    let list =
        Array.from(
            { length: 5 }, // 配列ライクなオブジェクト
            function (value, index) {
                return index * 10;
            }
        );
    console.log(list);

    // fillメソッドで、すべての要素を固定値で初期化
    let data1 = new Array(5);
    data1.fill('-', 0, data1.length);
    console.log(data1);

    let data2 = new Array(5);
    data2.fill('-');
    console.log(data2);

})();
