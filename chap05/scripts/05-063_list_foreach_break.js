(function () {
    'use strict';

    const list = [1, 2, null, 4, 5];
    
    try {
        list.forEach(
            function (v, i) {
                if (v === null) {
                    throw new Error('null値を検出しました。');
                }
                console.log(v);
            }
        );
    } catch (e) {
        console.log(e.message);
    }

})();
