
const getUserInput = () => document.getElementById('userInputString').value.split(',').filter(el => el = +el).map(el => +el);

function GetMaxValue (arr)  {
  this.name = 'Максимальное значение';
  this.value = Math.max(...arr);
}
function GetMinValue (arr)  {
  this.name = 'Минимальное значение';
  this.value = Math.min(...arr);
}
function GetSummValue (arr)  {
  this.name = 'Сумма';
  this.value = arr.reduce((acc, el) => acc + el);
}
function GetAVGValue (arr)  {
  this.name = 'Среднее значение';
  this.value = arr.reduce((acc, el) => acc + el) / arr.length;
}

function GetArrayOfValues (arr) {
  let res = [];
  for (i = 0; i < arr.length; i++) {
   res.push({id: i+1, name: arr[i].name, value: arr[i].value});
 }
return res;
}

const columns = ['Номер', 'Параметр', 'Значение'];

const createHTMLNode = (tag, attrs, content) => {
  let el = document.createElement(tag);
  attrs.map(attr => {el.setAttribute(attr.name, attr.value.join(' '))});
  content?el.innerHTML=content:null;
  return el;
}

function outputDataToTable (cols, obj) {
const outTheadTr = createHTMLNode ('tr', [], null);
cols.map(el => outTheadTr.appendChild(createHTMLNode ('th', [{name: 'scope', value: ['col']}], el)));
const outThead = createHTMLNode ('thead', [], null);
outThead.appendChild(outTheadTr);
const outTbody = createHTMLNode ('tbody', [], null); //tbody tr td
obj.map(el => {
  const outTbodyTr = createHTMLNode('tr',[],null);
  Object.keys(el).map(elName => outTbodyTr.appendChild(createHTMLNode('td', [], el[elName])))
  outTbody.appendChild(outTbodyTr);
})
const outTable = createHTMLNode ('table', [{name: 'class', value: ['table']}, {name: 'id', value: ['output-table']}], null); // table
outTable.appendChild(outThead);
outTable.appendChild(outTbody);
document.getElementById ('output-table') ? document.getElementById ('output-table').remove() : null;
document.getElementById ('userInputString').value = "";
document.getElementById('app').appendChild(outTable);
}

function submitUserInput () { 
let input = getUserInput()
let max = new GetMaxValue(input);
let min = new GetMinValue(input);
let summ = new GetSummValue(input);
let avg = new GetAVGValue(input);
let arr = GetArrayOfValues([max, min, summ, avg]);
outputDataToTable(columns, arr)
}

submit.onclick = submitUserInput;






