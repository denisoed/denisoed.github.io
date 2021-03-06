//Имеется три колонки, в которых по очередно присвоены цифры.
var defaultRows = [
  ['<i class="fa fa-bomb" aria-hidden="true"></i>',
  '<i class="fa fa-bluetooth" aria-hidden="true"></i>',
  '<i class="fa fa-book" aria-hidden="true"></i>',
  '<i class="fa fa-bullhorn" aria-hidden="true"></i>',
  '<i class="fa fa-camera-retro" aria-hidden="true"></i>',
  '<i class="fa fa-clock-o" aria-hidden="true"></i>',
  '<i class="fa fa-coffee" aria-hidden="true"></i>',
  '<i class="fa fa-cube" aria-hidden="true"></i>',
  '<i class="fa fa-diamond" aria-hidden="true"></i>',
  '<i class="fa fa-envelope" aria-hidden="true"></i>',
  '<i class="fa fa-eye" aria-hidden="true"></i>',
  '<i class="fa fa-flash" aria-hidden="true"></i>',
  '<i class="fa fa-heart" aria-hidden="true"></i>',
  '<i class="fa fa-hashtag" aria-hidden="true"></i>',
  '<i class="fa fa-info" aria-hidden="true"></i>',
  '<i class="fa fa-keyboard-o" aria-hidden="true"></i>',
  '<i class="fa fa-legal" aria-hidden="true"></i>',
  '<i class="fa fa-mortar-board" aria-hidden="true"></i>',
  '<i class="fa fa-phone" aria-hidden="true"></i>',
  '<i class="fa fa-registered" aria-hidden="true"></i>',
  '<i class="fa fa-cloud" aria-hidden="true"></i>'],//0

  ['<i class="fa fa-television" aria-hidden="true"></i>',
  '<i class="fa fa-anchor" aria-hidden="true"></i>',
  '<i class="fa fa-truck" aria-hidden="true"></i>',
  '<i class="fa fa-video-camera" aria-hidden="true"></i>',
  '<i class="fa fa-wifi" aria-hidden="true"></i>',
  '<i class="fa fa-car" aria-hidden="true"></i>',
  '<i class="fa fa-bell-o" aria-hidden="true"></i>',
  '<i class="fa fa-binoculars" aria-hidden="true"></i>',
  '<i class="fa fa-bug" aria-hidden="true"></i>',
  '<i class="fa fa-circle-o" aria-hidden="true"></i>',
  '<i class="fa fa-cog" aria-hidden="true"></i>',
  '<i class="fa fa-compass" aria-hidden="true"></i>',
  '<i class="fa fa-female" aria-hidden="true"></i>',
  '<i class="fa fa-flag" aria-hidden="true"></i>',
  '<i class="fa fa-flask" aria-hidden="true"></i>',
  '<i class="fa fa-lemon-o" aria-hidden="true"></i>',
  '<i class="fa fa-key" aria-hidden="true"></i>',
  '<i class="fa fa-motorcycle" aria-hidden="true"></i>',
  '<i class="fa fa-paper-plane" aria-hidden="true"></i>',
  '<i class="fa fa-plane" aria-hidden="true"></i>',
  '<i class="fa fa-soccer-ball-o" aria-hidden="true"></i>'],//1

  ['<i class="fa fa-balance-scale" aria-hidden="true"></i>',
  '<i class="fa fa-trophy" aria-hidden="true"></i>',
  '<i class="fa fa-bus" aria-hidden="true"></i>',
  '<i class="fa fa-check" aria-hidden="true"></i>',
  '<i class="fa fa-close" aria-hidden="true"></i>',
  '<i class="fa fa-copyright" aria-hidden="true"></i>',
  '<i class="fa fa-cutlery" aria-hidden="true"></i>',
  '<i class="fa fa-eyedropper" aria-hidden="true"></i>',
  '<i class="fa fa-headphones" aria-hidden="true"></i>',
  '<i class="fa fa-magnet" aria-hidden="true"></i>',
  '<i class="fa fa-male" aria-hidden="true"></i>',
  '<i class="fa fa-microphone" aria-hidden="true"></i>',
  '<i class="fa fa-money" aria-hidden="true"></i>',
  '<i class="fa fa-plug" aria-hidden="true"></i>',
  '<i class="fa fa-puzzle-piece" aria-hidden="true"></i>',
  '<i class="fa fa-shield" aria-hidden="true"></i>',
  '<i class="fa fa-tree" aria-hidden="true"></i>',
  '<i class="fa fa-unlock" aria-hidden="true"></i>',
  '<i class="fa fa-rocket" aria-hidden="true"></i>',
  '<i class="fa fa-paw" aria-hidden="true"></i>',
  '<i class="fa fa-music" aria-hidden="true"></i>']//2
];
//Пустой двумерный массив для перебора в определенном порядке массива defaultRows[];
var temporatyArray1 = [
  [],//0
  [],//1
  []//2
];
//Пустой двумерный массив для перебора в определенном порядке массива temporatyArray[];
var temporatyArray2 = [
  [],//0
  [],//1
  []//2
];
//Пустой двумерный массив который хранит результативный набор чисел.
var resultArray = [
  [],//0
  [],//1
  []//2
];

