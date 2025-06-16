// IMMEDIATELY INVOKED FUNCTION EXPRESSION ( IIFE ) 

(function chai (){             //named iife
    console.log(`db connected`);
}) ();

( (name) => {
    console.log(`db connected two ${name}`);    //unnamed iife  also two iife written together using semicolon (;)
})("Harmanpreet")