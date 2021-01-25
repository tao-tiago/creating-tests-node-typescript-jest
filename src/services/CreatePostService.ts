import { startOfHour } from 'date-fns'

import Post from '../models/Post'
import PostsController from '../controllers/PostsController';

interface ResquestDTO{
  title: String;
  content: String;
  date: Date;
}

class CreatePostService{
  private postsController: PostsController;

  constructor(postsController: PostsController) {
    this.postsController = postsController;
  }

  public execute({ title, content, date }: ResquestDTO): Post{
    const postDate = startOfHour(date);

    const findPostByDate = this.postsController.findByDate(postDate);

    if(findPostByDate) {
      throw Error('Already exist post to this date');
    }

    const post = this.postsController.create({ title, content, date: postDate })

    return post;
  }

}

export default CreatePostService;
