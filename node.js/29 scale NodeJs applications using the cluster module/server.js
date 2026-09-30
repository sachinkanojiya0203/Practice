const express = require("express");
const cluster = require("node:cluster");
const os = require("os");



const totalcpus = os.cpus().length;

// console.log(totalcpus)


if (cluster.isPrimary) {
    for (let i = 0; i < totalcpus; i++) {
        cluster.fork();
    }
} else {
    const app = express()
    const PORT = 8000

    app.get("/", (req, res) => {
        return res.json({ message: `Hello form server! ${process.pid}` });
    });

    console.log(`workers id ${process.pid}`)
    app.listen(PORT, () => console.log(`server sarted PORT No:http://localhost:${PORT}/`));
}