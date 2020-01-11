function shout(string){
  return 'hello'.toUpperCase()
}

var uppercase = shout(string)

function whisper(string){
  return 'HELLO'.toLowerCase()
}

var lowercase = whisper(string)

function logShout(string){
  return console.log('hello'.toUpperCase())
}

function logWhisper(string){
  return console.log('HELLO'.toLowerCase())
}

function sayHiToGrandma(string){
 
 if(string == 'hello') {
   return "I can't hear you!"
   
 }else if(string == "HELLO"){
   return "YES INDEED!"
   
 }else if (string == "I love you, Grandma."){
   return "I love you, too."
   
 }
 
}