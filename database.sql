https://dbdiagram.io/d/devto-65ad33c4ac844320ae60ba9b
Table users {
  id integer [primary key]
  username varchar
  password varchar
  fullname varchar
  email varchar
  img_link varchar
  public_id varchar
  disable_status boolean
  created_at date
}

Table reset_password
{
   id integer [primary key]
   id_user integer
   keyword_token varchar
   created_at date
}
Table posts
{
  id integer [primary key]
  id_user integer
  title varchar
  content varchar
  tag_id integer
  created_at date
}

Table tags
{
  id integer [primary key]
  name_tag varchar
  active_status boolean
  created_at date
}

Table img_posts
{
  id integer [primary key]
  id_post integer
  public_id varchar
  url_img varchar
  created_at date
}

Table comment_post
{
  id integer [primary key]
  id_post integer
  id_user integer
  content varchar
  created_at date
}

Table like_post
{
  id integer [primary key]
  id_post integer
  status boolean
  id_user integer
  created_at date
}

Table about_link
{
  id integer [primary key]
  title varchar
  content varchar
  status enum // about or link or guild
  created_at date
}

Table render_ytb
{
  id integer [primary key]
  title varchar
  content varchar
  link_video varchar
  created_at date
}

Table follow_user
{
  id integer [primary key]
  id_user integer
  status boolean
  created_at date
}

Table noti_post 
{
  id integer [primary key]
  id_user integer
  id_post integer
  content varchar
  created_at date
}

Table noti_system
{
  id integer [primary key]
  id_user integer
  content varchar
  created_at date
}

Table post_tag
{
  id integer [primary key]
  id_post integer
  id_tag varchar
}
Ref: "users"."id" < "posts"."id_user"


Ref: "posts"."id" < "like_post"."id_post"

Ref: "posts"."id" < "comment_post"."id_post"

Ref: "posts"."id" < "img_posts"."id_post"

Ref: "users"."id" < "reset_password"."id_user"

Ref: "users"."id" < "follow_user"."id_user"

Ref: "users"."id" < "noti_post"."id_user"

Ref: "posts"."id" < "noti_post"."id_post"

Ref: "users"."id" < "noti_system"."id_user"

Ref: "tags"."id" < "post_tag"."id_tag"

Ref: "posts"."id" < "post_tag"."id_post"