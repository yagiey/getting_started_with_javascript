(function () {
    'use strict';

    class Animal {}
    class Hamster extends Animal {}

    const ani = new Animal();
    const ham = new Hamster();

    console.log(ani.constructor === Animal);
    console.log(ham.constructor === Animal);
    console.log(ham.constructor === Hamster);

    // 継承関係を加味して、基底クラスまで含めた型の互換性を判定
    console.log(ham instanceof Animal);
    console.log(ham instanceof Hamster);

    // 参照しているプロトタイプを確認して判定
    console.log(Hamster.prototype.isPrototypeOf(ham));
    console.log(Animal.prototype.isPrototypeOf(ham));
    console.log(Object.prototype.isPrototypeOf(ham));

})();
