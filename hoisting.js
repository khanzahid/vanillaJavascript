 "use strict"
        //object
    let obj = {
        name: "John",
        age: 30,
        city: "New York",
        greet: function() {
            console.log("inside a object method Hello, my name is " + this.name);
        },
        arr_func: function(){
            let arrow_func = () => {
            console.log("inside an arrow function Hello, my name is " + this.name);
        };
        arrow_func()
        }
    
    };
    console.log(obj.greet());
    console.log(obj.arr_func());
    //global object
    console.log(this);
    //function
    function helloBil(){
        console.log("inside a function!", this);
    }
    window.helloBil();

    function clickMe(me){
       let h1 = document.getElementsByTagName("h1");
       h1[0].style.color = "red";
    
    }