// app.js
const froyoOrder = {};

// Function to prompt the user for froyo flavors and store the result
function getOrder() {
    const input = prompt("Enter a list of comma-separated froyo flavors:");
    const flavors = input.split(',');
    
    for (const flavor of flavors) {
        if (flavor in froyoOrder) {
            froyoOrder[flavor] += 1;
        } else {
            froyoOrder[flavor] = 1;
        }
    }
}

getOrder(); // Call the function to start the process

// Function to display the order in the console as a table
function displayOrder() {
    console.log("Flavor\t\tQuantity");
    for (const flavor in froyoOrder) {
        console.log(`${flavor}\t\t${froyoOrder[flavor]}`);
    }
}

displayOrder();
