const express = require("express")
const router = express.Router();

const logger = require("../middleware/loggerMiddleware")
const hasId = require("../middleware/hasIdRequest")
const {
    index,
    show,
    update,
    store,
    destroy,
    create,
    edit,
} = require("../controller/productController")


router.use("/product*", logger)

router.get("/product/", index);
router.get("/product/create",create);
router.get("/product/:id/edit", edit);
router.get("/product/:id", show);
router.post("/product/store",store);
router.put("/product/:id/edit", update);
router.get("/product/:id/delete", destroy);




module.exports = router