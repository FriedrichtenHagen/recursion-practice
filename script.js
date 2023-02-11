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
// 5 = [0,1,1,2,3]

function fibsRec(n){
    if(n<2){
        return n
    }
    else{
        return (fibsRec(n-1)+fibsRec(n-2))
    }
}
function fibsRecStart(n){
    let arrayFib = []
    for(let i=0; i<n; i++){
        arrayFib.push(fibsRec(i))       
    }
    console.log(arrayFib)
}





// fibonacci numbers iteratively
// 5 = [0,1,1,2,3]

function fibs(n){
    let fibcount = 0;
    let array = [];

    for(let i=0; i<n; i++){
        if(i===0){
            fibcount=0;
        }
        else if(i===1){
            fibcount=1;
        }
        else if(i===2){
            fibcount=1;
        }
        else{ // starting from number 4
            fibcount= array[i-1]+array[i-2]
        }
        array.push(fibcount)
    }
    return array
}







// sum all numbers
// 4 = 3+2+1
function sumRange(n){
    if(n===1){ // base case
        return 1
    } else{
        return n+sumRange(n-1)
    }
}

// power function
function power(x, n){
    if(n==0){
        return 1
    } else{
        return x*power(x,n-1)
    }
}

// contains value in nested object

var nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2'
                    }
                }
            }
        }
    }
}

function contains(object, value){
    for(let key in object){
        if(typeof object[key] === "object"){
            return contains(object[key], value)
        }
        if(object[key]== value){
            return true
        }
    }
    return false
}

// sum squares of numbers in array

// var l = [1,2,3]; 
// console.log(SumSquares(l)); // 1 + 4 + 9 = 14

// l = [[1,2],3]; 
// console.log(SumSquares(l)); // 1 + 4 + 9 = 14

// l = [[[[[[[[[1]]]]]]]]] 
// console.log(SumSquares(l)); // 1 = 1

l = [10,[[10],10],[10]] 
console.log(SumSquares(l)); // 100 + 100 + 100 + 100 = 400

function SumSquares(array){
    let total = 0;

    array.forEach(element => {
        if(Array.isArray(element)){
            total += SumSquares(element)
        }else{
            total += element*element
        }
        
    });
    return total
}

// The function should return an array containing repetitions of the number argument. For instance, replicate(3, 5) should return [5,5,5]. If the times argument is negative, return an empty array.

// console.log(replicate(3, 5)) // [5, 5, 5]
// console.log(replicate(1, 69)) // [69]
// console.log(replicate(-2, 6)) // []

function replicate(n, x){
    if(!n){
        return []
    } else{
        let newArray = []
        for(let i=0; i<n; i++){
            newArray.push(x)
        }
        return newArray
    }
}