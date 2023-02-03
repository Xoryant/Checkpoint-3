const router = require("express").Router();

const uploadControllers = require("../controllers/uploadArmesControllers");
const armeControllers = require("../controllers/armesControllers");

router.get("/", armeControllers.browse);
router.get("/:id", armeControllers.read);
router.put("/:id", armeControllers.edit);
router.post("/", uploadControllers.uploadArmeImage, armeControllers.add);
router.delete("/:id", armeControllers.destroy);

module.exports = router;
