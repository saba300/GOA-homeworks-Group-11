const promise = new Promise((resolve, reject) => {
    resolve("Hello, Promise!");
});

promise.then(message => {
    console.log(message);  // Output: Hello, Promise!
});
