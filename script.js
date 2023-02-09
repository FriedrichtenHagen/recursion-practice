// x to the power of n

// iterative solution
 function pow(x, n){
    let result=1;

    for(let i=0; i<n; i++){
        result *= x
    }
    return result
 }

 // recursive solution  
 function powRec(x, n){
    if(n===1){ // base of recursion
        return x
    } else{
        return x*powRec(x, n-1)
    }
 }
//  2⁴ = 2x2x2x2
//  2⁴ = 2 * 2³
//  2³ = 2 * 2²
//  2² = 2 * 2

// linked list

let linkedList = {
    value: "alex",
    next: {
        value: "fred", 
        next: {
            value: "richard", 
            next: {
                value: "johannes", 
                next: {
                    value: "quintus", 
                    next: null,
                }
            }
        }
    }
}
// output names

// function linkedList(linkedList){
//     if(linkedList.next){
//         linkedList(linkedList.next)
//     }
//     console.log(linkedList.value)
// }
// reverse order
function reverseLinkedList(test){
    if(test.next){
        reverseLinkedList(test.next)
    }
    console.log(test.value)

}



// calculate factorial
function facOff(n){
    return (n!==1) ? n*facOff(n-1) : 1;
}    

// fibonacci numbers

// 5 = 4+3

function fib(n){
    if(n===1){
        return 1
    }
    else if(n===2){
        return 1
    }
    else{
        return fib(n-1)+fib(n-2)
    }
}