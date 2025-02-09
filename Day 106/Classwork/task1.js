function receiveBook(hasBook) {
    return new Promise((resolve, reject) => {
      if (hasBook) {
        resolve("You have successfully received the book!");
      } else {
        reject("You did not receive the book.");
      }
    });
}
  
receiveBook(true)
    .then((message) => {
      console.log(message);
    })
    .catch((error) => {
      console.log(error);
});
  
receiveBook(false)
    .then((message) => {
        console.log(message);
})
.catch((error) => {
    console.log(error);
});
  