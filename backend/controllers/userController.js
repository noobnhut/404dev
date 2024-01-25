const db = require('../models');
const User = db.user;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
const sequelize = require("sequelize");
const Op = sequelize.Op;
const dayjs = require("dayjs");
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN;

const getUser = async (req, res) => {
  try {
    const user = await User.findAll();
    res.json({success:true,user})
  } catch (error) {
    console.log(error);
  }
};

// const getUserById = async (req, res) => {
//   const userId = req.params.id;
//   try {
//     const user = await User.findOne({
//       include: [{ model: Order }],
//       where: {
//         id: userId,
//       },
//     });
//     if (!user) {
//       return res
//         .status(404)
//         .json({ message: `Không tìm thấy user id ${userId}.` });
//     } else {
//       res.status(200).json(user);
//     }
//   } catch (error) {
//     return res
//       .status(500)
//       .json({ message: "Xảy ra lỗi khi tìm user id " + userId });
//   }
// };

// const register = async (req, res) => {
//   try {
//     const { account, fullname, address, phone, sex, password, email } =
//       req.body;
//     const exsitEmail = await User.findOne({ where: { email: email } });
//     const exsitAccount = await User.findOne({ where: { account: account } });
//     if (!exsitAccount) {
//       if (!exsitEmail) {
//         let salt = await bcrypt.genSalt(10);
//         const hash = await bcrypt.hash(password, salt);
//         await User.create({
//           account: account,
//           fullname: fullname,
//           address: address,
//           phone: phone,
//           sex: sex,
//           password: hash,
//           email: email,
//           isactive: true,
//         });
//         return res.status(200).json({ message: "Đăng ký thành công" });
//       } else {
//         return res.status(400).json({ message: "Email đã tồn tại" });
//       }
//     } else {
//       return res.status(400).json({ message: "Tên tài khoản đã được sử dụng" });
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

// const login = async (req, res) => {
//   try {
//     const { account, password } = req.body;
//     // Tìm kiếm user bằng account hoặc email
//     const exsitUser = await User.findOne({
//       where: {
//         [Op.or]: [{ account: account }, { email: account }],
//       },
//     });

//     if (exsitUser) {
//       const ismatch = await bcrypt.compare(password, exsitUser.password);
//       if (!ismatch) {
//         return res.status(201).json({ message: "Mật khẩu không chính xác." });
//       } else {
//         // Tạo JWT
//         const token = jwt.sign(
//           {
//             userId: exsitUser.id,
//           },
//           JWT_SECRET,
//           {
//             expiresIn: JWT_EXPIRES_IN,
//           }
//         );
//         return res.status(200).json({
//           id: exsitUser.id,
//           account: exsitUser.account,
//           fullname: exsitUser.fullname,
//           address: exsitUser.address,
//           sex: exsitUser.sex,
//           phone: exsitUser.phone,
//           email: exsitUser.email,
//           token,
//         });
//       }
//     } else {
//       return res
//         .status(201)
//         .json({ message: "Tài khoản sai hoặc không tồn tại" });
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

// const updateUser = async (req, res) => {
//   const userId = req.params.id;
//   const {
//     fullname,
//     address,
//     phone,
//     sex,
//     email,
//     // password
//   } = req.body;
//   // Mã hóa mật khẩu
//   // const salt = await bcrypt.genSalt(10);
//   // const hashedPassword = await bcrypt.hash(password, salt);
//   try {
//     const user = await User.findByPk(userId);
//     if (!user) {
//       return res.status(201).json({
//         message: `Không tìm thấy user id ${userId}.`,
//       });
//     } else {
//      const Updateuser =  await user.update({
//         fullname: fullname,
//         address: address,
//         phone: phone,
//         sex: sex,
//         email: email,
//         // password: hashedPassword,
//       });

//       return res.status(200).json({
//         message: `Cập nhật thông tin thành công.`, Updateuser
//       });
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

// const searchUser = async (req, res) => {
//   try {
//     const { search } = req.body;
//     const result = await User.findAll({
//       where: {
//         fullname: {
//           [Op.like]: `%${search}%`,
//         },
//       },
//     });
//     res.json(result);
//   } catch (error) {
//     console.log(error);
//   }
// };

module.exports = {
  getUser,
  // getUserById,
  // register,
  // updateUser,
  // login,
  // searchUser,
};
