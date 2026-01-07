(function () {
    'use strict';

    const data = new Map();
    data.set('1st', 'ファースト');
    data.set('2nd', 'セカンド');
    data.set('3rd', 'サード');
    data.set('4th', 'よん');

    console.log( data );

    let result = data.delete('1st');
    console.log( result );
    result = data.delete('3rd');
    console.log( result );
    console.log( data );

    // 要素全削除するにはclear()
    data.clear();
    console.log( data );

})();
