const names = ["Ana", "Giorgi", "Mariam", "Luka", "Nino"];

const list = document.createElement("ul");
names.map((name, index) => {
  const li = document.createElement("li");
  li.textContent = name;
  li.setAttribute("key", index);
  list.appendChild(li);
});

document.body.appendChild(list);


console.log("Key error mostly occurs in React when rendering lists without a unique key attribute.");