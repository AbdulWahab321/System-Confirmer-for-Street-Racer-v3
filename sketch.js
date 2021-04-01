var DETECTER=1;
var FIRSTBG=2;

function preload(){
first=loadImage("carBg.png");
bgmp=loadSound("bgmp.mp3");
}
function setup(){
 
  createCanvas(900, 500);

  gameState=FIRSTBG


  say()
}
function draw(){
  if(frameCount-84===0){
    bgmp.play()
    }

  


if(gameState===DETECTER){
  background(first)

  fill("white")
  textSize(40)
  text("Which is your System PC or Mobile",120,50);
  fill("red")
text("____________________________________________________________",40,55)
  mobile=createButton("Mobile")
  mobile.position(150,150)
  mobile.size(200,50)
  com=createButton("PC")
  com.position(500,150)
  com.size(200,50);

 var computer=createButton("Download PC version")
 var mobile1=createButton("Download Mobile version")
  mobile1.position(150,300)
  mobile1.size(200,50)
  computer.position(500,300)
  computer.size(200,50);
  fill("blue")
  text("v Download Game v",280,250)

  computer.mousePressed(()=>{
    open("https://u6512343.ct.sendgrid.net/ls/click?upn=9JS-2F714wtrENuLalHfV-2BI9UsKKdIAuBCevyxZgAwUD9TRHF5DcdyX6mAzNKk-2Ffdc5tOk-2FAU6NIma7gwY6SDe1QDbrKMMpbr1k9OrvNA49S0TlIKdz7AG4hmQ1Tzf8Mh-2F-2FZ7mONYUVRdZWeeyCdb-2FrVhVVpxEl9R8hapk1te-2B7aGEmL0-2BFCQeogmbbsZHtdmVn9f94lkas3GSedpaLPUrtYwVrG7rS1Oj92HWiiK0YHQ-3Dyby2_-2FqHO02MTbX8WX06kR-2FYqMwcSu-2FUJVHYem3l-2Fhp6EqyF-2FCJYd1Vjv5WFKIzWrXzlVmSVUoPX7WNVWMKhGc55TsqV-2FlrSM0JcStpewovZ-2BOvOB4oskfno2kyQpfIytsTPth3q61vx6B-2BhM9MUSzSzI7-2FihLAsh3-2F0WaSoERBC6rIqTi1ri7EMyqpzIFVaH52kowhTZft73O-2BZSEUBtXGJHWS-2FlbTlBMIH-2F2D9NHHFtR4rsQyk7Yi-2BaROtMGFPR5dTfVgrVpTyPOS685DzEQ2BeJg3NWhhsVu0j-2FXEfFlBeDjGawHjENRCg0botJWDvnwN-2BEFDW5ycFids81X9FHBk40xPYJeIQybI-2BnbWcTJf1cujJoVKaskC02fMT9X3d8bBJ")
  })

 mobile.mousePressed(()=>{


  open("https://abdulwahab321.github.io/Street-Racer-Game-Mobile-Edition-v6/")
 })

  
 com.mousePressed(()=>{


  open("https://abdulwahab321.github.io/Street-Racer-Game-v7/")

})

mobile1.mousePressed(()=>{
  open("https://u6512343.ct.sendgrid.net/ls/click?upn=9JS-2F714wtrENuLalHfV-2BI9UsKKdIAuBCevyxZgAwUD9TRHF5DcdyX6mAzNKk-2Ffdc5tOk-2FAU6NIma7gwY6SDe1QDbrKMMpbr1k9OrvNA49S0TlIKdz7AG4hmQ1Tzf8Mh-2Fb-2FXP7S-2BPp0kmlHY6LmbhoWJXfy6pfib9ehLvGew4z1hQIuXwz9yggbzatyBBXylB5dTTqDGmDIBFn1-2Fia3d8a3ATte079ppQRf5pM-2FaTNEXQGg5JfsJeF3cHOS3suDbqeSui4QmfdjJMmJ5RdJqDhQ-3D-3DaFeA_-2FqHO02MTbX8WX06kR-2FYqMwcSu-2FUJVHYem3l-2Fhp6EqyF-2FCJYd1Vjv5WFKIzWrXzlVmSVUoPX7WNVWMKhGc55TsqV-2FlrSM0JcStpewovZ-2BOvOB4oskfno2kyQpfIytsTPth3q61vx6B-2BhM9MUSzSzI7-2FihLAsh3-2F0WaSoERBC6rIqTi1ri7EMyqpzIFVaH52koMZOGmUt8UbqAe24lZWS2uhEqP7nYqEjMnI9U1EyuMAExW-2BQEbPJOY-2B13k2XZVxcZZNJSno4Syx4C29ambNgVCUN3YterQtTSesYnSmhsc2YQB9njsNUts8-2BGLy0r-2F94WKZEaUkSj9xBX2KDbaBjh3Qk1HXCZu4PMabh1ZvcuKUUSPXN1kmMPp6m5-2B7dB2ul-2B")
})

 }

  
  



  if(gameState===FIRSTBG){
    background(first);
 


    
    textSize(40)
    fill("white")
    text('Welcome To Street Racer Game System Cofirmer',10,50)
    textSize(30)
    text('Loading.........Please Wait',150,400)

  
  
  }
  else{
    if(gameState!==DETECTER){
    background(bg)
    }
  }




 

 


if(frameCount-300===0){
  gameState=DETECTER;
}



 
  
}
function say(){
  sp=new SpeechSynthesisUtterance();
  sp.text="Hai Welcome To street Racer Game System Cofirmer"
  window.speechSynthesis.speak(sp)
}
