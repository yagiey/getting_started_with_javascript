(function () {
    'use strict';

    const Member = function(name, age) {
        this.name = name;
        this.age = age;
    };

    const m = new Member('佐藤理央', 25);

    console.log(m);

})();
