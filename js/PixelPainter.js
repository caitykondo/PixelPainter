var mainBody = document.getElementById('pixelPainter');
var colorArray = ['#7F7F7F', '#000', '#4990E2', '#9012FE', '#417505', '#7ED321', '#F8E81C', '#F6A623', '#D0011B'];
var colorChoice = 'black';
var colorButtons = [];
var currentColorOfLoop;

function createColorGrid(){


  function miscButtons(){
    var miscButtons = document.createElement('div');
    miscButtons.className = "miscButtons";
    mainBody.appendChild(miscButtons);

    var clearButton = document.createElement('button');
    miscButtons.appendChild(clearButton);
    clearButton.innerHTML = 'Clear';
<<<<<<< HEAD

    var drawButton = document.createElement('button');
    miscButtons.appendChild(drawButton);
    drawButton.innerHTML = 'Draw';

    var eraseButton = document.createElement('button');
    miscButtons.appendChild(eraseButton);
    eraseButton.innerHTML = 'Erase';

    var pixelButton = document.createElement('button');
    miscButtons.appendChild(pixelButton);
    pixelButton.innerHTML = 'Pixelz';

    pixelButton.addEventListener('click', function(){
      for(var z = 0; z < document.querySelectorAll('.pixels').length; z++){
          document.querySelectorAll('.pixels')[z].addEventListener('click', function(event){
          this.style.backgroundColor = colorChoice;
        });
      }
    });

    eraseButton.addEventListener('click', function(){
      for(var k = 0; k < document.querySelectorAll('.pixels').length; k++){
          document.querySelectorAll('.pixels')[k].addEventListener('mouseover', function(event){
              if (event.buttons === 1) {
                  this.style.backgroundColor = 'white';
              }
            });
          }
        });

    drawButton.addEventListener('click', function(){
      for(var i = 0; i < document.querySelectorAll('.pixels').length; i++){
      document.querySelectorAll('.pixels')[i].addEventListener('mouseover', function(event){
          if (event.buttons === 1) {
            if (event.shiftKey) {
              this.style.backgroundColor = colorChoice;
            } else {
              this.style.backgroundColor = colorChoice;
            }
          }
        });
      }
    });
=======
>>>>>>> caity_master

    clearButton.addEventListener('click', function(){
      for(var i = 0; i < document.querySelectorAll('.pixels').length; i++){
      document.querySelectorAll('.pixels')[i].style.backgroundColor = 'white';


    }
    });
  }

  // function drawButton(){
  //   var drawButton = document.createElement('div');
  //   drawButton.innerHTML = 'Draw';
  //   miscButtons.appendChild(drawButton);
  // }

  function makePallete(){
    var pallete = document.createElement('div');
    pallete.className = "pallete";
    mainBody.appendChild(pallete);
    for(var j = 0; j < colorArray.length; j++){
    currentColorOfLoop = colorArray[j];
    colorButtons[j] = document.createElement('div');
    colorButtons[j].className = "palleteButton";
    pallete.appendChild(colorButtons[j]);
<<<<<<< HEAD
=======
    // colorButtons[j].style.width = 20;
    // colorButtons[j].style.height = 20;
>>>>>>> caity_master
    colorButtons[j].style.backgroundColor = currentColorOfLoop;
    colorButtons[j].addEventListener('click', function(n){
      colorChoice = this.style.backgroundColor;
    });
  }
  }

  function makeGrid(rows, cols){
    var grid = document.createElement('table');
    grid.className = "grid";
    mainBody.appendChild(grid);

    for(var i = 0; i<rows; i++){
      var tr = grid.appendChild(document.createElement('tr'));
      for(var j = 0; j<cols; j++){
        var cell = tr.appendChild(document.createElement('td'));
        cell.className = "pixels";
        cell.style.backgroundColor = 'white';
        cell.addEventListener('click', function(){
          this.style.backgroundColor = colorChoice;
        });
      }
    }
  }

  // return makeGrid(40,40);
  return {
    makeGrid: makeGrid(40, 40),
    makePallete: makePallete(),
    miscButtons: miscButtons()
  };
}

var ll = createColorGrid();