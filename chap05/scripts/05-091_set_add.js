(function () {
    'use strict';

    const data = new Set();
    data.add('壱').add('弍').add('参').add('壱');

    console.log(data);

    let result = data.delete('弍');
    console.log(result);

    result = data.delete('肆');
    console.log(result);

    console.log(data);

    data.clear();
    console.log(data);

})();
