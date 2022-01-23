const t = "Saya belajar Javascript"
const word = t.split(" ")
let i = 0
let res = ""
let fin = ""

if (typeof t === "string") {
   while (i <= word.length-1){
       if(word[i]){
           fin = fin + word[i]           
       }
       if(word[i] = " "){
           res = fin + (" ") + res
           fin = ""           
       }
       if(i == word.length){
           res = fin + res
           fin = ""
       }
       i=i+1
   }
    console.log(res)
}

function reverseWords(a){
    const word = a.split(" ")
    const res = word.reverse()
    return res.join(" ")
}

console.log(reverseWords("Saya belajar Javascript"))