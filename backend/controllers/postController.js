const db = require("../models");
const Tag = db.tag;
const Post = db.post;
const TP = db.post_tag;
const sequelize = require("sequelize");
const Op = sequelize.Op;
const Img = db.img_post
const cloudinary = require('cloudinary').v2
const dotenv = require("dotenv");
dotenv.config();

const multer = require("multer")
const storage = multer.memoryStorage();
const upload = multer({ storage });

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});

handleUpload = async(file) =>{
  const res = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
  });
  return res;
}

const runMiddleware = (req, res, fn) => {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}
const getPost = async (req, res) => {
  try {
    const result = await Post.findAll({
      include: [
        {
          model:Img,
          attributes:['public_id','id_post','url_img']
        },
        {
          model: TP,
          attributes: ["id", "id_tag", "id_post"],
          include: [
            {
              model: Tag,
              attributes: ["id", "name_tag", "active_status"],
              where: { active_status: true },
            },
          ],
        },
      ],
    });
    res.json({ success: true, result });
  } catch (error) {
    console.log(error);
  }
};

const addPost = async(req,res)=>
{
    try {
        
    } catch (error) {
        console.log(error)
    }
}

const updateImg = async (req, res) => {
  try {
    const id = req.params.id
    const exist = await Img.findByPk(id)
    if (exist) {
      // cập nhập bằng cách xóa cái cũ đi trên cloud
      await cloudinary.uploader.destroy(`${exist.public_id}`)
      // cho ghi đè lại cái mới được thêm vào lên bảng
      // gọi lại hàm runmiddleware 
      await runMiddleware(req, res, upload.single("file"));
      // chuyển đổi dữ liệu nhị phân (buffer) từ file được upload lên thành chuỗi ký tự mã hóa base64.
      const b64 = Buffer.from(req.file.buffer).toString("base64");
      // xử lý đưa dữ liệu lên cloud
      let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
      const cldRes = await handleUpload(dataURI);
      if (cldRes) {
        exist.public_id = cldRes.public_id
        exist.url_img = cldRes.url
        exist.save()
        res.json('Xong')
      }
    }
    else {
      res.json('Thất bại')
    }
  } catch (error) {
    console.log(error)
  }
}

const handler = async (req, res) => {
  try {
    await runMiddleware(req, res,upload.single("file"));
    const b64 = Buffer.from(req.file.buffer).toString("base64");
    let dataURI = "data:" + req.file.mimetype + ";base64," + b64;
    const cldRes = await handleUpload(dataURI);
    res.json(cldRes);
  } catch (error) {
    console.log(error);
    res.send({
      message: error.message,
    });
  }
};

module.exports = { 
    getPost
};
