const { User } = require('../models');

const userData = [{
        username: 'Michael',
        password: 'Jordan'

    },
    {
        username: 'Lebron',
        password: 'James'
    },
    {
        username: 'Dwyane',
        password: 'Wade'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;