(function () {
    'use strict';

    const org = /[0-9]{3}-[0-9]{4}/g;
    const copy = new RegExp(org, 'i');
    console.log( copy );

})();
