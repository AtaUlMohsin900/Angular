/*var button = document.querySelector('button');
var box = document.getElementById('changeMe');

button.onclick = function changeColor() {
   if (box.style.background == 'red') {

      box.style.background = 'blue'
   } else {
      box.style.background = 'red'
   }
}
let input;
input = 'no';

if (input === 1) {
   document.write('continue...')

} else if (input ==='y') {
   document.write('continue...')

} else if (input ==='yes') {
   document.write('continue...')

} else if (input ===0) {
   document.write('End...')

} else if (input ==='n') {
   document.write('End...')

} else if (input ==='no') {
   document.write('End...')

} else{

   document.write('wrong input...')

}*/


function car(make,model,year){
   this.make = make;
   this.model = model;
   this.year = year;
   this.getName =function(){
      return this.make+ ' '+this.year;
   }
}


var c = car ('Meridian','Saber GT', 2012);

alert (c.getName());

