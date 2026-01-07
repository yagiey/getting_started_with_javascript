(function () {
    'use strict';

    const list = [1, 2, 3, 4, 5];
    const copy = Array.from(list);

    console.log(copy);
    console.log(list === copy);

})();
