const express = require("express")
const router = express.Router();

const {
    indexP,
    showP,
    updateP,
    storeP,
    destroyP,
} = require("../controller/productController")


router.get("/product", indexP);
router.get("/product/:id", showP);
router.post("/product/create", storeP);
router.put("/product/:id/edit", updateP);
router.delete("/product/:id/delete", destroyP);

module.exports = router