let a;

b.c = 5;
function b(){
    let c;
    console.log(c);
}

b(); 
// b.c = 3;// value modified

console.log(b.c);//undefined 