let count = 5;
let interval = setInterval(function () {
    console.log(`Time remaining: ${count} seconds`);
    count--;
    
    if (count < 0) {
        clearInterval(interval);
        console.log("Time's up!");
    }
}, 1000);
