(function () {
    'use strict';

    let list = ['い', 'ろ', 'は', 'に', 'ほ', 'へ', 'と'];
    let result = list.reverse();
    console.log(list);
    console.log(list === result);

    // reverseメソッドの戻り値は、
    // 破壊的操作により変更された自分自身

})();