//Общее хранилище рабочих двумерных массивов, предназначено для обращения к ним по индексу
var storeArrays = [defaultRows, temporatyArray1, temporatyArray2, resultArray];

// Необходимые переменные
var remainder = 0,//Счетчик для функции getRemainder();
    count2 = 0,//Счетчик для функции replaceNum(); Требуется обнуление
    getRow = 0,//В этой переменной хранится определенный ряд массива defaultRows[];
    count4 = 0,//Переменная для функции replaceNum();
    clickBtnRow = 0,//Считает нажатие по кнопке выбора ряда
    numberRow1 = 0,//Счетчики для перебора массива storeArrays[];
    numberRow2 = 1;//

/*
Эта  функция обрабатывается в цикле и возвращает
последовательность чисел в таком порядке
1.(0,1,2,0,1,2,0),
2.(1,2,0,1,2,0,1),
3.(2,0,1,2,0,1,2);
*/
function getRemainder(num) {
  return num % 3;
}

/*
Перезаписывает свойство переменной count4:
1.(0,0,0,1,1,1,2),
2.(2,2,3,3,3,4,4),
3.(4,5,5,5,6,6,6);
*/
function replaceNum() {
  count4 = Math.floor(count2/3);
  count2 += 1;
}

/*1).SHOWARRAY
Выводим все свойства массива defaultRows[]; в DOM дерево
*/
var rowsContainer = document.getElementById('rows');
var classRow = rowsContainer.getElementsByClassName('row');


function showNumbers(array) {
  for (var i = 0; i < 3; i++) {

    numRandom(0,20);
    var ul = document.createElement('ul');

    for (var j = 0; j < array[i].length; j++) {
      var li = document.createElement('li');
      li.innerHTML = array[i][arr[j]];
      ul.appendChild(li);
    }

    classRow[i].appendChild(ul);
  }
}
//Функция генерирует заданное количество рандомных чисел
function numRandom(min, max) {

  var rundomnumber;//случайное число

  while (arr.length <= max) {
      rundomnumber = Math.floor( Math.random() * (max - min + 1) ) + min; //создадим случайное число
      if (arr.indexOf(rundomnumber) == -1) {// проверим есть оно  у нас или нет
          arr.push(rundomnumber);// записываем в массив т.к нету
      }
   }

}
var arr = []//записываем в этот массив рандомные, не повторяющиеся числа

/*2).ОПРЕДЕЛИТЕЛЬ
Выбираем ряд в котором находится ваше загаданное число
*/

function rowIs(btn) {
  play('audio/clickRow.mp3');
  getRow = +btn.getAttribute('id') + 2;
  count2 = 0; //Обнуляем переменную чтобы в функцие replaceNum счетчик count2 при запуске был равен нулю.
  shuffleTheRows(storeArrays[numberRow1], storeArrays[numberRow2]);//Перебрать ряды в соответствии со свойствами переменных numberRow.
  numberRow1 += 1;
  numberRow2 += 1;
  clear();//После того как выбрали ряд удаляем все числа
}

//Очищает все числа в DOM дереве, для следующего вывода чисел
function clear() {
  var ull = rowsContainer.getElementsByTagName('ul');
  for (var i = 0; i < ull.length; i++) {
    ull[i].remove();
  }
}

/*3).РАСТАСОВЩИК
Перетасовывает числа из массива defaultRows[];
в массив temporatyArray[]; из которого
в результативный массив resultArray[];,
в определенном порядке.
*/
function shuffleTheRows(fullArray, emptyArray) {
  for (var i = 1; i <= 3; i++) {

    for (var j = 0; j < 21; j++) {
      replaceNum();
      emptyArray[getRemainder(remainder)][count4] = fullArray[getRemainder(getRow)][j];
      remainder += 1;
    }

    remainder = 0;
    remainder = i;
    getRow += 1;
  }

  showNumbers(emptyArray);//Вывод на экран после перебора
}

//4).Вывод загаданого числа
rowsContainer.addEventListener('click', result);

var resNum;
var h4Num;

function result(e) {
  if (clickBtnRow == 3) {

    for (var i = 0; i < classRow.length; i++) {
      classRow[i].classList.add('displayNone');
    }

    clickBtnRow = 0;
    numberRow1 = 0;
    numberRow2 = 1;
    createNode(resNum, 'div', 'id', 'resultNumber', h4Num, 'h4', storeArrays[3][+e.target.getAttribute('id')][10], rowsContainer);
    pasteText(h2, sayPhrase[1]);
    play('audio/Злойсмех.mp3');
    changeAttribute(lampImg2, 'removeAttribute', 'animated swing');
  }

  return clickBtnRow += 1;
}

