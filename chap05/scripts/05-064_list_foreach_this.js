(function () {
    'use strict';

    const list = [10, 42, null, 73, 8];
    const result = [];

    list.forEach(
        function(v, i) {
            if (v !== null) {
                this.push(v);
            }
        },
        result
    );

    console.log(result);

})();
