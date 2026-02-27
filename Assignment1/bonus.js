var createCounter = function(init) {
    
    let current = init;
    
    function increment() {
        current = current + 1;
        return current;
    }
    
    function decrement() {
        current = current - 1;
        return current;
    }
    
    function reset() {
        current = init;
        return current;
    }
    
    return {
        increment: increment,
        decrement: decrement,
        reset: reset
    };
};
