const express = require("express")
const router = express.Router();

const logger = require("../middleware/loggerMiddleware")
const hasId = require("../middleware/hasIdRequest")
const {
    indexP,
    showP,
    updateP,
    storeP,
    destroyP,
} = require("../controller/productController")


router.use("/product*", logger)

router.get("/product/", indexP);
router.get("/product/:id", showP);
router.post("/product/create",storeP);
router.put("/product/:id/edit", updateP);
router.delete("/product/:id/delete", destroyP);




module.exports = router