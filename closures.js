// a function along with their lexical scope this bundle is called closure
// closure is a combination of function and lexical scope
var a = 900;

function b(){
    a = 1000;
    return function c(){
        console.log(a);
    }
}

b();