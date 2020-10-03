const rootElement = document.getElementById("app");
console.log(rootElement);
const element = document.createElement("h1");
element.textContent = "Product goes here";
rootElement.appendChild(element);

// var product = "Socks";
var product = document.createTextNode("Socks");
rootElement.appendChild(product);
