let divs = document.querySelector(".image-div");

let period_count = 1;
let interval = setInterval(function() {
  if ((period_count) == 3)
    clearInterval(interval)
  let message = 'Y0U CANT BE HERE!' +'LEAVE NOW'.repeat(period_count++)
  document.querySelector('#page-title').textContent = message;
}, 5000);

document.querySelector("#SirenHead1").addEventListener("click" , function(){
    document.querySelector("#SirenHead1").style.visibility = "hidden";
alert("Its behind you");
})

document.querySelector("#SirenHead2").addEventListener("click" , function(){
    document.querySelector("#SirenHead2").style.visibility = "hidden";
alert("H̸̫͑̋ȏ̴͙̋n̶̄̍ͅě̸̯y̷̞͝ ̷̩̹̿ẉ̸̠̎ẖ̴̈́y̸̟̬͋̇ ̴͍̏͠w̵̹͂̊ò̶̳͝n̴̜̞̄̈́'̴̞̌͝t̴̰̩́ ̸̦͋̆ÿ̴̠́̆o̸̖̟̍͝u̴̩̍͝ ̴͕̂̚c̶̭͕͐͝o̷̟̊͝ṁ̴̯̀e̸̼͙̅̕ ̵̘̝͆͆o̵̱̐ü̷̟t̵͓͊́?̷̞̐ͅ ̵̻̆D̶̼̚o̶͉̣͑n̴̫̍͆'̸̫̝̋ť̶͕͜ ̵̖͋y̵̤̥͝o̷̮̅u̵̦̜̓ ̴͔̐m̵̪͚̾͝i̵̮͑͠s̷͍̳͊͆s̶̨͖̉́ ̴̧̥̃̒m̵̩̀͋ȇ̴̗͈͒?̷͎̃");
})

document.querySelector("#SirenHead3").addEventListener("click" , function(){
    document.querySelector("#SirenHead3").style.visibility = "hidden";
alert("Why do I hear my mothers voice? Mom?..MOM? IS THAT YOU?");
})

document.querySelector("#SirenHead4").addEventListener("click" , function(){
    document.querySelector("#SirenHead4").style.visibility = "hidden";
alert("OH GOD IT SAW ME!!");
})
document.querySelector("#SirenHead5").addEventListener("click" , function(){
    document.querySelector("#SirenHead5").style.visibility = "hidden";
alert("[READACT] come on out of the woods..M̷̝̜̹͑̚ō̵͍̹̜̤t̵͔̥̣͚̃̀͝ḥ̵͊̓̽̈̉ȩ̵̞͙̎r̵̺͕̯̗̺̐̈̉̇ ̵͍̖̳̅m̸͔͍̙̎͜ͅi̷̢̢̛̮͂̒̅̈ṣ̵̝̰̌̀̂͘s̷̭͙̞͓͆̑͘ẹ̴̄̍̏͆͠s̸̳͙͓͌̒̑͠ ̵̤͉͈̻̾̀̾͝ͅy̸̼̻̏͊̓̔̕͜ͅo̸̳͛́͝u̶̜͕̐̽");
})

document.querySelector("#SirenHead6").addEventListener("click" , function(){
    document.querySelector("#SirenHead6").style.visibility = "hidden";
alert("It chased me for 3 days straight using my mothers voice");
})

