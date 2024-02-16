const express = require("express");
const router = express.Router();
const regex = require("../utils/regex");
const DB = require("../config/db");

router.get("/", (req, res) => {
  res.send("Hello World");
});

router.post("/forms/submit", (req, res) => {
  console.log(req.body);
  const inputData = req.body;

  if (!inputData.nama || !inputData.email || !inputData.nomor_telepon) {
    return res.status(400).json({ error: "Data yang diterima tidak lengkap" });
  }

  if (!regex.isValidName(inputData.nama)) {
    res.status(400).json({ error: "Nama Tidak Valid" });
  }

  if (!regex.isValidEmail(inputData.email)) {
    res.status(400).json({ error: "Email Tidak Valid" });
  }

  if (!regex.isValidPhoneNumber(inputData.nomor_telepon)) {
    res.status(400).json({ error: "Nomor Telepon Tidak Valid" });
  }
  const count = DB.forms.length;
  DB.forms.push({ id: count + 1, ...inputData });

  res.json(inputData);
});

router.get("/forms", (req, res) => {
  res.json({ data: DB.forms });
});

router.get("/forms/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const selectedData = DB.forms.find((item) => item.id === id);

  if (!selectedData) {
    return res.status(404).json({ error: "Data tidak ditemukan" });
  }

  res.json({ data: selectedData });
});

module.exports = router;
