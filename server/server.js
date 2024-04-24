const express = require("express");
const app = express();

app.listen(300,() => console.log("The server is listening "))

let customers = [];

app.get("./", (req, res) => {
    const name = req.body.name;
    const password = req.body.password;

    if (!name) {
        res.status(400);
        res.errored("The name was't sent");
        return;
    }

    if (!password) {
        res.status(400);
        res.errored("The password was't sent");
        return;
    }

    customers.push({ name: name, password: password });
    res.send(customers[0]);
});