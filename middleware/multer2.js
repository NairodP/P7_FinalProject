const multer = require("multer");

const MIME_TYPES = {
  "image/jpg": "jpg",
  "image/jpeg": "jpg",
  "image/png": "jpg",
};

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "images/post/");
  },
  filename: (req, file, callback) => {
    const fileName = req.body.posterId + Date.now();

    const extension = MIME_TYPES[file.mimetype];
    callback(null, fileName + "." + extension);
  },
});

module.exports = multer({ storage: storage }).single("file");
