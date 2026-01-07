(function () {
    'use strict';

    const keys = [1, 2, 3];
    const values = ['あ', 'い', 'う'];

    const entries =
        keys.map(
            function(item, index, array){
                return [item, values[index]];
            }
        );

    const data = new Map( entries );

    console.log( data );

})();
