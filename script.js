let display = document.getElementById('display');
let button = Array.from(document.querySelectorAll('button'));
button.map( button => {
  button.addEventListener('click',(e)=>{
    // console.log('cliked',e.target.innerText);
   switch(e.target.innerText){
     case 'AC':
       display.innerText = '';
       break;
         
     case 'DEL':
       if(display.innerText){
         display.innerText=display.innerText.slice(0, -1);
       }
       break;
     case '=':
       display.innerText = eval(display.innerText);
       break;
     default:
       display.innerText += e.target.innerText;  
      

   }

  });
});