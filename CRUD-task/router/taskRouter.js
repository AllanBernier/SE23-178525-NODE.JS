const express = require("express");
const router = express.Router();
const {
    show, index, update, destroy, store
} = require("../controller/taskController");

const taskFormRequest = require("../middleware/taskFormRequest")

router.get("/task", index);
router.get("/task/:id", show);
router.post("/task/create", taskFormRequest , store);
router.put("/task/:id/edit", taskFormRequest, update);
router.delete("/task/:id/delete", destroy);

module.exports = router;