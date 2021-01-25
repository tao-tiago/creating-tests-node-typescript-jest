import PostsController from '../controllers/PostsController';
import CreatePostService from '../services/CreatePostService';

const postsController = new PostsController();

describe('Post', () => {
  it('Create post', () => {

    const createPost = new CreatePostService(postsController);

    const post = createPost.execute({
      title: 'My title',
      content: 'My content',
      date: new Date()
    })

    expect(post).toHaveProperty('id');

  });

  it('List all posts', () => {

    const posts = postsController.index();
    expect.arrayContaining(posts)
  });
})
