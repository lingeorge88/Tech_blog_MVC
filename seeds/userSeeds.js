const { User } = require('../models');

const userData = [
    {
        username: 'johndoe123',
        twitter: 'johndoe',
        github: 'johndoe123',
        email: 'johndoe123@gmail.com',
        password: 'password1'
    },
    {
        username: 'sarahsmith789',
        twitter: '@sarahsmith',
        github: 'sarahsmith789',
        email: 'sarahsmith789@hotmail.com',
        password: 'password11'
    },
    {
        username: 'tomjones456',
        twitter: '@tomjones',
        github: 'tomjones456',
        email: 'tomjones456@yahoo.com',
        password: 'password2'
    },
    {
        username: 'lisawilson123',
        twitter: '@lisawilson',
        github: 'lisawilson123',
        email: 'lisawilson123@gmail.com',
        password: 'password3'
    },
    {
        username: 'michaelbrown789',
        twitter: '@michaelbrown',
        github: 'michaelbrown789',
        email: 'michaelbrown789@hotmail.com',
        password: 'password4'
    },
    {
        username: 'emilytaylor456',
        twitter: '@emilytaylor',
        github: 'emilytaylor456',
        email: 'emilytaylor456@yahoo.com',
        password: 'password5'
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;