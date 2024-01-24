const db = require('../models');
const YTB = db.render_ytb;
const sequelize = require("sequelize");
const Op = sequelize.Op;


const getYTB = async (req, res) => {
    try {
        const result = await YTB.findAll();
        res.json({ success: true, result });
        // res.json(result);
    } catch (error) {
        console.log(error);
    }
}

const addYTB = async (req, res) => {
    try {
        const { title, content, link_video} = req.body;

        const existTitle = await YTB.findOne({
            where: {title: title}
        })
        if(existTitle){
            res.json({ success: false, message: "Title đã tồn tại." });
        }else{
            const result = await YTB.create({
                title: title,
                content: content,
                link_video: link_video
            });
        
            res.json({ success: true, message: "Thêm thành công YTB." });
        }
    } catch (error) {
        console.log(error);
    }
}

const updateYTB = async (req, res) => {
    try {
        const id = req.params.id;
        const { title, content, link_video } = req.body;

        const existYTB = await YTB.findByPk(id);
        // Kiểm tra xem YTB mới đã tồn tại (ngoại trừ YTB đang được cập nhật) hay chưa
        const existTitle = await YTB.findOne({
            where: {
                title: title,
                id: {
                    [Op.not]: id, // Loại trừ YTB có id là id đang được cập nhật
                },
            },
        });

        if(!existYTB){
            // Nếu YTB không tìm thấy, trả về thông báo lỗi
            res.json({ success: false, message: "Không tìm thấy YTB." });
        }else{
            if(existTitle){
                // Nếu YTB đã tồn tại, trả về thông báo lỗi
                res.json({ success: false, message: "Title đã tồn tại." });
            }else{
                // Nếu YTB chưa tồn tại, thì update
                await YTB.update(
                  {
                    title: title,
                    content: content,
                    link_video: link_video
                  },
                  {
                    where: { id: id },
                  }
                );
                res.json({ success: true, message: "Cập nhật thành công YTB." });
            }
        }
    } catch (error) {
        console.log(error);
    }
}

const deleteYTB = async (req, res) => {
    try {
        const id = req.params.id;
        const existYTB = await YTB.findByPk(id);

        if(!existYTB){
            // Nếu YTB không tìm thấy, trả về thông báo lỗi
            res.json({ success: false, message: "Không tìm thấy YTB." });
        }else{
            await existYTB.destroy()
            res.json({ success: true, message: "Xóa thành công YTB." });
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getYTB,
    addYTB,
    updateYTB,
    deleteYTB,
}