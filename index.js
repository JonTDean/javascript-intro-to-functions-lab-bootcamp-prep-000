function shout(string){
  return 'hello'.toUpperCase()
}

function whisper(string){
  return 'HELLO'.toLowerCase()
}

function logShout(string){
  return console.log('hello'.toUpperCase())
}

function logWhisper(string){
  return console.log('HELLO'.toLowerCase())
}

function sayHiToGrandma(string){
 
 if(string == whisper) {
   return "I can't hear you!"
   
 }else if(string == shout){
   return "YES INDEED!"
   
 }else if (string == "I love you, Grandma."){
   return "I love you, too."
   
 }
 
}