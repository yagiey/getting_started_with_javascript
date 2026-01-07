(function () {
    'use strict';

    const list = ['い', 'ろ', 'は', 'に', 'ほ', 'へ', 'と'];
    const fn = function () {
        return Math.random() - 0.5;
    }
    list.sort(fn);
    console.log(list);

})();
