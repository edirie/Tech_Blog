const { Comment } = require('../models');

const commentData = [{
        comment_text: "Wow cool!",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "Dope!",
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: "Agree",
        user_id: 3,
        post_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
© 2022 GitHub, Inc.
Terms
Privacy
