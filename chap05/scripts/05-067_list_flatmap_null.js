(function () {
    'use strict';

    const list = [10, 42, null, 73, 8];
    const result = list.flatMap(
        // 引数は、value, index, array
        function (value) {
            if (value === null) {
                return [];
            } else {
                return value;
            }
        }
    );
    console.log(result);

})();
