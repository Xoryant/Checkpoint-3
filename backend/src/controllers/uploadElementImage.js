const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../../public/assets/images"));
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage }).single("file");

const uploadElementImage = (req, res, next) => {
  upload(req, res, (err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      req.body = {
        element_name: req.body.elementName,
        element_desc: req.body.elementDesc,
        element_image: req.file.filename,
      };
      next();
    }
  });
};

module.exports = {
  uploadElementImage,
};
