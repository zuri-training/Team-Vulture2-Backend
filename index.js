const express = require("express");
const app = express();

const PORT = 4000;

app.use("/", (req, res) => {
    res.send(`Hello Team-Vulture2`);
})

app.listen(PORT, () => {
    console.log(`Our App is running on port ${PORT}`);
})
