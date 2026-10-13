// Lab 3
const customers = [];

const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", function () {
    const customer = {
        id: customers.length + 1,
        name: document.getElementById("fname").value + " " + document.getElementById("lname").value,
        email: document.getElementById("email").value,
        state: document.getElementById("state").value,
        classInterest: document.getElementById("class").value,
        level: document.getElementById("level").value
    };

    customers.push(customer);

    console.clear();
    console.log(customers);
});
