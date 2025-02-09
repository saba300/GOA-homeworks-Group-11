const promise = new Promise((resolve, reject) => {
    const isSuccess = Math.random() > 0.5;
    if (isSuccess) {
        resolve("Success!");
    } else {
        reject("Failed!");
    }
});

promise
    .then(message => {
        console.log(message); 
    })
    .catch(error => {
        console.log(error);  
    });
