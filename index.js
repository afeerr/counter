
let countLy = document.getElementById("count-ly")

console.log(countLy)


let count = 0

function increment() {
    count += 1
    console.log(count)
    countLy.textContent= count
}

function save() {
    
    var countSave = count + " - "
    
    console.log(count)
    
    saveLy.textContent += countSave
    
    countLy.textContent = 0
     count = 0
}

function reset() {
    count *= 0
    console.log(count) 
    countLy.textContent = count  
    saveLy.textContent = "Previous entries:"
    

}
 
 let saveLy = document.getElementById("save-ly")
  
  console.log(saveLy)
  
  
  
  
 
//  function wordBlanks(myNoun, myAdj, myVerb, myAdv)
// {
//     var result = "";
//     result += "The " + myAdj + " " + myNoun + " " + myVerb + " the apple " + myAdv;
//     return result
// }

// console.log(wordBlanks("girl", "little", "ate", "quickly"));
// console.log(wordBlanks("turtle", "cute", "ate", "slowly."))