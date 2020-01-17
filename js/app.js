

let userInput = "123, 45, df4, 778, 16, 7, sdff, 4dfs, 333s, 12, -45, 5, -er3, -200";
// let userInput = prompt('Введите через запятую:')


let arr = userInput.split(',').filter(el => el = +el).map(el => +el);
let max = Math.max.apply(null, arr) 
let min = Math.min.apply(null, arr) 
let total = arr.reduce((acc, el) => acc+el);
let avg = Math.round(total/arr.length);


console.log(arr);
console.log(max);
console.log(min);
console.log(total);
console.log(avg);
