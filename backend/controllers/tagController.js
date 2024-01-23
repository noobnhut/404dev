const db = require("../models");

const Tag = db.tag;
const Post = db.post;
const TP = db.post_tag;
const sequelize = require("sequelize");
const Op = sequelize.Op;
// thêm - xóa - sửa - duyệt tag
const getTag = async (req, res) => {
  try {
    const result = await Tag.findAll();
    res.json({ success: true, result });
  } catch (error) {
    console.log(error);
  }
};

const addTag = async (req, res) => {
  try {
    const { name_tag } = req.body;

    // Kiểm tra xem tag đã tồn tại hay chưa
    const existingTag = await Tag.findOne({
      where: {
        name_tag: name_tag,
      },
    });

    if (existingTag) {
      // Nếu tag đã tồn tại, trả về thông báo lỗi
      res.json({ success: false, message: "Tag đã tồn tại." });
    } else {
      // Nếu tag chưa tồn tại, thêm vào cơ sở dữ liệu
      const result = await Tag.create({
        name_tag: name_tag,
        active_status: true,
      });

      res.json({ success: true, message: "Thêm thành công tag." });
    }
  } catch (error) {
    console.log(error);
  }
};

const updateTag = async (req, res) => {
  try {
    const { name_tag } = req.body;
    const id = req.params.id;

    // Kiểm tra xem tag mới đã tồn tại (ngoại trừ tag đang được cập nhật) hay chưa
    const existingTag = await Tag.findOne({
      where: {
        name_tag: name_tag,
        id: {
          [Op.not]: id, // Loại trừ tag có id là id đang được cập nhật
        },
      },
    });

    if (existingTag) {
      // Nếu tag đã tồn tại, trả về thông báo lỗi
      res.json({ success: false, message: "Tag đã tồn tại." });
    } else {
      // Nếu tag chưa tồn tại, thì update
      await Tag.update(
        {
          name_tag: name_tag,
        },
        {
          where: { id: id },
        }
      );

      res.json({ success: true, message: "Cập nhật thành công tag." });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Đã xảy ra lỗi trong quá trình cập nhật tag.",
    });
  }
};

const deleteTag = async (req, res) => {
  try {
    const id = req.params.id;
    const existingTag = await Tag.findByPk(id);
    if (!existingTag) {
      res.json({ success: false, message: "Tag không tồn tại." });
    } else {
      const post_exist = await TP.findAll({
        attributes: ["id_post", "id_tag", "id"],
        where: { id_tag: id },
        include: [{ model: Post, attributes: ["id"] }],
      });
      if (post_exist.length > 0) {
        for (const post of post_exist) {
          // thực hiện xóa post_tag
          await TP.destroy({
            where: {
              id_tag: post.id_tag,
              id_post: post.id_post,
            },
          });
        }
        await existingTag.destroy()
        res.json({ success: true, message: "Xóa thành công tag." });
      }
      else
      {
      res.json({ success: true, message: "Có gì đâu xóa má !!!" });
      }

    }
  } catch (error) {
    console.log(error);
  }
};

const checkTag = async (req, res) => {
  try {
    const id = req.params.id;
    const existingTag = await Tag.findByPk(id);
    if (!existingTag) {
      res.json({ success: false, message: "Tag không tồn tại." });
    } else {
      existingTag.active_status = true;
      await existingTag.save();

      res.json({ success: true, message: "Cập nhập thành công tag." });
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getTag,
  addTag,
  updateTag,
  deleteTag,
  checkTag,
};
