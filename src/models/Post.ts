import { v4 } from 'uuid'

class Post {
  id: String;

  title: String;

  content: String;

  date: Date;

  constructor({ title, content, date}: Omit<Post, 'id'>){
    this.id = v4();
    this.title = title;
    this.content = content;
    this.date = date;
  }
}

export default Post;
