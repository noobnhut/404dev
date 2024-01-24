const db = require('../models');
const About_link = db.about_link;
const sequelize = require("sequelize");
const Op = sequelize.Op;

const getLink = async (req, res) => {
    try {
        const result = await About_link.findAll();
        res.json({ success: true, result });
    } catch (error) {
        console.log(error);
    }
}

const addLink = async (req, res) => {
    try {
        const { title, content, status } = req.body;
        
        const existTitle = await About_link.findOne({
            where: {title: title}
        });

        if(existTitle){
            res.json({ success: false, message: "Title đã tồn tại." });
        }else{
            const result = await About_link.create({
                title: title,
                content: content,
                status: status
            });
        
            res.json({ success: true, message: "Thêm thành công link." });
        }
    } catch (error) {
        console.log(error);
    }
}

const updateLink = async (req, res) => {
    try {
        const id = req.params.id;
        const { title, content, status } = req.body;

        const existLink = await About_link.findByPk(id);
        // Kiểm tra xem link mới đã tồn tại (ngoại trừ link đang được cập nhật) hay chưa
        const existTitle = await About_link.findOne({
            where: {
                title: title,
                id: {
                    [Op.not]: id, // Loại trừ link có id là id đang được cập nhật
                },
            },
        });

        if(!existLink){
            // Nếu link không tìm thấy, trả về thông báo lỗi
            res.json({ success: false, message: "Không tìm thấy link." });
        }else{
            if(existTitle){
                // Nếu link đã tồn tại, trả về thông báo lỗi
                res.json({ success: false, message: "Title đã tồn tại." });
            }else{
                // Nếu link chưa tồn tại, thì update
                await About_link.update(
                  {
                    title: title,
                    content: content,
                    status: status
                  },
                  {
                    where: { id: id },
                  }
                );
                res.json({ success: true, message: "Cập nhật thành công link." });
            }
        }
    } catch (error) {
        console.log(error);
    }
}

const deleteLink = async (req, res) => {
    try {
        const id = req.params.id;
        const existLink = await About_link.findByPk(id);

        if(!existLink){
            // Nếu link không tìm thấy, trả về thông báo lỗi
            res.json({ success: false, message: "Không tìm thấy link." });
        }else{
            await existLink.destroy()
            res.json({ success: true, message: "Xóa thành công link." });
        }

    } catch (error) {
        console.log(error);
    }
}
module.exports = {
    getLink,
    addLink,
    updateLink,
    deleteLink,
}

