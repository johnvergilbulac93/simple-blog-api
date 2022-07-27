const {
  blog,
  createBlog,
  blogById,
  updateBlog,
  deleteBlog,
  changeImage,
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
router.post("/", upload.single("blogImage"), createBlog);
router.get("/:id", blogById);
router.patch("/", updateBlog);
router.delete("/:id", deleteBlog);
router.patch("/image/:id", upload.single("blogImage"), changeImage);

module.exports = router;
