(function () {
    'use strict';

    let list1 = ['い', 'ろ' ,'は', 'に', 'ほ', 'へ', 'と'];
    console.log(list1);
    console.log(list1.copyWithin(3, 2, 4));
    // いろはにほへと
    // いろははにへと

    let list2 = ['い', 'ろ' ,'は', 'に', 'ほ', 'へ', 'と'];
    console.log(list2);
    console.log(list2.copyWithin(1, 2));
    // いろはにほへと
    // いはにほへとと

    let list3 = ['い', 'ろ' ,'は', 'に', 'ほ', 'へ', 'と'];
    console.log(list3);
    console.log(list3.copyWithin(2));
    // いろはにほへと
    // いろいろはにほ

    let list4 = ['い', 'ろ' ,'は', 'に', 'ほ', 'へ', 'と'];
    console.log(list4);
    console.log(list4.copyWithin(3, -6, -3));
    // いろはにほへと
    // いろはろはにと

})();