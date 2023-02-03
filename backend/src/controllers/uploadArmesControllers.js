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

const uploadArmeImage = (req, res, next) => {
  upload(req, res, (err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      req.body = {
        weapon_name: req.body.armeName,
        weapon_desc: req.body.armeDesc,
        weapon_image: req.file.filename,
      };
      next();
    }
  });
};

module.exports = {
  uploadArmeImage,
};
