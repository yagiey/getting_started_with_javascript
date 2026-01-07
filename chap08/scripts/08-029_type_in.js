(function () {
    'use strict';

    const obj = { hoge: ()=>console.log('hogeです'), foo: ()=>console.log('fooだよ') }

    console.log('hoge' in obj);
    console.log('piyo' in obj);

})();
