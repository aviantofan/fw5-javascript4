const t = 8
let j = "" 

if(typeof t === "string"){
    for(let i = t.length-1; i>=0; i--){
        j = j + t[i]
    }
    if (t == j){
        console.log("Palindrom")
    }
}


if(typeof t === "string"){
    const a = t.split('').reverse().join('')
    if(a == t){
        console.log("Palindrom")
    }
}


function palindrom(cb){
    return cb(t)
}

function reverseString(data){

    if(typeof data === "string"){
        const a = data.split('').reverse().join('')
        if (a == data){
            console.log("Palindrom")
        }

    }
    
}
return(palindrom(reverseString))