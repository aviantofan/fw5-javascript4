const a = 98123037221069457n

function divideAndSort(num){
    const arr = []
    const res = num.toString().split(0).map(Number)

    for(let i=0; i<res.length; i++){
        arr.push(Array.from(res[i].toString()).map(Number).sort((a,b)=>a-b))
    }  
    const fin = arr.flat(1).join('')
    const temp = Number(fin)
    console.log(temp)
}
    divideAndSort(a)