(function () {
    'use strict';

    class Member {
        name = '名無権兵衛';
        age = 0;
    }

    const m1 = new Member();
    m1.gender = 'male';
    console.log( m1 );

    const m2 = new Member();
    console.log( m2 );

})();
