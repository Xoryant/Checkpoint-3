const router = require("express").Router();

const persoelementControllers = require("../controllers/persoelementControllers");

router.get("/", persoelementControllers.browse);
router.get("/:id", persoelementControllers.read);
router.put("/:id", persoelementControllers.edit);
router.post("/", persoelementControllers.add);
router.delete("/:id", persoelementControllers.destroy);

module.exports = router;
