const express = require("express");
const router = express.Router();
const {
    index, show ,store, edit, destroy,
} = require("../controller/authorController")


router.get("/author", index)
router.get("/author/:id", show)
router.post("/author/create", store)
router.put("/author/:id/edit", edit)
router.delete("/author/:id/destroy", destroy)

module.exports = router;