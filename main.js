// function sum(num,num1){
//    return num+num1
// }


// console.log(sum(2,4));
//=====================================================

// let total
// function sum(num,num1){
//      total=num+num1;
//     return total;
// }
// sum(10,3)
// console.log(total);

 

const sum =(num,num1)=>{// erorr function
console.log( num+num1);
}

sum(2,2);
console.log("===========================");


const fact =(num,num1)=>{
console.log(num*num1);
}
fact(2,3)
console.log("===========================");

const sub =(num,num1)=>{
    console.log(num-num1);
    }
    sub(5,3)
    
    console.log("===========================");

    const div =(num,num1)=>{
        console.log(num/num1);
        }
        div(9,3)
        
console.log("==========================");
       


        let num=[11,12,13,14,15,16,17,20,25,30]
         
      console.log(num[-4]);


//==============
// const arr=["kh","ma","gfd"];//change index 
// arr[0]="kjhgf";
// arr.push("agg")//add index end array
// arr.unshift("eeee")//add index start array
// arr.pop()//dlete last add 
// arr.shift[2]//dlete determin index

// console.log(arr);
// console.log(arr.length);



// let arr=["kh","ma","gfd"];// 

// let arr1 =[aa,ss,dd]

// let newArr=arr1.concat(arr)//marge for two array
// console.log(newArr);




// for(let i=0;i<arr.length;i++) {
//    console.log(arr[i]) 
// }



// let arr =[1,2,3,4,5,6,7,8,9];

// for (let i = 0; i < arr.length; i++) {//for inside if
//   if(arr[i] %2 ==0){
//     console.log(arr[i]);
//   }
// }




const number =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];


number.filter(function(i){
    console.log("========================");

    console.log((number[i] %2 ==0))
})


let number1=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

const newnum =number1.filter(function (currentValue){// flitter inside function 
    return currentValue %2 !=0
}
)
console.log("========================");
console.log(newnum);

let number2=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

const newnum1 =number2.filter(function (currentValue){// flitter inside function 
    return currentValue %2 ==0
}
);


const First = number2.find(function (x){//find first element 
    return x%2==0
});
console.log("========================");
console.log(number2);
console.log(newnum1);
console.log(First);


number2.forEach(function(x,i){
   number2[i]=x*2
})
console.log("========================");
console.log(number2);
console.log("========================");


number2.forEach(function (value ,index,arr) {
    console.log(value);
});

console.log("========================");
console.log(number2.includes(9));
console.log(number2.reverse());
console.log(number2.sort());


number2.sort(function (a,b){//ترتيب 
    return a-b
})
console.log("========================");
console.log(number2);


const isOdd=number2.every(function (x){
    return x%2 !=0
})

console.log("========================");
console.log(isOdd);


const iseven=number2.some(function (x){
    return x%2 ==0
})

console.log("========================");
console.log(iseven);


const obj =
[
    { 
    name:"khalid",
    age:22,
},
{
    name:"ali",
    age:22,
},

]
console.log("========================");
obj.map ((value,index)=>{
console.log(value.name);
})
console.log("========================");
console.log(obj);

console.log("========================");

//=======================

labArr = [
    {
        name: "Luke Skywalker",
        height: 177,
        gender: "male",
        mass: 77,
        eye_color: "brown",
      },
      {
        name: "Leia Organa",
        height: 160,
        gender: "female",
        mass: 56,
        eye_color: "blue",
      },
      {
        name: "Han Solo",
        height: 180,
        gender: "male",
        mass: 80,
        eye_color: "brown",
      },
      {
        name: "Chewie",
        height: 222,
        gender: "male",
        mass: 190,
        eye_color: "black",
      },
      {
        name: "kevien",
        height: 106,
        gender: "male",
        mass: 32.2,
        eye_color: "red",
      },
  ];

const fArr =labArr.find(function (x){// flitter inside function 
     return x.eye_color=="blue"
}

);
console.log(fArr.name);
console.log("========================");

const fArr1 =labArr.find(function (x){// flitter inside function 
    return x.mass <=50;
}

);
console.log(fArr.gender);

console.log("============");

const fArr2 =labArr.filter(function (x){// flitter inside function 
    return x.height >=200;
}

);
console.log(labArr)

console.log("===============");

const fArr3 =labArr.filter(function (x){// flitter inside function 
    return x.gender == "male";
}

);
console.log(fArr3);
console.log("=============");
const fArr5 =labArr.map(function(x){
  return x.height
})
console.log(labArr);
    console.log(fArr5);
   


console.log("=============");
const fArr4 =labArr.sort(function (a,b){
 return a.mass-b.mass
    
}

);
console.log(fArr5.sort());
console.log("================");

const fArr6 =labArr.sort(function (a,b){
    return b.height-a.height
       
   }
   
   );
   console.log(fArr6.sort());
   
   console.log("============================");
   const fArr7 =labArr.every(function (x){
    return x.mass <="40"
       
   }
   
   );
   console.log(fArr7);
   console.log("============================");
   const fArr8 =labArr.every(function (x){
    return x.height >="200"
       
   }
   
   );
   console.log(fArr8);
   console.log("============================");

   const fArr9 =labArr.every(function (x){
    return x.eye_color ="blue"
       
   }
   
   );
   console.log(fArr9);


   const fArr10=labArr.some(function (x){
    return x.height <210
       
   }
   
   );
   console.log(fArr10);