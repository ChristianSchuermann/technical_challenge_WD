const router = require("express").Router();
const phoneRoutes = require("./phone.routes");

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

// You put the next routes here 👇
// example: router.use("/auth", authRoutes)

router.use("/phones", phoneRoutes);

module.exports = router;
