
const getUserInput = () => document.getElementById('userInputString').value.split(',').filter(el => el = +el).map(el => +el);

function getMathCalculation (arr) {
  const max = Math.max(...arr) 
  const min = Math.min(...arr) 
  const total = arr.reduce((acc, el) => acc + el);
  const avg = Math.round(total/arr.length);
  const data = [
    {id: 1, name: 'Максимальное зачение', value: max},
    {id: 2, name: 'Минимальное зачение', value: min},
    {id: 3, name: 'Сумма', value: total},
    {id: 4, name: 'Среднее значение', value: avg},
  ]
  return data;
}

function createHTMLNode (tag, attrs, content) {
  let el = document.createElement(tag);
  attrs.map(attr => {el.setAttribute(attr.name, attr.value.join(' '))});
  content?el.innerHTML=content:null;
  return el;
}

function outputDataToTable (dataForTable) {
const columns = ['Номер', 'Параметр', 'Значение']; //thead tr th
const outThead = createHTMLNode ('thead', [], null);
const outTheadTr = createHTMLNode ('tr', [], null);
columns.map(el => outTheadTr.appendChild(createHTMLNode ('th', [{name: 'scope', value: ['col']}], el)));
outThead.appendChild(outTheadTr);
const outTbody = createHTMLNode ('tbody', [], null); //tbody tr td
dataForTable.map(el => {
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
  let dataForTable = getMathCalculation(getUserInput())
  outputDataToTable(dataForTable)
}

submit.onclick = submitUserInput;