//////////////////////////////////////////////////////////////////////////////
/////////////////////////////Start_modal_window//////////////////////////
//////////////////////////////////////////////////////////////////////////

var sayHello = [
  "Хеллоу Амиго",
  "ПривЭт умник!",
  "Саламчик!",
  "Здорова морда!",
  "Дратути!",
  "Даров, отверстие!",
  "Ку-ку ёпта)!"
];

var sayPhrase = [
  "Жми на тот ряд где находится твоя выбранная иконка!",
  "Ещё разок?",
  "Ну ты знаешь правило!? Как выбрал, жми на лампочку!"
];

var hello = document.getElementById('sayHello');
var start_modal_window = document.getElementById('start_modal_window');
var btn_continue = document.getElementById('btn_continue');
var dontClick = document.getElementById('dontClick');
////////////////
hello.innerHTML = sayHello[rN(0,6)];

btn_continue.addEventListener('click', function(){
  changeCss(start_modal_window, 'left', '-100%');
  showNumbers(defaultRows);
  changeAttribute(rowsContainer, 'setAttribute', 'displayFlex');
});

///////////////////////////////////////////////////////
////////////////////Главная область///////////////////
/////////////////////////////////////////////////////
var h2 = document.getElementById('h2');
var rightBlock = document.getElementById('right');
var arrowUp = document.getElementById('arrowUp');
var leftBlock = document.getElementById('left');
var lampImg1 = document.getElementById('img');
var lampImg2 = document.getElementById('img2');
var btnReady = document.getElementById('ready');
var btnRepeat = document.getElementById('repeat');

btnReady.addEventListener('click', function(){
  changeCss(rightBlock, 'backgroundImage', 'url(img/troll.png)');
  pasteText(h2, sayPhrase[0]);
  changeAttribute(h2, 'setAttribute', 'colorBlack');
  changeAttribute(lampImg1, 'setAttribute', 'displayNone');
  changeAttribute(lampImg2, 'setAttribute', 'displayBlock animated swing');
  changeAttribute(dontClick, 'setAttribute', 'displayNone');
  changeAttribute(btnReady, 'setAttribute', 'displayNone');
  changeAttribute(btnRepeat, 'setAttribute', 'displayBlock');
  play('audio/LightSwitch.mp3');
  changeAttribute(leftBlock, 'setAttribute', 'bgWhite');
}, false);

btnRepeat.addEventListener('click', function(){

  for (var i = 0; i < classRow.length; i++) {
    classRow[i].classList.remove('displayNone');
  }

  restart();
  showNumbers(defaultRows);
  delResult();
  pasteText(h2, sayPhrase[2]);
  play('audio/LightSwitch.mp3');
  changeAttribute(lampImg1, 'setAttribute', 'displayBlock animated swing');
  changeAttribute(lampImg2, 'setAttribute', 'displayNone');
  changeAttribute(leftBlock, 'setAttribute', 'bgBlack');
  changeAttribute(btnReady, 'setAttribute', 'displayBlock');
  changeAttribute(btnRepeat, 'setAttribute', 'displayNone');
  changeAttribute(h2, 'setAttribute', 'colorWhite');
  changeAttribute(dontClick, 'setAttribute', 'displayBlock');
});

////////////////////////////////////////////////////
/////////////////////ФУНКЦИИ////////////////////////
//////////////////////////////////////////////////

function changeCss(node, selector, property) {
  node.style[selector] = property;
}
function pasteText(node, text) {
  node.innerHTML = text;
}

function changeAttribute(node, act, className){
  node[act]('class', className);
}

function play(mp3){
  var audio = new Audio(mp3);
  audio.play();
}

function restart() {
  var allUl = rowsContainer.getElementsByTagName('UL');

  for (var i = 0; i < classRow.length; i++) {
    classRow[i].removeChild(allUl[0]);
  }

}

function delResult() {
  var resultNumber = document.getElementById('resultNumber');
  resultNumber.remove();
}

function rN(min, max) {
  var rundomNumber = Math.floor(Math.random() * (max - min + 1)) + min; //создадим случайное число
  return rundomNumber;
}

//Cоздаёт один родительский элемент с одним дочерним элементом
function createNode(variable1, node1, classs, attribute, variable2, node2, text, DomNode) {
  variable1 = document.createElement(node1);
  variable1.setAttribute(classs, attribute);
  variable2 = document.createElement(node2);
  variable2.innerHTML = text;
  variable1.appendChild(variable2);
  DomNode.appendChild(variable1);
}
