(function () {
    'use strict';

    const list = [5, 25, 10];
    list.sort(
        function (lhs, rhs) {
            return lhs - rhs;
        }
    )
    console.log(list);

})();
