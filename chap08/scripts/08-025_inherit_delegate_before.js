(function () {
    'use strict';

    class Queue extends Array {
        enqueue(elem) { super.push(elem); }
        dequeue() { return super.shift(); }
        peek() { return this[0]; }

        // その他の不要なメソッドを無効化
        reverse() {
            throw new Error('reverse is not supported.');
        }
    }

    const q = new Queue(10, 20, 30);
    q.enqueue(40);
    console.log(q.dequeue());
    console.log(q.peek());

    q.reverse(); // エラー！リスコフの置換原則に反する。

})();
