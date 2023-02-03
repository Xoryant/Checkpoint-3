const router = require("express").Router();

const armesRoutes = require("./armes.routes");
const elementalRoutes = require("./elemental.routes");
const usersRoutes = require("./users.routes");
const personnagesRoutes = require("./personnages.routes");
const persoelementRoutes = require("./persoelement.routes");

router.use("/armes", armesRoutes);
router.use("/elemental", elementalRoutes);
router.use("/users", usersRoutes);
router.use("/personnages", personnagesRoutes);
router.use("/persoelement", persoelementRoutes);

module.exports = router;
