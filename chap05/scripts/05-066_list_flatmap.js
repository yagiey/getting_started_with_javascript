(function () {
    'use strict';

    const list = [1, 2, 3, 4, 5];
    const result = list.flatMap(
        // 引数は、value, index, array
        function (v) {
            return [v * 2, v ** 2];
        }
    );

    console.log(result);
    console.log(list === result);

    // flatMapメソッドは非破壊的

})();
