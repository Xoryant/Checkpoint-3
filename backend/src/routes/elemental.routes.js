const router = require("express").Router();

const uploadControllers = require("../controllers/uploadElementImage");
const elementalControllers = require("../controllers/elementalControllers");

router.get("/", elementalControllers.browse);
router.get("/:id", elementalControllers.read);
router.put("/:id", elementalControllers.edit);
router.post(
  "/",
  uploadControllers.uploadElementImage,
  elementalControllers.add
);
router.delete("/:id", elementalControllers.destroy);

module.exports = router;
