(function () {
    'use strict';

    class MyClass {
        static get VALUE() {
            return 10;
        }
    }

    console.log(MyClass.VALUE);

    MyClass.VALUE = 42; // エラー

    console.log(MyClass.VALUE);

})();
