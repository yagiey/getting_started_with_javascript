(function () {
    'use strict';

    let list = ['みつば', 'ねぎ', 'しょうが', 'にら', 'しそ'];
    let result = list.sort();
    console.log(list);
    console.log(result === list);

    // sortメソッドの戻り値は、
    // 破壊的操作により変更された自分自身

})();
