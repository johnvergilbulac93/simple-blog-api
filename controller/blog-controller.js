const {
  show,
  create,
  showById,
  update,
  remove,
  search,
} = require("../model/blog-model");

module.exports = {
  blog: async (req, res) => {
    show(req, (err, results) => {
      if (err) {
        return res.status(500).json({
          message: "Server error",
        });
      }
      return res.json({
        blogs: results,
      });
    });
  },
  createBlog: async (req, res) => {
    const body = {
      title: req.body.title,
      description: req.body.description,
      image: `images/${req.file.filename}`,
    };
    create(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          message: "Server error",
        });
      }
      return res.status(200).json({
        message: "Successfully saved.",
        data: results,
      });
    });
  },
  blogById: (req, res) => {
    const id = req.params.id;
    showById(id, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.json({
          message: "Record not found",
        });
      }
      return res.json({
        success: "Success",
        data: results,
      });
    });
  },
  updateBlog: async (req, res) => {
    const body = {
      id: req.body.id,
      title: req.body.title,
      description: req.body.description,
    };
    update(body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          message: "Server error",
        });
      }
      return res.status(200).json({
        message: "Successfully updated.",
        data: results,
      });
    });
  },
  deleteBlog: (req, res) => {
    remove(req.body, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({
          message: "Server error",
        });
      }
      return res.json({
        message: "Record has been deleted.",
      });
    });
  },
};
