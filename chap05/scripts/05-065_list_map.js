(function () {
    'use strict';

    const list = [2, 3, 4, 5];
    const result = list.map(
        function (value, index, array) {
            return value * value;
        }
    );

    console.log(result);

})();
