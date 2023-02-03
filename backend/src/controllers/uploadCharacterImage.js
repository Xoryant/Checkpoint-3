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

const uploadCharacterImage = (req, res, next) => {
  upload(req, res, (err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      req.body = {
        character_name: req.body.characterName,
        character_desc: req.body.description,
        character_image: req.file.filename,
      };
      next();
    }
  });
};

module.exports = {
  uploadCharacterImage,
};
