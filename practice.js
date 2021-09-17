
// // function secondMax(arr){ 
// //     // use int arrays
// //     var max = Math.max.apply(null, arr); // get the max of the array
// //     arr.splice(arr.indexOf(max), 1); // remove max from the array
// //     return Math.max.apply(null, arr); // get the 2nd max
// // };
// // secondMax([20, 120, 111, 215, 54, 78])

// // var secondMax = function (){ 
// //     var arr = [20, 120, 111, 215, 54, 78]; // use int arrays
// //     var max = Math.max.apply(null, arr); // get the max of the array
// //     arr.splice(arr.indexOf(max)); // remove max from the array
// //     return console.log(Math.max.apply(null, arr)); // get the 2nd max
    
// // };

// // secondMax()
// // console.log(secondMax())


// const arr=[11,22,33,44,55]

// const kap=()=>{arr.sort(functoin(a,b){return b-a;})[1];}

// console.log(kap);
//
//----------------------------------------------------------------------------------------------

// ark=[1,2,3,4,5];
// arc=ark.slice(0,3);
// console.log(ark)/// output is [1,2,3,4,5]
// console.log(arc)// op is [1,2,3]

// slice doesnt mutate the orig array, only gives out the new

//----------------------------------------------------------------------------------------------

// ark=[1,2,3,4,5];
// arc=ark.splice(0,3,'mango');
// console.log(ark) //[mango,4,5]
// console.log(arc)//[123]

// splice mutate the original and also gives the new array

//----------------------------------------------------------------------------------------------

// function  is_even(number){
// {
//     if( number < 0)
// }return

// }
//----------------------------------------------------------------------------------------------
//

// var num1,num2 ;
// num1= window.prompt('num1 taka','10');
// num2 = window.prompt('num2 tak');
//     if (parseInt( num1,10) > parseInt( num2,10))
//     {
//        ( console.log( 'num1 is greater'));
//     }
//     else if (parseInt(num1,10)< parseInt(num2,10))    
//     {
//        ( console.log('num2 is greater'));
//     }
//     else {
//         console.log ('same hay');
//     }

//----------------------------------------------------------------------------------------------

//find if positve or negative


// function paku(x,y,z)
// {
//     if (x>0&&y>0&&z>0);
// }
// console.log('wadun hay');

// elseif (x<0&&y<0&&z<0)
// {
//     console.log('negative hay');
// }

// paku(-3,-4,-5);
//----------------------------------------------------------------------------------------------
// function printNumbers(first, second, first) {
//     console.log(first, second, first);
//   }
// printNumbers(1, 2, 3);
//----------------------------------------------------------------------------------------------

//find longest number


// function find_long(str)
//  {
//     var arr1=str.match(/\w[a-z]{0,}/gi);
//     var result= arr1[0];
//     for (var x=1; x<arr1.length; x++)
//     {
//         if(result.length<arr1[x].length)
//         {
//             result=arr1[x];  
//         }
         
//     }
//     return result;
 
// }
// console.log(find_long('hello captain '))
//----------------------------------------------------------------------------------------------

//find vowels

// function vowel(str) 
// {
//     var vowel_list = 'aeiouAEIOU' ;
//     var vcount = 0;
    
//     for (var x=0; x<str.length; x++)
//     {
//         if (vowel_list.indexOf(str[x])!== -1)
//         {
//             vcount +=1;
//         }
//     } return vcount;



// }
// console.log(vowel('hello apple lover'))

//----------------------------------------------------------------------------------------------

//find prime numbers in an array


// function prime(n)
// {
//     if (n===1){
//         return false;
//     }
//     else if (n===2){
//         return true ;
//     }

//     else {
//         for (var x =2 ; x<n;n++)
//         {
//             if (n%x===0)
//             {
//                 return false;
//             }
        
//         }
//         return true;
//     }
// }

// console.log(prime(56))

//----------------------------------------------------------------------------------------------

//find second greatest and lowest

// function second_great_lowest(arr_num)
// {
//     arr_num.sort(function(x,y)
//     {
//         return x-y ;
//     });
    
//     var uniq=[arr_num[0]];
//     var result = [];

//     for (var j=1;j<arr_num.length ; j++)
//     {
//          if (arr_num[j-1]!==arr_num[j])
//          {
//              uniq.push(arr_num[j]);
//          }
//     }
//     result.push(uniq[1],uniq[uniq.length-2]);
//     return result.join(',');
// }
// console.log(second_great_lowest([56,45,36,8,7,9,33,66,524,6,23,6,5,4,545]))

//----------------------------------------------------------------------------------------------


// function factors(n)
// {
//     var num_factors=[],i;
//     for(i=1;i<=Math.floor())
// }
//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------

//findout palindrome
//find largest number
//find factorial 
//remove duplicate
//reverse the number
//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------


// function fact(num)
// {
//     // var facto=1
//     for( var i =num; i>1; i--){
      
//         if (i % 2!==0)
//         {
            
//             console.log(i)
//         }

//     }
 
  

// }
// fact(100)

//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------

//factorial

// function fan (akda)
// {
//     var paku=1;
//     for (var j=1; j<=akda; j++)
//     {
//         paku=paku*j ;
    

//     }
//     return paku;

// }
// console.log(fan(5))



// function factorial (numb)
// {
//     var sam = 1 ;
//     for (var i=1; i<=numb; i++)
//     {
//         sam=sam*i
//     }
//     return sam;
// }
// console.log(factorial(4))

// function govind(boom)
// {
//     var arya=1
//     for(var x=1;x<=boom ; x++)
//     {
//         arya=arya*x
//     }
//     return arya;
// }
// console.log(govind(3))


//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------


// // largest number
// arr = [1,2,3,4];

// console.log(Math.max.apply(null,arr)) // for maximum value
// //
// console.log(Math.min.apply(null,arr)) /// for minimum value

//----------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------















