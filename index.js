function receivesAFunction(callback) {
    return callback();
}
receivesAFunction(function() { return "Oh no! I have been called Back"});


function returnsAnAnonymousFunction() {
    return () => { console.log(" I was called and finaly I have been returned");
};
}
returnsAnAnonymousFunction();

function returnsANamedFunction() {
    return (add)  = (x,y) => x + y;
}
/*Need to practice way more on this,*/
