const express = require("express");
const router = express.Router();
const {
    show, index, update, destroy, store
} = require("../controller/taskController");


router.get("/task", index);
router.get("/task/:id", show);
router.post("/task/create", store);
router.put("/task/:id/edit", update);
router.delete("/task/:id/delete", destroy);

module.exports = router;