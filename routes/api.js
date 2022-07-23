const {
  blog,
  createBlog,
  blogById,
  updateBlog,
  deleteBlog,
} = require("../controller/blog-controller");

const router = require("express").Router();
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "images");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});
const upload = multer({ storage: storage });

router.get("/", blog);
router.post("/create", upload.single("blogImage"), createBlog);
router.get("/:id/edit", blogById);
router.patch("/update", updateBlog);
router.delete("/delete", deleteBlog);

module.exports = router;
