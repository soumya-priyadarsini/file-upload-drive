const express = require('express');
const router = express.Router();
const multer = require("multer");
const os = require("os");
const { getFileDetails } = require("./uploadController");

const storage = multer.diskStorage({ destination: os.tmpdir(), filename: (req, file, callback) => callback(null, `${file.originalname}`) });

const upload = multer({ storage: storage });

router.post("/uploadToDrive", upload.single("file"), getFileDetails);

module.exports = router