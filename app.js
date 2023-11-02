const express = require("express");
const app = express();
const contacts = require("./contacts.json");

// Konfigurasi alamat host dan port
const host = "localhost"; // alamat host
const port = 3000; // alamat port

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { namaWeb: "around world.", title: "around world." });
});

// Handle permintaan GET ke "/about" dan mengirimkan file "about.html"
app.get("/about", (req, res) => {
  res.render("about", { title: "around world. - About" });
});

// Handle permintaan GET ke "/contact" dan mengirimkan file "contact.html"
app.get("/contact", (req, res) => {
  res.render("contact", {
    title: "around world. - Contact",
    contact: contacts,
  });
});

// Middleware untuk menangani permintaan yang tidak sesuai dengan rute yang ada
app.use("/", (req, res) => {
  res.status(404);
  res.send("<h1>Not Found</h1>");
});

// Menjalankan server Express pada host dan port yang ditentukan
app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
});
