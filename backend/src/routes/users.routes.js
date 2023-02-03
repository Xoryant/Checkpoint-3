const router = require("express").Router();

const usersControllers = require("../controllers/usersControllers");

router.get("/", usersControllers.browse);
router.get("/:id", usersControllers.read);
router.put("/:id", usersControllers.edit);
router.post("/", usersControllers.add);
router.delete("/:id", usersControllers.destroy);

router.post("/login", usersControllers.login);

module.exports = router;
