const express = require("express");
const router = express.Router();
const {
    show, index, update, destroy, store, create, edit
} = require("../controller/taskController");

const taskFormRequest = require("../middleware/taskFormRequest")

router.get("/task", index);
router.get("/task/create", create);
router.get("/task/:id/delete", destroy);
router.get("/task/:id/edit", edit);
router.get("/task/:id", show);

router.post("/task/create", taskFormRequest , store);
router.post("/task/:id/edit", taskFormRequest, update);

module.exports = router;