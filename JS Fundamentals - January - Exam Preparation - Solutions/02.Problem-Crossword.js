function solve() {
   let buttons = document.getElementsByTagName('button');
   let output = document.querySelector('#output p');

   buttons[0].addEventListener('click', filter);
   buttons[1].addEventListener('click', sort);
   buttons[2].addEventListener('click', rotate);
   buttons[3].addEventListener('click', get);

   function filter() {
      let input = document.getElementById('input').value.split('');
      let secondCmd = document.getElementById('filterSecondaryCmd').value;
      let position = (+document.getElementById('filterPosition').value) - 1;

      switch (secondCmd) {
         case 'uppercase':
            output.textContent += input.filter((c) => c === c.toUpperCase() && isNaN(c))[position];
            break;
         case 'lowercase':
            output.textContent += input.filter((c) => c === c.toLowerCase() && isNaN(c))[position];
            break;
         case 'nums':
            output.textContent += input.filter((c) => !isNaN(c))[position];
            break;
      }
   }

   function sort() {
      let input = document.getElementById('input').value.split('').sort((a,b) => a.localeCompare(b));
      let secondCmd = document.getElementById('sortSecondaryCmd').value;
      let position = (+document.getElementById('sortPosition').value) - 1;

      if(secondCmd === 'Z'){
         input = input.reverse();
      }
      output.textContent += input[position];
   }

   function rotate() {
      let input = document.getElementById('input').value.split('');

      let secondCmd = +document.getElementById('rotateSecondaryCmd').value;
      let position = (+document.getElementById('rotatePosition').value) - 1;

      let rotation = secondCmd % input.length;

      while(rotation > 0){
         let char = input.pop();
         input.unshift(char);
         rotation -=1;
      }

      output.textContent += input[position];
   }

   function get() {
      let input = document.getElementById('input').value.split('');
      let position = (+document.getElementById('getPosition').value) - 1
      output.textContent += input[position]
   }
}