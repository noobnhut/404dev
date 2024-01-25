const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const cors = require("cors");
require('./config/connect');
const http = require('http');
const server = http.createServer(app);

const {routerAdmin}=require('./routers/adminRouter')
const {routerUser}= require('./routers/userRouter')
const {routerTag}=require('./routers/tagRouter')
const{routerPost}=require('./routers/postRouter')
const {routerAboutLink}=require('./routers/aboutLinkRouter')
const {routerYTB}=require('./routers/YTBRouter')
// Thiết lập body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors({
  methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
}));
app.use(express.json());

// Định tuyến

app.use(routerAdmin,routerTag,routerPost,routerAboutLink,routerYTB,routerUser);
// Serve các tệp tĩnh trong thư mục "uploads"
app.use(express.static("uploads"));


const port = 3000;
server.listen(port, () => {
  console.log(`API đang chạy : http://localhost:${port}/`);
});
