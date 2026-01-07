(function () {
    'use strict';

    let opts = Array.from(
        document.querySelector('#food').options
    );

    opts.forEach(
        function(opt, index) {
            console.log(opt.value, index);
        }
    );

})();
