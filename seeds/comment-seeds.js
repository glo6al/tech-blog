const { Comment } = require("../models");

const commentData = [
  {
    comment_text: "This is great. Thanks for sharing!",
    user_id: 6,
    post_id: 1,
  },

  {
    comment_text: "What packages does SQL work with?",
    user_id: 3,
    post_id: 2,
  },

  {
    comment_text: "How do I get started with coding?",
    user_id: 2,
    post_id: 3,
  },

  {
    comment_text: "This is really helpful. Thanks for writing this!",
    user_id: 4,
    post_id: 4,
  },

  {
    comment_text: "Can you recommend any good books on coding?",
    user_id: 1,
    post_id: 5,
  },

  {
    comment_text: "This is a great resource. Thanks for sharing!",
    user_id: 5,
    post_id: 6,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
