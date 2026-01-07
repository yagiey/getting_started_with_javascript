(function () {
    'use strict';

    class MyClass {
        static VALUE = 10;
    }
    console.log(MyClass.VALUE);

    MyClass.VALUE = 42;
    console.log(MyClass.VALUE);

})();
