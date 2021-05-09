const express = require('express');
const { doc } = require('../firestore');
const firestore = require('../firestore');
const userCollection = firestore.collection('users');

const router = express.Router();

router.post('/users', async (req, res) => {
    const body = req.body;

    const user = await userCollection.add(body);

    return res.json(`User created with user ID ${user.id}`);
})

router.get('/users', async (req, res) => {
    const users = await userCollection.get();

    const userArray = [];

    users.forEach((doc) => {
        userArray.push({
            ...doc.data()
        })
    })

    return res.json(userArray)
})

module.exports = router;