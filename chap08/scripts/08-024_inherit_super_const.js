(function () {
    'use strict';

    class Member {
        constructor(name = '名無権兵衛') {
            this.name = name;
        }
    }

    class BusinessMember extends Member {
        constructor(name = '名無権兵衛', position = '社員') {
            super(name);
            this.position = position;
        }
    }

    const bm = new BusinessMember('佐藤理央', '主任')
    console.log(bm);

})();
