// function a(){
//     let a = 7;
//     console.log(2);
//     function b(){
//         console.log(a);
//         return function b2(){
//             console.log(3);
//         }
//     }
//     return b;
// }
// let z = a();
// let z2 = z();
// z2();
// // let z2 = a();
// // let z3 = a();
// // console.log(z);
// // z();



abc(function xyz(){return 3;})
console.log(abc);


// function b(){
//     console.log(3);
// }


// function f(x){
//     console.log(x);
//     return function f2(x)
//     {
//         console.log(x);
//     }
// }

// let z = f(8);

// function oncep(d){
//     let count = 0;
//     function once(){
//         if(count < 1){
//             count++;
//             z(d);
//         }
//     }
//     once();
// }

// oncep(d);