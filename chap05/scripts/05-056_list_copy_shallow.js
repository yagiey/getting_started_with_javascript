(function () {
    'use strict';

    const list1 = [1, 2, 3, 4, 5];
    const copy1 = Array.from(list1);
    list1[0] = 999;
    console.log(list1);
    console.log(copy1);

    const list2 = [
        [10, 20, 30],
        [40, 50, 60],
        [70, 80, 90],
    ];
    const copy2 = Array.from(list2);
    list2[0][0] = 777;
    console.log(list2);
    console.log(copy2);

    // スプレッド構文でコピー
    // スプレッド構文によるコピーもshallowコピー
    {
        const l = [
            [10, 20, 30],
            [40, 50, 60],
            [70, 80, 90],
        ];
        const c = [...l];
        c[0][0] = 123;
        console.log(l);
        console.log(c);
    }

    // sliceメソッドでコピー
    // sliceメソッドによるコピーもshallowコピー
    {
        const l = [
            [10, 20, 30],
            [40, 50, 60],
            [70, 80, 90],
        ];
        const c = l.slice();
        c[0][0] = 123;
        console.log(l);
        console.log(c);
    }

    // concatメソッドでコピー
    // concatメソッドによるコピーもshallowコピー
    {
        const l = [
            [10, 20, 30],
            [40, 50, 60],
            [70, 80, 90],
        ];
        const c = l.concat();
        c[0][0] = 123;
        console.log(l);
        console.log(c);
    }

})();
