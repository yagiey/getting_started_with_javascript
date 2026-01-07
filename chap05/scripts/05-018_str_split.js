let str1 = 'みかん\tりんご\tぶどう\t';
console.log(str1);
console.log(str1.split('\t'));
console.log(str1.split('\n'));
console.log(str1.split());
console.log(str1.split('\t', 2));
console.log(str1.split('\t', 0));
console.log(str1.split('\t', -1));

let str2 = '𠮟られて';
console.log(str2);
console.log(str2.split(''));
