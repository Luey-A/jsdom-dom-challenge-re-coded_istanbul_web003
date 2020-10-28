document.addEventListener("DOMContentLoaded", ready());

  function ready(){
    let i = 0;
    let paused = false;
   let set= setInterval(function() {
    document.getElementById("counter").innerHTML=`${i}`;
    i++
  }, 1000);


  document.getElementById('minus').addEventListener("click",(e)=>{
    i = i-1;
    })
    document.getElementById('heart').addEventListener("click",(e)=>{

        document.querySelector('.likes').innerHTML  +=`
        <li>Liked at ${i}</li>
        `
    })