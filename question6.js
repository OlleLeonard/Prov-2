// 9. Hitta den längsta strängen (3p)
// Skriv en funktion findLongestString som tar en array av
// strängar som input och returnerar den längsta strängen från arrayen.

function findLongestString(strings) {
  let largest = strings[0];

  for(let i=0; i < strings.length; i++){
      
strings.forEach((largest) => {
   if (strings < largest) {
     largest = strings;
   }
   }); 
  }

  return largest;
}

console.log(findLongestString(["apple", "banana", "orange", "kiwi"]));
// Ska logga: "banana"
console.log(findLongestString(["dog", "cat", "elephant", "lion"]));
// Ska logga: "elephant"

