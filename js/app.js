
let dataForTable = [
  {id: 1, name: 'Максимальное зачение', value: 0},
  {id: 2, name: 'Минимальное зачение', value: 0},
  {id: 3, name: 'Сумма', value: 0},
  {id: 4, name: 'Среднее значение', value: 0},
]

function getUserInput () {
let inp = document.getElementById('userInputString').value.split(',').filter(el => el = +el).map(el => +el);
return inp;
}

function getMathCalculation (arr) {
  let max = Math.max.apply(null, arr) 
  let min = Math.min.apply(null, arr) 
  let total = arr.reduce((acc, el) => acc+el);
  let avg = Math.round(total/arr.length);
  console.log(arr);
  console.log(max);
  console.log(min);
  console.log(total);
  console.log(avg);
}

function submitUserInput () { 
  getMathCalculation(getUserInput())
  outputDataToTable()
}

function createHTMLNode (tag, attrs, content) {
  let el = document.createElement(tag);
  attrs.map(attr => {el.setAttribute(attr.name, attr.value.join(' '))});
  content?el.innerHTML=content:null;
  return el;
}


function outputDataToTable () {
//thead tr th
const columns = ['Номер', 'Параметр', 'Значение'];
const outThead = createHTMLNode ('thead', [], null);
const outTheadTr = createHTMLNode ('tr', [], null);
columns.map(el => outTheadTr.appendChild(createHTMLNode ('th', [{name: 'scope', value: ['col']}], el)));
outThead.appendChild(outTheadTr)
//tbody tr td
const outTbody = createHTMLNode ('tbody', [], null);
dataForTable.map(el => {
  const outTbodyTr = createHTMLNode('tr',[],null);
  Object.keys(el).map(elName => outTbodyTr.appendChild(createHTMLNode('td', [], el[elName])))
  outTbody.appendChild(outTbodyTr);
})
// table
const outTable = createHTMLNode ('table', [{name: 'class', value: ['table']}], null);
outTable.appendChild(outThead)
outTable.appendChild(outTbody)
document.getElementById('app').appendChild(outTable);
}


submit.onclick = submitUserInput





