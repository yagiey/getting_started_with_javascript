(function () {
    'use strict';

    const pet = {
        name: 'キラ',
        description: {
            birth: '2014-02-15',
        },
    };

    const copied = Object.assign({}, pet);

    console.log('pet: ', pet);
    console.log('copied: ', copied);
    console.log(pet === copied);

})();
