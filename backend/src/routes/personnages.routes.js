const router = require("express").Router();

const uploadControllers = require("../controllers/uploadCharacterImage");
const personnagesControllers = require("../controllers/personnagesControllers");

router.get("/", personnagesControllers.browse);
router.get("/:id", personnagesControllers.read);
router.put("/:id", personnagesControllers.edit);
router.post(
  "/",
  uploadControllers.uploadCharacterImage,
  personnagesControllers.add
);
router.delete("/:id", personnagesControllers.destroy);

module.exports = router;
