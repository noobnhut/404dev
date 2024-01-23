npx sequelize-cli model:generate --name user --attributes username:string,password:string,fullname:string,email:string,img_link:string,public_id:string,disable_status:boolean

npx sequelize-cli model:generate --name reset_password --attributes id_user:integer,keyword_token:string

npx sequelize-cli model:generate --name tag --attributes name_tag:string,active_status:boolean

npx sequelize-cli model:generate --name post --attributes id_user:integer,title:string,content:string

npx sequelize-cli model:generate --name img_post --attributes id_post:integer,public_id:string,url_img:string

npx sequelize-cli model:generate --name comment_post --attributes id_post:integer,content:string,id_iuser:integer

npx sequelize-cli model:generate --name like_post --attributes id_post:integer,status:boolean,id_iuser:integer

npx sequelize-cli model:generate --name about_link --attributes title:string,content:string,status:enum

npx sequelize-cli model:generate --name render_ytb --attributes title:string,content:string,link_video:string

npx sequelize-cli model:generate --name follow_user --attributes to_user:integer,from_user:integer,status:enum

npx sequelize-cli model:generate --name noti_post --attributes id_user:integer,id_post:integer,content:string

npx sequelize-cli model:generate --name noti_system --attributes id_user:integer,content:string

npx sequelize-cli model:generate --name post_tag --attributes id_post:integer,id_tag:integer

npx sequelize-cli model:generate --name admin --attributes email:string,password:string

npx sequelize-cli db:migrate
npx sequelize-cli seed:generate --name seed-event 
npx sequelize-cli db:seed:all
