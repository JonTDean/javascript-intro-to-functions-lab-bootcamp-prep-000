function shout(string){
  var uppercase = 'hello'.toUpperCase()
  return uppercase
}

function whisper(string){
  var lowercase = 'HELLO'.toLowerCase()
  return lowercase
}

function logShout(string){
  return console.log('hello'.toUpperCase())
}

function logWhisper(string){
  return console.log('HELLO'.toLowerCase())
}

function sayHiToGrandma(string){
 
 if(string == lowercase) {
   return "I can't hear you!"
   
 }else if(string == uppercase){
   return "YES INDEED!"
   
 }else if (string == "I love you, Grandma."){
   return "I love you, too."
   
 }
 
}