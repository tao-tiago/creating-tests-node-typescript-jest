import { isEqual } from 'date-fns'
import Post from '../models/Post';

// Data Transfer Object
interface CreatePostDTO{
  title:String;
  content:String;
  date:Date;
}

class PostsController{
  private posts: Post[];

  constructor() {
    this.posts = [];
  }

  public index(): Post[] {
    return this.posts;
  }

  public create({ title, content, date }: CreatePostDTO): Post {
    const post = new Post({ title, content, date });

    this.posts.push(post);

    return post;
  }

  public findByDate(date: Date): Post|null {

    const findPostByDate = this.posts.find(post => isEqual(date, post.date));

    return findPostByDate||null;

  }
}

export default PostsController;
