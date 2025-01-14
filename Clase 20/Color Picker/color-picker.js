const board = document.getElementById('board');
const bar = document.getElementById('bar');

const selector = document.getElementById('selector')

const redInput = document.getElementById('red');
const greenInput = document.getElementById('green');
const blueInput = document.getElementById('blue');

const hueInput = document.getElementById('hue');
const saturationInput = document.getElementById('saturation');
const lightnessInput = document.getElementById('lightness');


let hue = 0;
let color = "";
//grilla

  for(let i = 0; i < 24; i++){
    const item = document.createElement('a')
    item.classList.add('item');
    item.style.backgroundColor = "hsl(" + (i *15) + ", 100%, 50%)"

    item.addEventListener('click', () => {
        modifyHUE((i*15))
    });
    bar.appendChild(item);
    
  }
 
  function modifyHUE(value) {
     hue = value;
    
     paintGrid()
     
    }

    function paintGrid(){
      board.innerHTML = "";
     for(let i = 9; i >= 0; i --){
      const div = document.createElement('div');
      div.classList.add('list');
      board.appendChild(div);
    
      for(let j = 9; j >= 0; j --){
        const item = document.createElement('a');
        item.classList.add('item');
    
        let saturation = -100 / 9 * j + 100;
        let lightness = i * 100 / 9;
        
        item.style.backgroundColor = "hsl(" + hue + ", "+ saturation + "%, " + lightness + "%)";
       
        item.addEventListener('click', () => {
            color = item.style.backgroundColor;
            selectColor(color, hue, saturation, lightness);
        })
        div.appendChild(item);
      }
      }
    }

    function selectColor(color, h, s, l){
      selector.style.backgroundColor = color;

      let separateColor = color.replace('rgb(', '');
      separateColor = separateColor.replace(')', '');
      separateColor = separateColor.trim().split(', ');

      redInput.value = separateColor[0];
      greenInput.value = separateColor[1];
      blueInput.value = separateColor[2];

      hueInput.value = Math.floor(h);
      saturationInput.value = Math.floor(s);
      lightnessInput.value = Math.floor(l);
    }
    paintGrid();