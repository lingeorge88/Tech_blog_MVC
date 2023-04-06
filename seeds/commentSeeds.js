const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 3,
        comment_text: 'Great post, I really enjoyed reading it!'
      },
      
      
      {
        user_id: 2,
        post_id: 5,
        comment_text: 'This is so insightful, thank you for sharing.'
      },

      
      {
        user_id: 3,
        post_id: 3,
        comment_text: 'I have a question about this topic, can you please provide more information?'
      },
      
      
      {
        user_id: 3,
        post_id: 5,
        comment_text: 'Awesome article, I learned a lot from it.'
      },
      
      
      {
        user_id: 5,
        post_id: 3,
        comment_text: 'I completely agree with your point of view, well said.'
      },

      
      {
        user_id: 4,
        post_id: 1,
        comment_text: 'Thanks for sharing this!'
      },
]

const seedComments = () => Comment.bulkCreate(commentData);
module.exports = seedComments;