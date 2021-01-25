import { Router } from 'express';
import { parseISO } from 'date-fns'

import PostsController from '../controllers/PostsController';
import CreatePostService from '../services/CreatePostService';

const postsRouter = Router();
const postsController = new PostsController();

postsRouter.get('/', (request, response) => {

  const posts = postsController.index();

  response.json(posts)
});

postsRouter.post('/', (request, response) => {
  try{

    const { title, content, date } = request.body;

    const parsedDate = parseISO(date)

    const createPost = new CreatePostService(postsController);

    const post = createPost.execute({
      title,
      content,
      date: parsedDate
    })

    response.json(post)

  } catch(err){

    return response.status(400).json({
      message: err.message
    })
  }
});

export default postsRouter;

