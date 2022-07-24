let misImagenes= new Array(3)
  misImagenes [0]= "./images/frutas.jpg";
  misImagenes [1]= "./images/manos.jpg";
  misImagenes [2]= "./images/mariposas.jpg";
  misImagenes [3]= "./images/osos.jpg";

  let imagen = document.getElementById("imagen"); 
const varialbles = ['manos', 'mariposas', 'osos', 'frutas'];

        function carga(){
          var i = Math.round(Math.random()*3);
          document.imagen.src = misImagenes[i];
          let valueimg =  misImagenes[i];
          valueimg2  = valueimg.slice( ( (valueimg.indexOf(".") + 0) +9) ) 
 let newStr = valueimg2.slice(0, -4)
          console.log("le valor es sin extencion "+newStr );

           Functionretraso();
           let button = document.getElementById('button');
            button.textContent = 'Change the image…';
    
            
           

        }


        function Functionretraso() {
           const retrzomp4 = setTimeout(cargarImagen, 900 );
          console.log("borarEntradas");
          }
          
          
 function cargarImagen() {   
 
  const text = ' Podrias decirme que ves en la imagen?'
 const synth = window.speechSynthesis 
 const utterThis = new SpeechSynthesisUtterance(text) 
 synth.speak(utterThis)
 foo();


         } 

   function x(){

    var rand = Math.floor(Math.random()*varialbles.length);
    var rValue = varialbles[rand];
    console.log("le dato con math es : " +rValue)
   }   
   
   function foo(){
 // repetir con el intervalo de 2 segundos
// let timerId = setInterval(() => document.getElementById("demo").textContent+('tick'), 2000);
const element = document.getElementById("demo");
var rand = Math.floor(Math.random()*varialbles.length);
var rand2 = Math.floor(Math.random()*varialbles.length);
var rand3 = Math.floor(Math.random()*varialbles.length);
var rValue2 = varialbles[rand2];
var rValue3 = varialbles[rand3];
var rValue = varialbles[rand];
console.log("le dato con math es : " +rValue)
let timerId = setInterval(function() {element.innerHTML += ' <button>'+rValue+'</button> '+" "+' <button>'+rValue2+'</button> '+" "+' <button>'+rValue3+'</button> '+" "}, 2000);
// después de 5 segundos parar
setTimeout(() => { clearInterval(timerId); }, 2000);
}