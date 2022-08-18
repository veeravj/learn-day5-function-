// Day 5 task

const numArr1=[2,5,8,17,20,56];
const numArr2=[2,121,8,81,2,81];

const strArr=['apple','banana','Cat','noon','Mom'];
// 2)anonymous and IIFE

//    a)odd numbers
(function (arr){
arr.forEach(function (value){
    if(value%2 !== 0){
        console.log(`Odd number using IIFE and Anonymous:${value}`);//5 17

    }
})
})(numArr1);


//  b)strings to title caps
(function (arr){
    arr.forEach(function (str){
        // console.log(str);
       console.log(`Title Capitals using IIFE and anonymous:${str.charAt(0).toUpperCase()}${str.toLowerCase().slice(1)}`);
    })
    })(strArr);

// c)sum of numbers in array 

(function (arr){
    console.log(`Total of Array using IIFE and anonymous:${arr.reduce(function (previous,current){

        return previous+current;
    } )}`)})(numArr1);

// d)prime numbers in array
 
(function (arr){
    arr.forEach(function (value){
        let count=0;
        for(let i=2;i<=value;i++){
            if(value%i === 0){
                count+=1;
            }
        }
        if(count === 1){
            console.log(`Prime number using anonymous and IIFE:${value}`);
        }
    })
})(numArr1);

// e) palindromes in array 

(function (arr){
    for(let str of arr){
        if(str.toLowerCase() === str.split("").reverse().join("").toLowerCase()){
            console.log(`Palindrome using anonymous and IIFE:${str}`);
        }
    }
})(strArr);

// f)Median of two sorted arrays 

(function (arr1,arr2){
    let sortedArr=arr1.concat(arr2).sort(function (a,b){
        return a-b;
    });
    // console.log(sortedArr.length);
    if(sortedArr.length%2 !== 0){

        console.log(`Median of sorted array using Anonymous and IIFE:${sortedArr[Math.round(sortedArr.length/2)-1]}`);
    }
    else{
        let median=(sortedArr[sortedArr.length/2] +sortedArr[(sortedArr.length/2)-1])/2; 
        console.log(`Median of sorted array using Anonymous and IIFE:${median}`);

    }

})(numArr1,numArr2);

// g)Remove duplicates from array
(function (arr){
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i] === arr[j]){
                arr.splice(j,1);
            }
        }
    }
    console.log(`After removing dulpicate using Anonymous and IIFE:${arr.join(" ")} `);
})(numArr2);

// h)rotate array
(function (arr,k){
    // console.log(k)
    for(let i=1;i<=k;i++){
        let x=arr.pop();
    //    console.log(x);
      arr.unshift(x);
    
    }
    console.log(`Rotation of Array Using Anonymous Ans IIFE:${arr.join(" ")}`);   

})(numArr1,k=3);



//3) using arrow functions

// a)odd numbers in an array:
   const odd = (arr)=>{
    for(let value of arr){
        if((value%2) !== 0){
            console.log(`Odd number using arrow:${value}`);//5 17
        }
    }
   }
   odd(numArr1);

//   b)strings to title caps
strArr.map((value)=>console.log(`Title Capitals using arrow:${value.charAt(0).toUpperCase()}${value.toLowerCase().slice(1)}`));

//  c)sum of array

const sum=(arr)=>{
    let sum=0;
    for(let index in arr){
        sum+=arr[index];
    }
    console.log(`Total of array using arrow:${sum}`)
}
sum(numArr1);

// d)return all prime numbers in an array
 

numArr1.map((value)=>{
   let count=0;
    for(let i=2;i<=value;i++){
        if(value%i===0){
         count+=1;   
        }
    }
    if(count===1){
        console.log(`Prime number using arrow function:${value}`);
    }
})

// e)palindromes in an array
   strArr.forEach((str)=>{
    // console.log(str.split("").reverse().join(""));
        if(str.toLowerCase()===str.split("").reverse().join("").toLowerCase()){
            console.log(`palindrome of the array using arrow:${str}`);
        }
    })
